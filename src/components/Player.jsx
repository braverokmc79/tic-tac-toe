import React from 'react'

const Player = ({name, symbol}) => {
  return (
    <li>
        <span className="player-info">
        <sapn className="player-name">{name}</sapn>
        <sapn className="player-name">{symbol}</sapn>
        </span>
        <button>수정</button>
   </li>
  )
}

export default Player