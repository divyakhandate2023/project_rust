use reqwest::Client as ReqwestClient;
use serde::Deserialize;
use std::error::Error;
use tokio_postgres::{Client, NoTls};

#[derive(Debug, Deserialize, PartialEq)]
struct Product {
    id: u32,
    brand: Option<String>,
    name: String,
    price: Option<String>,
    price_sign: Option<String>,
    currency: Option<String>,
    image_link: Option<String>,
    product_link: Option<String>,
    website_link: Option<String>,
    description: Option<String>,
    rating: Option<f64>, // Change f32 to f64 to match PostgreSQL's float8
    category: Option<String>,
    product_type: String,
    tag_list: Vec<String>,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // Fetch data from the API
    let url = "http://makeup-api.herokuapp.com/api/v1/products.json";
    let products = fetch_products(url).await?;
    println!("Fetched {} products", products.len());

    // Connect to PostgreSQL
    let connection_string = "host=localhost user=postgres password=2006 dbname=make_up";
    let (client, connection) = tokio_postgres::connect(connection_string, NoTls).await?;
    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("Connection error: {}", e);
        }
    });

    // Clean and insert products into the database
    for product in products {
        let cleaned_product = clean_product(product);
        match insert_product(&client, &cleaned_product).await {
            Ok(_) => println!("Inserted product id {}", cleaned_product.id),
            Err(e) => eprintln!("Failed to insert product id {}: {}", cleaned_product.id, e),
        }
    }

    Ok(())
}

async fn fetch_products(url: &str) -> Result<Vec<Product>, Box<dyn Error>> {
    let response = ReqwestClient::new().get(url).send().await?.text().await?;
    let products: Vec<Product> = serde_json::from_str(&response)?;
    Ok(products)
}

async fn insert_product(client: &Client, product: &Product) -> Result<(), tokio_postgres::Error> {
    client
        .execute(
            "INSERT INTO products (api_id, brand, name, price, price_sign, currency, image_link, product_link, website_link, description, rating, category, product_type, tag_list)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
            &[
                &(product.id as i32),
                &product.brand,
                &product.name,
                &product.price,
                &product.price_sign,
                &product.currency,
                &product.image_link,
                &product.product_link,
                &product.website_link,
                &product.description,
                &product.rating,
                &product.category,
                &product.product_type,
                &product.tag_list.join(", "),
            ],
        )
        .await?;
    Ok(())
}

