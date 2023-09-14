(function () {
  const container  = document.getElementById("container")
  const  p = document.getElementById("won")
  container.addEventListener("click", (e) => handleClick(e))

  const state = {
    board: [],
    playerX:"X",
    playerO:"O",
    currentPlayer: "X",
    winner: false,
    isDraw: false
  }

  createBoard()

  function createBoard(){
  for(let i = 0; i < 3; i++){
     state.board.push(new Array(3).fill(null))
  }
    boardUi()
  }

  function winner(currentPlayer,i, j){
    if(state.board[i][0] === currentPlayer && state.board[i][1]  === currentPlayer &&  state.board[i][2]  === currentPlayer ){
      console.log("winner")
      return true  
    }

    if(state.board[0][j] === currentPlayer && state.board[1][j]   === currentPlayer &&  state.board[2][j]   === currentPlayer ){
      console.log("winner")
      return true  
    }

    if(state.board[0][0] === currentPlayer && state.board[1][1]   === currentPlayer &&  state.board[2][2]   === currentPlayer ){
      console.log("winner")
      return true  
    }
    

    if(state.board[0][2] === currentPlayer && state.board[1][1] === currentPlayer &&  state.board[2][0]   === currentPlayer ){
      console.log("winner")
      return true  
    }
  }

  
  
function handleIsDraw(){
  if(state.board.every((el) => el[0] !== null &&  el[1] !== null &&  el[2] !== null)){
    return true
}
}
  
  function handleClick (e) {
    if(state.winner){
      return 
    }
    const  {i,j }  = e.target.dataset
    const copyBoard = [...state.board]
    if(copyBoard[i][j] === null){
      copyBoard[i][j] = state.currentPlayer
    }
    
   if(winner(state.currentPlayer, i, j)){
     state.winner = true
     p.innerHTML = `Player ${state.currentPlayer} won the match....🏆 `
   }

   if(handleIsDraw()){
    p.innerHTML = `No Player won  the match...🤣 `
  }
    if(state.currentPlayer === state.playerX){
      state.currentPlayer = state.playerO
    }else{
      state.currentPlayer = state.playerX
    }
    boardUi()
  }


  function boardUi(){
    let placeHolder = ``
    state.board.forEach((row,i) => {
      row.forEach((col, j) => {
        placeHolder +=` <div data-j=${j} data-i=${i} class="cell" ><p>${col === null ? "" : col}</p></div>`
      })
    })
    container.innerHTML = placeHolder
  }

  

})()