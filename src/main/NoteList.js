import React from "react"
import Note from "./Note"
import PropTypes from "prop-types"

 export default function NoteList({notes}){
   const notesList = notes?.map(note=><Note {...note} key={note.id}/>)
   return (
     <div className="NoteList">
        {notesList.length > 0?notesList:<h2>No Notes</h2>}
     </div>
   )
 }

 NoteList.propTypes = {
   notes: PropTypes.arrayOf(PropTypes.shape({
     name: PropTypes.string,
     id: PropTypes.number,
     folderId: PropTypes.string
   }))
 }