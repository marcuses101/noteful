import React from "react";
import "./AddNoteButton.css"
import {Link} from "react-router-dom"

export default function AddNote() {
  return <Link to="/add-note/"><button className="AddNoteButton">Add note</button></Link>;
}
