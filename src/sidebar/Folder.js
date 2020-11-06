import React from "react";
import { Link } from "react-router-dom";
import "./Folder.css";
import PropTypes from "prop-types"

export default function Folder({ name, id, active }) {
  return (
    <div className={`Folder ${active ? "active" : ""}`}>
      <Link to={`/folder/${id}`}>{name}</Link>
    </div>
  );
}

Folder.propTypes ={
  name: PropTypes.string,
  id: PropTypes.number,
  active: PropTypes.bool
}