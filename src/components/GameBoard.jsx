
import { useCallback, useState } from 'react';
const initalGameBoard =[
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

const GameBoard = ({onSelectSquare, activePlayerSymbol, turns}) => {

    // const updatedTurns=[{square : {row:rowIndex, col:colIndex}, player:currentPlayer}
    //     , ...prevTurns];


  let gameBoard =initalGameBoard;

  for(const trun of turns) {
     const {square, player} =trun;
     const {row , col} =square;
     gameBoard[row][col] = player;
  }



//const [gameBoard, setGameBoard] = useState(initalGameBoard)
//   const handleSelectSquare=(rowIndex, colIndex) => {
//     setGameBoard((prevGameBoard) => {
//         const updatedBoard=[...prevGameBoard.map(innserArry=>[...innserArry])];         
//         if(updatedBoard[rowIndex][colIndex]===null){
//             updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
//             onSelectSquare();
//         }        
//         return updatedBoard;   

//     });
//   };
  
  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex)=>{
            return <li key={rowIndex}>
                <ol>
                    {row.map((playSymbol, colIndex)=>{
                        return <li key={colIndex}  >
                            <button onClick={()=>onSelectSquare(rowIndex, colIndex)}   disabled={playSymbol!==null}>{playSymbol}</button>
                        </li>
                    })}
                </ol>
            </li>
        })}
    </ol>
  )
}

export default GameBoard