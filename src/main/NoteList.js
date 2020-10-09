import React from "react"
import Note from "./Note"

 export default function NoteList({notes}){
   const notesList = notes?.map(note=><Note {...note} key={note.id}/>)
   return (
     <div className="NoteList">
        {notesList}
     </div>
   )
 }