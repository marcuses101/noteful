import React, { useContext } from "react";
import AddNoteButton from "./AddNoteButton";
import NoteList from "./NoteList";
import { Route, Switch } from "react-router-dom";
import "./Main.css";
import NoteView from "./NoteView";
import AddNoteForm from "./AddNoteForm";
import DataContext from "../Context";
import Error from "../Error";

export default function Main() {
  const { notes } = useContext(DataContext);

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

  function handleContentView(props) {
    const note = notes.find((n) => n.id === props.match.params.noteId);
    return <NoteView {...note} />;
  }

  return (
    <main className="Main">
      <Error>
      <Switch>
        <Route exact path="/folder/:folderId" render={handleFolderView} />
        <Route exact path="/note/:noteId" render={handleContentView} />
        <Route exact path="/add-note" component={AddNoteForm} />
        <Route path="/" render={handleMainView} />
      </Switch>
      </Error>
    </main>
  );
}
