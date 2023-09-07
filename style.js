console.log(" Welcome To TicTacToe")
let audio = new Audio ("music.mp3");
let gameover = new Audio ("gameover.mp3")
let turn = "X"

 const ChangeTurn = ()=>{
     return turn === 'X'?"0": "X"
}

const checkWin = () =>{

}
 //game logic
 let boxes = document.getElementsByClassName("box")
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click', ()=> {
if (boxtext.innertext === ''){
    boxtext.innertext ="turn"
    ChangeTurn()
    checkWin()
    document.getElementsByClassName("info")[0].innertext = "turn for" + turn
}
   })
 })