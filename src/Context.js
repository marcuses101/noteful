import React from "react";

const DataContext = React.createContext({
  folders: [{id:"",name:""}],
  notes: [{ name: "", id: "", folderId: "", content: "" }],
  deleteNote: ()=>{},
  addNote: ()=>{},
  addFolder: ()=>{},
});

export default DataContext;
