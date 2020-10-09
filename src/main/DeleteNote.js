import React, { useContext } from "react";
import DataContext from "../Context";
const url = "http://localhost:9090/notes/";

export default function DeleteNote({ id }) {
  const { deleteNote } = useContext(DataContext);
  async function handleOnClick() {
    const response = await fetch(url + id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    if (response.ok) {
      deleteNote(id);
    }

  }
  return (
    <button className="DeleteNote" onClick={handleOnClick}>
      Delete Note
    </button>
  );
}
