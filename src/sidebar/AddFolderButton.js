import React from "react"
import "./AddFolderButton.css"

 export default function AddFolder({onClick}){
   return (
     <button className="AddFolderButton" onClick={onClick}>
      Add folder
     </button>
   )
 }