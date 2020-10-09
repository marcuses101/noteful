import React from "react";
import FolderList from "./FolderList";
import NoteSidebar from "./NoteSidebar";
import { Route } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="Sidebar">
      <Route exact path="/" component={FolderList} />
      <Route exact path="/folder/:folderId" component={FolderList} />
      <Route exact path="/note/:noteId" component={NoteSidebar} />
    </aside>
  );
}
