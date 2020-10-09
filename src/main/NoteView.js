import React from "react"
import Note from "./Note"

 export default function NoteView(props){
   console.log(props)
   return (
     <div className="NoteView">
        <Note {...props}/>
          <p style={{margin: 10}}>{props.content}</p>
     </div>
   )
 }