(function() {var implementors = {
"base64":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"base64/alphabet/enum.ParseAlphabetError.html\" title=\"enum base64::alphabet::ParseAlphabetError\">ParseAlphabetError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"base64/enum.DecodeError.html\" title=\"enum base64::DecodeError\">DecodeError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"base64/enum.DecodeSliceError.html\" title=\"enum base64::DecodeSliceError\">DecodeSliceError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"base64/enum.EncodeSliceError.html\" title=\"enum base64::EncodeSliceError\">EncodeSliceError</a>"]],
"crypto_common":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"crypto_common/struct.InvalidLength.html\" title=\"struct crypto_common::InvalidLength\">InvalidLength</a>"]],
"digest":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"digest/struct.InvalidBufferSize.html\" title=\"struct digest::InvalidBufferSize\">InvalidBufferSize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"digest/struct.InvalidOutputSize.html\" title=\"struct digest::InvalidOutputSize\">InvalidOutputSize</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"digest/struct.MacError.html\" title=\"struct digest::MacError\">MacError</a>"]],
"futures_channel":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.SendError.html\" title=\"struct futures_channel::mpsc::SendError\">SendError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TryRecvError.html\" title=\"struct futures_channel::mpsc::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Canceled.html\" title=\"struct futures_channel::oneshot::Canceled\">Canceled</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.TrySendError.html\" title=\"struct futures_channel::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;"]],
"futures_task":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_task/struct.SpawnError.html\" title=\"struct futures_task::SpawnError\">SpawnError</a>"]],
"futures_util":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/future/struct.Aborted.html\" title=\"struct futures_util::future::Aborted\">Aborted</a>"],["impl&lt;T, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryChunksError.html\" title=\"struct futures_util::stream::TryChunksError\">TryChunksError</a>&lt;T, E&gt;"],["impl&lt;T, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryReadyChunksError.html\" title=\"struct futures_util::stream::TryReadyChunksError\">TryReadyChunksError</a>&lt;T, E&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReuniteError.html\" title=\"struct futures_util::io::ReuniteError\">ReuniteError</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>, Item&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"futures_util/stream/struct.ReuniteError.html\" title=\"struct futures_util::stream::ReuniteError\">ReuniteError</a>&lt;T, Item&gt;"]],
"getrandom":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"getrandom/struct.Error.html\" title=\"struct getrandom::Error\">Error</a>"]],
"h2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"h2/struct.Error.html\" title=\"struct h2::Error\">Error</a>"]],
"http":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.InvalidHeaderName.html\" title=\"struct http::header::InvalidHeaderName\">InvalidHeaderName</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.InvalidHeaderValue.html\" title=\"struct http::header::InvalidHeaderValue\">InvalidHeaderValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.MaxSizeReached.html\" title=\"struct http::header::MaxSizeReached\">MaxSizeReached</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/header/struct.ToStrError.html\" title=\"struct http::header::ToStrError\">ToStrError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/method/struct.InvalidMethod.html\" title=\"struct http::method::InvalidMethod\">InvalidMethod</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/status/struct.InvalidStatusCode.html\" title=\"struct http::status::InvalidStatusCode\">InvalidStatusCode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/struct.Error.html\" title=\"struct http::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/uri/struct.InvalidUri.html\" title=\"struct http::uri::InvalidUri\">InvalidUri</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http/uri/struct.InvalidUriParts.html\" title=\"struct http::uri::InvalidUriParts\">InvalidUriParts</a>"]],
"http_body":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"http_body/struct.LengthLimitError.html\" title=\"struct http_body::LengthLimitError\">LengthLimitError</a>"]],
"httparse":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"httparse/enum.Error.html\" title=\"enum httparse::Error\">Error</a>"]],
"httpdate":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"httpdate/struct.Error.html\" title=\"struct httpdate::Error\">Error</a>"]],
"hyper":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"hyper/client/connect/dns/struct.InvalidNameError.html\" title=\"struct hyper::client::connect::dns::InvalidNameError\">InvalidNameError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"hyper/struct.Error.html\" title=\"struct hyper::Error\">Error</a>"]],
"idna":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"idna/struct.Errors.html\" title=\"struct idna::Errors\">Errors</a>"]],
"indexmap":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"indexmap/struct.TryReserveError.html\" title=\"struct indexmap::TryReserveError\">TryReserveError</a>"]],
"ipnet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"ipnet/struct.AddrParseError.html\" title=\"struct ipnet::AddrParseError\">AddrParseError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"ipnet/struct.PrefixLenError.html\" title=\"struct ipnet::PrefixLenError\">PrefixLenError</a>"]],
"mime":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"mime/struct.FromStrError.html\" title=\"struct mime::FromStrError\">FromStrError</a>"]],
"native_tls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"native_tls/struct.Error.html\" title=\"struct native_tls::Error\">Error</a>"],["impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"native_tls/enum.HandshakeError.html\" title=\"enum native_tls::HandshakeError\">HandshakeError</a>&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div>"]],
"postgres_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"postgres_types/struct.WasNull.html\" title=\"struct postgres_types::WasNull\">WasNull</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"postgres_types/struct.WrongType.html\" title=\"struct postgres_types::WrongType\">WrongType</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>"]],
"rand":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.BernoulliError.html\" title=\"enum rand::distributions::BernoulliError\">BernoulliError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/distributions/enum.WeightedError.html\" title=\"enum rand::distributions::WeightedError\">WeightedError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand/rngs/adapter/struct.ReadError.html\" title=\"struct rand::rngs::adapter::ReadError\">ReadError</a>"]],
"rand_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>"]],
"reqwest":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"reqwest/struct.Error.html\" title=\"struct reqwest::Error\">Error</a>"]],
"schannel":[["impl&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"schannel/tls_stream/enum.HandshakeError.html\" title=\"enum schannel::tls_stream::HandshakeError\">HandshakeError</a>&lt;S&gt;"]],
"serde":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>"]],
"serde_json":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/struct.Error.html\" title=\"struct serde_json::Error\">Error</a>"]],
"serde_urlencoded":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"serde_urlencoded/ser/enum.Error.html\" title=\"enum serde_urlencoded::ser::Error\">Error</a>"]],
"stringprep":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"stringprep/struct.Error.html\" title=\"struct stringprep::Error\">Error</a>"]],
"syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>"]],
"tokio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.RecvError.html\" title=\"enum tokio::sync::broadcast::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/broadcast/error/enum.TryRecvError.html\" title=\"enum tokio::sync::broadcast::error::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.TryAcquireError.html\" title=\"enum tokio::sync::TryAcquireError\">TryAcquireError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TryRecvError.html\" title=\"enum tokio::sync::mpsc::error::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/oneshot/error/enum.TryRecvError.html\" title=\"enum tokio::sync::oneshot::error::TryRecvError\">TryRecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/net/tcp/struct.ReuniteError.html\" title=\"struct tokio::net::tcp::ReuniteError\">ReuniteError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/runtime/struct.TryCurrentError.html\" title=\"struct tokio::runtime::TryCurrentError\">TryCurrentError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/oneshot/error/struct.RecvError.html\" title=\"struct tokio::sync::oneshot::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.AcquireError.html\" title=\"struct tokio::sync::AcquireError\">AcquireError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/struct.TryLockError.html\" title=\"struct tokio::sync::TryLockError\">TryLockError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.RecvError.html\" title=\"struct tokio::sync::watch::error::RecvError\">RecvError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/task/struct.JoinError.html\" title=\"struct tokio::task::JoinError\">JoinError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Elapsed.html\" title=\"struct tokio::time::error::Elapsed\">Elapsed</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/time/error/struct.Error.html\" title=\"struct tokio::time::error::Error\">Error</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.SendTimeoutError.html\" title=\"enum tokio::sync::mpsc::error::SendTimeoutError\">SendTimeoutError</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/mpsc/error/enum.TrySendError.html\" title=\"enum tokio::sync::mpsc::error::TrySendError\">TrySendError</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/mpsc/error/struct.SendError.html\" title=\"struct tokio::sync::mpsc::error::SendError\">SendError</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/watch/error/struct.SendError.html\" title=\"struct tokio::sync::watch::error::SendError\">SendError</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio/sync/enum.SetError.html\" title=\"enum tokio::sync::SetError\">SetError</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio/sync/broadcast/error/struct.SendError.html\" title=\"struct tokio::sync::broadcast::error::SendError\">SendError</a>&lt;T&gt;"]],
"tokio_postgres":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_postgres/error/struct.DbError.html\" title=\"struct tokio_postgres::error::DbError\">DbError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_postgres/error/struct.Error.html\" title=\"struct tokio_postgres::error::Error\">Error</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_postgres/tls/struct.NoTlsError.html\" title=\"struct tokio_postgres::tls::NoTlsError\">NoTlsError</a>"]],
"tokio_util":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio_util/codec/enum.AnyDelimiterCodecError.html\" title=\"enum tokio_util::codec::AnyDelimiterCodecError\">AnyDelimiterCodecError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"tokio_util/codec/enum.LinesCodecError.html\" title=\"enum tokio_util::codec::LinesCodecError\">LinesCodecError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_util/codec/length_delimited/struct.LengthDelimitedCodecError.html\" title=\"struct tokio_util::codec::length_delimited::LengthDelimitedCodecError\">LengthDelimitedCodecError</a>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_util/sync/struct.PollSendError.html\" title=\"struct tokio_util::sync::PollSendError\">PollSendError</a>&lt;T&gt;"]],
"tracing_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/dispatcher/struct.SetGlobalDefaultError.html\" title=\"struct tracing_core::dispatcher::SetGlobalDefaultError\">SetGlobalDefaultError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelError.html\" title=\"struct tracing_core::metadata::ParseLevelError\">ParseLevelError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"tracing_core/metadata/struct.ParseLevelFilterError.html\" title=\"struct tracing_core::metadata::ParseLevelFilterError\">ParseLevelFilterError</a>"]],
"url":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"enum\" href=\"url/enum.ParseError.html\" title=\"enum url::ParseError\">ParseError</a>"]],
"uuid":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"uuid/struct.Error.html\" title=\"struct uuid::Error\">Error</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()