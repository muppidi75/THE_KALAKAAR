import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import "./adminArtEditor.css";

export default function ArtEditor(){

  const [artworks,setArtworks] = useState([]);
  const [editing,setEditing] = useState(null);

  useEffect(()=>{
    loadArtworks();
  },[]);

  const loadArtworks = async ()=>{
    const res = await axios.get("http://localhost:8080/api/admin/artworks");
    setArtworks(res.data);
  };

  const deleteArt = async(id)=>{
    if(!window.confirm("Delete artwork?")) return;
    await axios.delete(`http://localhost:8080/api/admin/artworks/${id}`);
    loadArtworks();
  };

  const saveEdit = async()=>{
    await axios.put(`http://localhost:8080/api/admin/artworks/${editing.id}`, editing);
    setEditing(null);
    loadArtworks();
  };

  return(
    <div className="editor-page">

      <h2>Art Editor</h2>

      <div className="editor-grid">

        {artworks.map(a=>(
          <div className="editor-card" key={a.id}>

            <img src={a.imageUrl} />

            <h4>{a.title}</h4>
            <p>{a.description}</p>

            <div className="editor-actions">
              <button onClick={()=>setEditing(a)}>Edit</button>
              <button className="danger"
                onClick={()=>deleteArt(a.id)}>
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

      {editing && (
        <div className="edit-modal">

          <h3>Edit Artwork</h3>

          <input
            value={editing.title}
            onChange={e=>setEditing({...editing,title:e.target.value})}
          />

          <textarea
            value={editing.description}
            onChange={e=>setEditing({...editing,description:e.target.value})}
          />

          <div className="modal-actions">
            <button onClick={saveEdit}>Save</button>
            <button onClick={()=>setEditing(null)}>Cancel</button>
          </div>

        </div>
      )}

    </div>
  );
}
