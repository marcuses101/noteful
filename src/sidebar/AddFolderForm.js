import React, { useRef, useContext, useEffect } from "react";
import DataContext from "../Context";
import PropTypes from "prop-types"
import "./AddFolderForm.css";
const url = "https://fast-falls-13967.herokuapp.com/api/folder";

export default function AddFolderForm({ onCancel }) {
  const folderNameInput = useRef(null);
  const { addFolder } = useContext(DataContext);

  useEffect(()=>{
    folderNameInput.current.focus();
  },[])

  async function createNewFolder(event) {
    event.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: folderNameInput.current.value,
        }),
      });
      if (!response.ok) {
        throw new Error("Post request failed");
      }
      const data = await response.json();
      console.log(data);
      addFolder(data);
      onCancel();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="AddFolderForm" onSubmit={createNewFolder}>
      <label htmlFor="folderName">Folder name:</label>
      <input
        type="text"
        id="folderName"
        name="folderName"
        ref={folderNameInput}
        required
        aria-required="true"
      />
      <input type="submit" value="create" />
      <input type="button" value="cancel" onClick={onCancel} />
    </form>
  );
}

AddFolderForm.propTypes = {
  onCancel: PropTypes.func
}