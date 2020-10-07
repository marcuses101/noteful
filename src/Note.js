import React from "react";
import DeleteNote from "./DeleteNote";
import "./Note.css";
import { Link } from "react-router-dom";

export default function Note({ name, id, modified }) {
  return (
    <div className="Note">
      <h2><Link to={`/note/${id}`}>{name}</Link></h2>
      <div className="container">
        <p>Date modified: {new Date(modified).toLocaleDateString()}</p>
        <DeleteNote />
      </div>
    </div>
  );
}
