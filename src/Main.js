import React from "react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import { Route } from "react-router-dom";
import "./Main.css";
import NoteView from "./NoteView"

export default function Main({ notes }) {
  function handleFolderView(props) {
    const folderNotes = notes.filter(
      (n) => n.folderId === props.match.params.folderId
    );
    return (
      <>
        <NoteList notes={folderNotes} />
        <AddNote />
      </>
    );
  }

  function handleMainView() {
    return (
      <>
        <NoteList notes={notes} />
        <AddNote />
      </>
    );
  }

  function handleContentView(props){
    const note = notes.find(n=>n.id === props.match.params.noteId);
    return <NoteView {...note}/>
  }

  return (
    <main className="Main">
      {/* <NoteList notes={notes}/> */}
      <Route exact path="/" render={handleMainView} />
      <Route exact path="/folder/:folderId" render={handleFolderView} />
      <Route exact path="/note/:noteId" render={handleContentView} />
    </main>
  );
}
