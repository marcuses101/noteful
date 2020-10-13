import React from "react";
import DeleteNote from "./DeleteNote";
import PropTypes from "prop-types"
import "./Note.css";
import { Link, useRouteMatch } from "react-router-dom";

export default function Note({ name, id, modified }) {
  const notePath = useRouteMatch("/note/");

  return (
    <div className="Note">
      <h2>{notePath?name:<Link to={`/note/${id}`}>{name}</Link>}</h2>
      <div className="container">
        <p>Date modified: {new Date(modified).toLocaleDateString()}</p>
        <DeleteNote id={id}/>
      </div>
    </div>
  );
}

Note.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  modified: PropTypes.instanceOf(Date)
}
