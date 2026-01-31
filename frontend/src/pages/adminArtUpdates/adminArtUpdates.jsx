import { useState } from "react";
import "./adminArtUpdates.css";
import api from "../../services/api";

export default function Artworks() {

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);
    formData.append("description", description);

    try {
      // await axios.post("http://localhost:8080/api/admin/artworks/upload", formData, {
      await api.post("/admin/artworks/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Uploaded successfully");

      setImage(null);
      setTitle("");
      setDescription("");

    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <div className="artworks-page">

      <h1 className="artworks-title">Media Library</h1>

      <form className="upload-box" onSubmit={handleSubmit}>

        {/* File Input */}
        <input
          type="file"
          className="file-input"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        {/* Preview */}
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="preview-img"
          />
        )}

        {/* Title */}
        <input
          type="text"
          className="text-input"
          placeholder="Artwork Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Description */}
        <textarea
          className="text-area"
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        {/* Button */}
        <button className="upload-btn">
          Upload Artwork
        </button>

      </form>

      <p className="info-text">
        Uploaded artworks will appear below.
      </p>

      <div className="art-grid">
        {/* artworks will be displayed here */}
      </div>

    </div>
  );
}
