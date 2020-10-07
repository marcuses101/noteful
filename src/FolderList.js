import React from "react";
import Folder from "./Folder";
import AddFolder from "./AddFolder";

export default function FolderList({ folders, match }) {
  console.log(match);
  const foldersList = folders?.map((folder) => (
    <Folder {...folder} key={folder.id} active={folder.id === match} />
  ));

  return (
    <>
      <div className="FolderList">{foldersList}</div>
      <AddFolder/>
    </>
  );
}
