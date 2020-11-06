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
      (n) => n.folder_id === parseInt(props.match.params.folder_id)
    );
    return (
      <>
        <AddNoteButton />
        <NoteList notes={folderNotes} />
      </>
    );
  }

  function handleMainView() {
    return (
      <>
        <AddNoteButton />
        <NoteList notes={notes} />
      </>
    );
  }

  function handleContentView(props) {
    const note = notes.find((n) => n.id === parseInt(props.match.params.note_id));
    return (
      <>
        <NoteView {...note} />
      </>
    );
  }

  return (
    <main className="Main">
      <Error>
        <Switch>
          <Route exact path="/folder/:folder_id" render={handleFolderView} />
          <Route exact path="/note/:note_id" render={handleContentView} />
          <Route exact path="/add-note" component={AddNoteForm} />
          <Route path="/" render={handleMainView} />
        </Switch>
      </Error>
    </main>
  );
}
