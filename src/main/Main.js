import React, {useContext} from "react";
import AddNoteButton from "./AddNoteButton";
import NoteList from "./NoteList";
import { Route } from "react-router-dom";
import "./Main.css";
import NoteView from "./NoteView"
import DataContext from "../Context"

export default function Main() {
  const {notes} = useContext(DataContext);


  function handleFolderView(props) {
    const folderNotes = notes?.filter(
      (n) => n.folderId === props.match.params.folderId
    );
    return (
      <>
        <NoteList notes={folderNotes} />
        <AddNoteButton />
      </>
    );
  }

  function handleMainView() {
    return (
      <>
        <NoteList notes={notes} />
        <AddNoteButton />
      </>
    );
  }

  function handleContentView(props){
    const note = notes.find(n=>n.id === props.match.params.noteId);
    return <NoteView {...note}/>
  }

  return (
    <main className="Main">
      <Route exact path="/" render={handleMainView} />
      <Route exact path="/folder/:folderId" render={handleFolderView} />
      <Route exact path="/note/:noteId" render={handleContentView} />
    </main>
  );
}
