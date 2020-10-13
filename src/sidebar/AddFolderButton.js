import React from "react"
import "./AddFolderButton.css"
import PropTypes from 'prop-types'

 export default function AddFolder({onClick}){
   return (
     <button className="AddFolderButton" onClick={onClick}>
      Add folder
     </button>
   )
 }

AddFolder.propTypes = {
  onClick: PropTypes.func
}