import React from "react";
import DeleteNote from "./DeleteNote";
import PropTypes from "prop-types"
import "./Note.css";
import { Link} from "react-router-dom";

export default function Note({ name, id, modified }) {

  return (
    <article className="Note">
      <h2>{<Link to={`/note/${id}`}>{name}</Link>}</h2>
      <div className="container">
        <p>Date modified: {new Date(modified).toLocaleDateString()}</p>
        <DeleteNote id={id}/>
      </div>
    </article>
  );
}

Note.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  modified: PropTypes.instanceOf(Date)
}
