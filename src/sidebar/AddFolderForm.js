import React, {useRef, useContext} from "react";
import DataContext from "../Context"
import { v4 as uuidv4 } from "uuid";
import "./AddFolderForm.css";
const url = "http://localhost:9090/folders/";

export default function AddFolderForm({onCancel}) {
  const folderNameInput = useRef(null)
  const {addFolder} = useContext(DataContext)

  async function createNewFolder(event) {
    event.preventDefault()
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: folderNameInput.current.value,
        id: uuidv4(),
      }),
    });
    if (!response.ok) {throw new Error("Post request failed")}
    const data = await response.json();
    console.log(data);
    addFolder(data)
    onCancel();
  }

  return (
    <form className="AddFolderForm" onSubmit={createNewFolder}>
      <label htmlFor="folderName">Folder name:</label>
      <input type="text" id="folderName" name="folderName" ref={folderNameInput}/>
      <input type="submit" value="create" />
      <input type="button" value="cancel" onClick={onCancel}/>
    </form>
  );
}
