import React, { useContext, useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import DataContext from "../Context";
import { v4 as uuidv4 } from "uuid";
import "./AddNoteForm.css";
const url = "http://localhost:9090/notes/";

export default function AddNoteForm() {
  const { folders, addNote } = useContext(DataContext);
  const [name, setName] = useState({});
  const [folderId, setFolderId] = useState({});
  const [content, setContent] = useState({});
  const [redirect, setRedirect] = useState(null);
  const { goBack } = useHistory();

  const folderOptions = folders.map((folder, i) => (
    <option key={folder.id} value={folder.id}>
      {folder.name}
    </option>
  ));

  useEffect(() => {
    setFolderId({ value: folders[0]?.id });
  }, [folders]);

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
          id: uuidv4(),
          folderId: folderId.value,
          content: content.value,
          modified: new Date(),
        }),
      });
      if (!response.ok) throw new Error("Post failed" + response.status);
      const data = await response.json();
      console.log(data);
      addNote(data);
      setRedirect(data.id);
    } catch (e) {
      console.log(e);
    }
  }
  console.log(redirect);
  if (redirect) return <Redirect to={`/note/${redirect}`} />;
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
        />
        <br />
        <label htmlFor="folderSelect">Folder: </label>
        <select name="folderSelect" id="folderSelect" onChange={handleChange}>
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
