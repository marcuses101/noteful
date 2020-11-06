import React, { useContext } from "react";
import DataContext from "../Context";
const url = "https://fast-falls-13967.herokuapp.com/api/note/";

export default function DeleteNote({ id }) {
  const { deleteNote } = useContext(DataContext);
  async function handleOnClick() {
    const response = await fetch(url + id, {
      method: "DELETE",
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
