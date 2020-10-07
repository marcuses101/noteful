import React from "react";
import FolderList from "./FolderList";
import NoteSidebar from "./NoteSidebar"
import { Route } from "react-router-dom";

export default function Sidebar({ folders, notes }) {

  function handleNoteRoute (props){
    const back= props.history.goBack
    const noteId = props.match.params.noteId;
    const note = notes.find(n=>n.id === noteId);
    const folder = folders.find(f=>f.id===note.folderId);
    console.log(folder)
    return <NoteSidebar name={folder.name} back={back}/>
  }

  console.log(folders);
  return (
    <aside className="Sidebar">
      <Route exact path="/" render={() => <FolderList folders={folders} />} />
      <Route
        exact
        path="/folder/:folderId"
        render={(props) => (
          <FolderList folders={folders} match={props.match.params.folderId} />
        )}
      />
      <Route exact path="/note/:noteId" render={handleNoteRoute} />

    </aside>
  );
}
