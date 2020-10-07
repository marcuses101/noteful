import React from "react"
import "./NoteSidebar.css"

 export default function NoteSidebar({name, back}){
   return (
     <div className="NoteSidebar">
        <button onClick={back}>Go back</button>
        <h2>{name}</h2>
     </div>
   )
 }