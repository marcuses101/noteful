import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import DataContext from "./Context";
import {useHistory} from "react-router-dom"

const baseURL = "http://localhost:9090";

function App() {
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);

  async function getData(url, setStateFunction) {
    const response = await fetch(url);
    const data = await response.json();
    setStateFunction(data);
  }

  function deleteNote(id) {
    setNotes((notes) => {
      return notes.filter((note) => note.id !== id);
    });
  }

  const contextValue = { folders, notes, deleteNote };

  useEffect(() => {
    console.log("fetching data");
    getData(baseURL + "/folders", setFolders);
    getData(baseURL + "/notes", setNotes);
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
