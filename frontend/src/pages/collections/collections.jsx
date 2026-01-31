import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./collections.css";


export default function Collections() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      // const res = await axios.get("http://localhost:8080/api/user/collections");
      const res = await api.get("/user/collections");
      setArtworks(res.data);
    } catch (error) {
      console.log("Error fetching artworks", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { 
    // Initial fetch 
    fetchArtworks(); 
    // Polling every 10 seconds 
    const interval = setInterval(() => { fetchArtworks(); }, 10000); // 10000 ms = 10 seconds
     // Cleanup on unmount
      return () => clearInterval(interval); }, []);

  return (
    <div className="collections-page">

      <h1 className="collections-title">Collections</h1>

      {loading && <p className="status-text">Loading artworks...</p>}

      {!loading && artworks.length === 0 && (
        <p className="status-text">No artworks available.</p>
      )}

      <div className="collections-grid">
        {artworks.map((art) => (
          <div className="art-card" key={art.id}>
            <img
              src={art.imageUrl}
              alt={art.title}
              className="art-image"
            />

            <div className="art-info">
              <h3>{art.title}</h3>
              <p>{art.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