// Function to clean the product data
fn clean_product(mut product: Product) -> Product {
    // Example cleaning steps:
    // - Trim whitespace from strings
    // - Set default values for missing data
    // - Normalize or validate data
    
    if let Some(ref mut brand) = product.brand {
        *brand = brand.trim().to_string();
    }
    product.name = product.name.trim().to_string();
    if let Some(ref mut price) = product.price {
        *price = price.trim().to_string();
    }
    if let Some(ref mut price_sign) = product.price_sign {
        *price_sign = price_sign.trim().to_string();
    }
    if let Some(ref mut currency) = product.currency {
        *currency = currency.trim().to_string();
    }
    if let Some(ref mut image_link) = product.image_link {
        *image_link = image_link.trim().to_string();
    }
    if let Some(ref mut product_link) = product.product_link {
        *product_link = product_link.trim().to_string();
    }
    if let Some(ref mut website_link) = product.website_link {
        *website_link = website_link.trim().to_string();
    }
    if let Some(ref mut description) = product.description {
        *description = description.trim().to_string();
    }
    if let Some(ref mut category) = product.category {
        *category = category.trim().to_string();
    }
    product.product_type = product.product_type.trim().to_string();
    product.tag_list = product.tag_list.iter().map(|tag| tag.trim().to_string()).collect();

    product
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_clean_product_trims_whitespace() {
        let product = Product {
            id: 1,
            brand: Some(" Brand ".to_string()),
            name: " Name ".to_string(),
            price: Some(" 10.00 ".to_string()),
            price_sign: Some(" $ ".to_string()),
            currency: Some(" USD ".to_string()),
            image_link: Some(" http://example.com/image ".to_string()),
            product_link: Some(" http://example.com/product ".to_string()),
            website_link: Some(" http://example.com ".to_string()),
            description: Some(" Description ".to_string()),
            rating: Some(4.5),
            category: Some(" Category ".to_string()),
            product_type: " Type ".to_string(),
            tag_list: vec![" Tag1 ".to_string(), " Tag2 ".to_string()],
        };

        let cleaned_product = clean_product(product);

        assert_eq!(cleaned_product.brand, Some("Brand".to_string()));
        assert_eq!(cleaned_product.name, "Name".to_string());
        assert_eq!(cleaned_product.price, Some("10.00".to_string()));
        assert_eq!(cleaned_product.price_sign, Some("$".to_string()));
        assert_eq!(cleaned_product.currency, Some("USD".to_string()));
        assert_eq!(cleaned_product.image_link, Some("http://example.com/image".to_string()));
        assert_eq!(cleaned_product.product_link, Some("http://example.com/product".to_string()));
        assert_eq!(cleaned_product.website_link, Some("http://example.com".to_string()));
        assert_eq!(cleaned_product.description, Some("Description".to_string()));
        assert_eq!(cleaned_product.category, Some("Category".to_string()));
        assert_eq!(cleaned_product.product_type, "Type".to_string());
        assert_eq!(cleaned_product.tag_list, vec!["Tag1".to_string(), "Tag2".to_string()]);
    }

    #[test]
    fn test_clean_product_empty_fields() {
        let product = Product {
            id: 1,
            brand: Some("".to_string()),
            name: "".to_string(),
            price: Some("".to_string()),
            price_sign: Some("".to_string()),
            currency: Some("".to_string()),
            image_link: Some("".to_string()),
            product_link: Some("".to_string()),
            website_link: Some("".to_string()),
            description: Some("".to_string()),
            rating: None,
            category: Some("".to_string()),
            product_type: "".to_string(),
            tag_list: vec!["".to_string()],
        };

        let cleaned_product = clean_product(product);

        assert_eq!(cleaned_product.brand, None);
        assert_eq!(cleaned_product.name, "".to_string());
        assert_eq!(cleaned_product.price, None);
        assert_eq!(cleaned_product.price_sign, None);
        assert_eq!(cleaned_product.currency, None);
        assert_eq!(cleaned_product.image_link, None);
        assert_eq!(cleaned_product.product_link, None);
        assert_eq!(cleaned_product.website_link, None);
        assert_eq!(cleaned_product.description, None);
        assert_eq!(cleaned_product.category, None);
        assert_eq!(cleaned_product.product_type, "".to_string());
        assert_eq!(cleaned_product.tag_list, vec![]);
    }

    #[test]
    fn test_clean_product_empty_strings_to_none() {
        let product = Product {
            id: 1,
            brand: Some("".to_string()),
            name: "".to_string(),
            price: Some("".to_string()),
            price_sign: Some("".to_string()),
            currency: Some("".to_string()),
            image_link: Some("".to_string()),
            product_link: Some("".to_string()),
            website_link: Some("".to_string()),
            description: Some("".to_string()),
            rating: None,
            category: Some("".to_string()),
            product_type: "".to_string(),
            tag_list: vec!["".to_string()],
        };

        let cleaned_product = clean_product(product);

        assert_eq!(cleaned_product.brand, None);
        assert_eq!(cleaned_product.name, "".to_string());
        assert_eq!(cleaned_product.price, None);
        assert_eq!(cleaned_product.price_sign, None);
        assert_eq!(cleaned_product.currency, None);
        assert_eq!(cleaned_product.image_link, None);
        assert_eq!(cleaned_product.product_link, None);
        assert_eq!(cleaned_product.website_link, None);
        assert_eq!(cleaned_product.description, None);
        assert_eq!(cleaned_product.category, None);
        assert_eq!(cleaned_product.product_type, "".to_string());
        assert_eq!(cleaned_product.tag_list, vec![]);
    }

    #[test]
    fn test_clean_product_valid_values() {
        let product = Product {
            id: 1,
            brand: Some("Brand".to_string()),
            name: "Name".to_string(),
            price: Some("10.00".to_string()),
            price_sign: Some("$".to_string()),
            currency: Some("USD".to_string()),
            image_link: Some("http://example.com/image".to_string()),
            product_link: Some("http://example.com/product".to_string()),
            website_link: Some("http://example.com".to_string()),
            description: Some("Description".to_string()),
            rating: Some(4.5),
            category: Some("Category".to_string()),
            product_type: "Type".to_string(),
            tag_list: vec!["Tag1".to_string(), "Tag2".to_string()],
        };

        let cleaned_product = clean_product(product);

        assert_eq!(cleaned_product.brand, Some("Brand".to_string()));
        assert_eq!(cleaned_product.name, "Name".to_string());
        assert_eq!(cleaned_product.price, Some("10.00".to_string()));
        assert_eq!(cleaned_product.price_sign, Some("$".to_string()));
        assert_eq!(cleaned_product.currency, Some("USD".to_string()));
        assert_eq!(cleaned_product.image_link, Some("http://example.com/image".to_string()));
        assert_eq!(cleaned_product.product_link, Some("http://example.com/product".to_string()));
        assert_eq!(cleaned_product.website_link, Some("http://example.com".to_string()));
        assert_eq!(cleaned_product.description, Some("Description".to_string()));
        assert_eq!(cleaned_product.rating, Some(4.5));
        assert_eq!(cleaned_product.category, Some("Category".to_string()));
        assert_eq!(cleaned_product.product_type, "Type".to_string());
        assert_eq!(cleaned_product.tag_list, vec!["Tag1".to_string(), "Tag2".to_string()]);
    }

    #[test]
    fn test_clean_product_0_0_values() {
        let product = Product {
            id: 1,
            brand: Some("Brand".to_string()),
            name: "Name".to_string(),
            price: Some("0.0".to_string()),
            price_sign: Some("$".to_string()),
            currency: Some("USD".to_string()),
            image_link: Some("http://example.com/image".to_string()),
            product_link: Some("http://example.com/product".to_string()),
            website_link: Some("http://example.com".to_string()),
            description: Some("Description".to_string()),
            rating: Some(0.0),
            category: Some("Category".to_string()),
            product_type: "Type".to_string(),
            tag_list: vec!["Tag1".to_string(), "Tag2".to_string()],
        };

        let cleaned_product = clean_product(product);

        assert_eq!(cleaned_product.price, Some("0.0".to_string()));
        assert_eq!(cleaned_product.rating, Some(0.0));
    }

    #[test]
    fn test_clean_product_handles_empty_tag_list() {
        let product = Product {
            id: 1,
            brand: Some("Brand".to_string()),
            name: "Name".to_string(),
            price: Some("10.00".to_string()),
            price_sign: Some("$".to_string()),
            currency: Some("USD".to_string()),
            image_link: Some("http://example.com/image".to_string()),
            product_link: Some("http://example.com/product".to_string()),
            website_link: Some("http://example.com".to_string()),
            description: Some("Description".to_string()),
            rating: Some(4.5),
            category: Some("Category".to_string()),
            product_type: "Type".to_string(),
            tag_list: vec![],
        };

        let cleaned_product = clean_product(product);

        assert!(cleaned_product.tag_list.is_empty());
    }

    #[test]
    fn test_clean_product_handles_invalid_url() {
        let product = Product {
            id: 1,
            brand: Some("Brand".to_string()),
            name: "Name".to_string(),
            price: Some("10.00".to_string()),
            price_sign: Some("$".to_string()),
            currency: Some("USD".to_string()),
            image_link: Some("invalid_url".to_string()),
            product_link: Some("invalid_url".to_string()),
            website_link: Some("invalid_url".to_string()),
            description: Some("Description".to_string()),
            rating: Some(4.5),
            category: Some("Category".to_string()),
            product_type: "Type".to_string(),
            tag_list: vec!["Tag1".to_string(), "Tag2".to_string()],
        };

        let cleaned_product = clean_product(product);

        assert_eq!(cleaned_product.image_link, Some("invalid_url".to_string()));
        assert_eq!(cleaned_product.product_link, Some("invalid_url".to_string()));
        assert_eq!(cleaned_product.website_link, Some("invalid_url".to_string()));
    }
}
