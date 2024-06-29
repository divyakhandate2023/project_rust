use reqwest::Client as ReqwestClient;
use serde::Deserialize;
use std::error::Error;
use tokio_postgres::{Client, NoTls};

#[derive(Debug, Deserialize)]
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

    // Insert products into the database
    for product in products {
        match insert_product(&client, &product).await {
            Ok(_) => println!("Inserted product id {}", product.id),
            Err(e) => eprintln!("Failed to insert product id {}: {}", product.id, e),
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
