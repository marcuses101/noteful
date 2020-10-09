import React, {useContext} from "react"
import "./NoteSidebar.css"
import {useHistory, useParams} from 'react-router-dom'
import DataContext from '../Context'

 export default function NoteSidebar(){
    const {notes} = useContext(DataContext)
    const {goBack} = useHistory();
    const {noteId} = useParams();
    const name = notes.find(n=> n.id === noteId)?.name

   return (
     <div className="NoteSidebar">
        <button onClick={goBack}>Go back</button>
        <h2>{name}</h2>
     </div>
   )
 }