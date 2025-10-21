import { useState } from "react";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!longUrl) {
      setError("Please enter a URL");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://api.shrtco.de/v2/shorten?url=" + encodeURIComponent(longUrl)
      );
      const data = await response.json();

      if (data.ok) {
        setShortUrl(data.result.full_short_link);
      } else {
        setError("Failed to shorten URL");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>URL Shortener</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="url"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button
          onClick={handleShorten}
          disabled={loading}
          style={{ padding: "10px 20px" }}
        >
          {loading ? "Shortening..." : "Shorten URL"}
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>Shortened URL:</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              value={shortUrl}
              readOnly
              style={{ flex: 1, padding: "10px" }}
            />
            <button onClick={copyToClipboard} style={{ padding: "10px 20px" }}>
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlShortner;
