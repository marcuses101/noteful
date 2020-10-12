import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Folder from "./Folder";
import AddFolderButton from "./AddFolderButton";
import DataContext from "../Context";
import AddFolderForm from "./AddFolderForm";

export default function FolderList() {
  const [showForm, setShowForm] = useState(false);
  const { folders } = useContext(DataContext);
  const match = useParams()?.folderId;
  const foldersList = folders?.map((folder) => (
    <Folder {...folder} key={folder.id} active={folder.id === match} />
  ));

  return (
    <>
      <div className="FolderList">{foldersList}</div>
      {showForm ? (
        <AddFolderForm onCancel={() => setShowForm(false)} />
      ) : (
        <AddFolderButton onClick={() => setShowForm(true)} />
      )}
    </>
  );
}
