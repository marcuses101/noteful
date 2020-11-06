import React, { useContext, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import DataContext from "../Context";
import "./AddNoteForm.css";
const url = "https://fast-falls-13967.herokuapp.com/api/note";

export default function AddNoteForm() {
  const { folders, addNote } = useContext(DataContext);
  const [name, setName] = useState({});
  const [folderId, setFolderId] = useState({});
  const [content, setContent] = useState({});
  const { goBack, push } = useHistory();
  const titleInput = useRef(null)

  const folderOptions = folders.map((folder) => (
    <option key={folder.id} value={folder.id}>
      {folder.name}
    </option>
  ));

  // set folderId state on mount to default
  useEffect(() => {
    setFolderId({ value: folders[0]?.id });
  }, [folders]);

  useEffect(()=>{
    window.scrollTo(0,0)
    titleInput.current.focus();
  },[])

  function handleChange(event) {
    const setFunctions = {
      noteName: setName,
      folderSelect: setFolderId,
      noteContent: setContent,
    };
    const name = event.target.name;
    const value = event.target.value;
    setFunctions[name]((current) => ({ ...current, value: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
          folder_id: folderId.value,
          content: content.value,
          modified: new Date(),
        }),
      });
      if (!response.ok) throw new Error("Post failed" + response.status);
      const data = await response.json();
      addNote(data);
      push('/')
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="AddNoteForm">
      <h2>Add a note!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="noteName">Title: </label>
        <input
          type="text"
          name="noteName"
          id="noteName"
          onChange={handleChange}
          required
          aria-required="true"
          ref={titleInput}
        />
        <br />
        <label htmlFor="folderSelect">Folder: </label>
        <select name="folderSelect" id="folderSelect" onBlur={handleChange}>
          {folderOptions}
        </select>
        <br />
        <label htmlFor="noteContent">Content:</label> <br />
        <textarea
          name="noteContent"
          id="noteContent"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <br />
        <input type="submit" value="Create note" />
        <input type="button" value="cancel" onClick={goBack} />
      </form>
    </div>
  );
}
