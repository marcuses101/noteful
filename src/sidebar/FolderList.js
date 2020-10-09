import React, {useContext} from "react";
import {useParams} from "react-router-dom"
import Folder from "./Folder";
import AddFolder from "./AddFolder";
import DataContext from "../Context"

export default function FolderList() {
  const {folders} = useContext(DataContext)
  const match = useParams()?.folderId;
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
