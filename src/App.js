import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import DataContext from "./Context";

const baseURL = "https://fast-falls-13967.herokuapp.com";

function App() {
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);

  async function getData(url, setStateFunction, forEach) {
    const response = await fetch(url);
    const data = await response.json();
    if (forEach) data.forEach(forEach)
    setStateFunction(data);
  }

  function deleteNote(id) {
    setNotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
  }

  function addNote(noteObj){
    setNotes(currentNotes=>[...currentNotes, noteObj])
  }

  function addFolder(folderObj) {
    setFolders(currentFolders=>[...currentFolders, folderObj])
  }

  const contextValue = { folders, notes, deleteNote, addFolder, addNote};

  useEffect(() => {
    getData(baseURL + "/api/folder", setFolders);
    // convert note modified property into Date obj
    getData(baseURL + "/api/note", setNotes, (note)=>note.modified = new Date(note.modified));
  }, []);

  return (
    <DataContext.Provider value={contextValue}>
      <div className="App">
        <Header />
        <div className="content">
          <Sidebar folders={folders} />
          <Main />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
