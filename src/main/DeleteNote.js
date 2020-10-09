import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
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
    const data = await response.json;
    console.log(data);
  }
  return (
    <button className="DeleteNote" onClick={handleOnClick}>
      Delete Note
    </button>
  );
}
