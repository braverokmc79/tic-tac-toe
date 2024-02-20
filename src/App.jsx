import Player from "./components/Player"

function App() {
  

    return (
      <>
        <div className="log" >        
          <img src="game-logo.png"  alt="틱택토" />
        </div>
        <h1 className="text-center">Tic-Tac-Toe</h1>
      
        <main>

            <div id="game-container">
              <ol id="players">
                  <Player  name="Player 1" symbol="X" />

                  <Player  name="Player 2" symbol="O" />
              </ol>
    
              GAME BOARD
            </div>
    
    
        </main>
      </>
    )

}

export default App
