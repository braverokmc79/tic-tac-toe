import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if(gameTurns.length>0 && gameTurns[0].player==='X'){
      currentPlayer = 'O';
    }
    return currentPlayer;
}

function App() {
    const [gameTurns, setGameTurns] = useState([])  ;
    //const [activePlayer, setActivePlayer] = useState('X');

    let activePlayer=deriveActivePlayer(gameTurns);
 
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
      console.log(gameTurns)  ;
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
                  <Player  initalName="Player 1" symbol="X"  isActive={activePlayer==='X'}  />

                  <Player  initalName="Player 2" symbol="O"  isActive={activePlayer==='O'} />
              </ol>
    

              <GameBoard  onSelectSquare={handleSelectSquare} 
                     activePlayerSymbol={activePlayer} 
                     turns={gameTurns}     
                />
             
            </div>    


            <Log  turns={gameTurns} />
        </main>
      </>
    )

}

export default App
