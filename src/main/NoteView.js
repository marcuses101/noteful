import React, {useEffect} from "react"
import Note from "./Note"
import {Redirect} from "react-router-dom"
import PropTypes from "prop-types"

 export default function NoteView(props){

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

   return (
     <div className="NoteView">
        {props.content? null: <Redirect to="/"/>}
        <Note {...props}/>
          <p style={{margin: 10}}>{props.content}</p>
     </div>
   )
 }

 NoteView.propTypes = {
   content: PropTypes.string
 }