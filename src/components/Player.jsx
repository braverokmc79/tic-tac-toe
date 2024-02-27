import React, { useState } from 'react'

const Player = ({initalName, symbol, isActive, onChangName}) => {

   const [playName, setPlayName] = useState(initalName);
   const [isEditing, setIsEditing] = useState(false);


   function handleEditClick(){     
      setIsEditing(editing=>!editing);
    
      //setIsEditing(editing=>!editing);
      
      if(isEditing){
         onChangName(symbol, playName);
      }
   }

   function handleChange(event){
      console.log(event);
      setPlayName(event.target.value);
   }

   let editablePlayerName= <span className="player-name">{playName}</span>
   //let btnCaption ="Edit";

   if(isEditing){
      editablePlayerName = <input  type="text" required    defaultValue={playName}   onChange={handleChange}  />
   }

    return (
        <>
        <li className={isActive ? 'active' :undefined}>
            <span className="player-info">
                    {editablePlayerName}
                 <span className="player-symbol">{symbol}</span>
            </span>            
         <button onClick={handleEditClick}>{isEditing ?  'Save' :'Edit' }</button>
    </li>
   </>
  )
}

export default Player