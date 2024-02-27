import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from "./winning-combinations.js"
import GameOver from "./components/GameOver.jsx";







function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X';
  if(gameTurns.length>0 && gameTurns[0].player==='X'){
    currentPlayer = 'O';
  }
  return currentPlayer;
}

const initalGameBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function deriveWinner(gameBoard, players){
  let winner;
  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];  
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];  
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];  

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
     // setHasWinner(hasWinner=>!hasWinner);
      //winner=firstSquareSymbol;
      winner=players[firstSquareSymbol];
      //break;
    }
  }
 
  return winner;
}



function App() {
    const [players, setPlayers] = useState({
      X :"Player 1",
      O :"Player 2"
    });

    const [gameTurns, setGameTurns] = useState([])  ;
    const [hasWinner, setHasWinner] = useState(false);
 
    let activePlayer=deriveActivePlayer(gameTurns);
    let gameBoard =[...initalGameBoard.map(arry=>[...arry])];


    for(const trun of gameTurns) {
      const {square, player} =trun;
      const {row , col} =square;
      gameBoard[row][col] = player;
   }

   let winner=deriveWinner(gameBoard, players)




//무승부
const hasDraw =gameTurns.length ===9 && !winner;
function handleSelectSquare(rowIndex, colIndex) {
      //setActivePlayer((curActivePlayer)=>curActivePlayer==='X'? 'O' :'X');
          setGameTurns(prevTurns=>{            
                const  currentPlayer=deriveActivePlayer(gameTurns);
              //   console.log("=====>", rowIndex, colIndex); 
              //   for(const trun of gameTurns) {
              //     const {square, player} =trun;
              //     const {row , col} =square;
              //     if(rowIndex===row && colIndex===col){
              //       return prevTurns;
              //     }                  
              //  }                
                const updatedTurns=[{square : {row:rowIndex, col:colIndex}, player:currentPlayer}
                  , ...prevTurns];

                  return updatedTurns;                
            });   
    //  console.log(gameTurns)  ;
}


function handleRestart() {
  console.log("재시작");
  setGameTurns([]);
  gameBoard =[...initalGameBoard];
}


function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers=>{
      return {
        ...prevPlayers,
        [symbol]:newName
      }
    });
}

    return (
      <>
        <div className="log" >        
          <img src="game-logo.png"  alt="틱택토" />
        </div>
        <h1 className="text-center">Tic-Tac-Toe</h1>
      
        <main>

            <div id="game-container">
              <ol id="players" className="highlight-player">
                  <Player  initalName="Player 1" symbol="X"  isActive={activePlayer==='X'}  onChangName={handlePlayerNameChange} />

                  <Player  initalName="Player 2" symbol="O"  isActive={activePlayer==='O'}  onChangName={handlePlayerNameChange} />
              </ol>
    

              { (winner||hasDraw )&& <GameOver winner={winner}   onRestart={handleRestart}     />}

              <GameBoard  onSelectSquare={handleSelectSquare} 
                     activePlayerSymbol={activePlayer} 
                     turns={gameTurns}   
                     gameBoard={gameBoard}                  
                />             
            </div>    

            <Log  turns={gameTurns} />
        </main>
      </>
    )

}

export default App
