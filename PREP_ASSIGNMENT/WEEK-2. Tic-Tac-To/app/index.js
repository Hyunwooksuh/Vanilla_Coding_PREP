// ================================
// START YOUR APP HERE
// ================================

/*

  KEN: Do not modify `calculateWinner` function.
  
  Use 'calculateWinner' function to determine if there is a winner.

  Pass in an array of 'X', 'O'.

  EX 1)

  const squares = [
    null, null, null,
    null, 'X', null,
    null, null, 'O',
  ];

  const result = calculateWinner(squares);
  console.log(result); // null

  EX 2)

  const squares = [
    null, 'O', 'O',
    'X', 'X', 'X',
    null, 'O', 'O',
  ];

  const result = calculateWinner(squares);
  console.log(result); // 'X'

 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
const stopFunc = function(e) { 
  e.preventDefault(); 
  e.stopPropagation(); 
  return false; 
};

function getResult(squares) {
  let result = calculateWinner(squares);
  if(signCount === 9 && result === null) {
    alert('Draw!');
    cubes.forEach(cube => {
      if(cube.addEventListener) {
        cube.addEventListener('click', stopFunc, true);
      }
    });
    restartButton.style.display = "block";
  }
  else if (result !== null) {
    alert(`${result} won the game!`);
    cubes.forEach(cube => {
      cubes.forEach(cube => {
        if(cube.addEventListener) {
          cube.addEventListener('click', stopFunc, true);
        }
      });
    });
    restartButton.style.display = "block";
  }
}

function writeSign() {
  if (this.textContent !== "") return;

    signCount++;
    if (presentTurn.textContent === `TURN: ${xTurn.textContent}`) {
      this.textContent = `${xTurn.textContent}`;
      index = parseInt(this.id); 
      squares[index] = xTurn.textContent;
      presentTurn.textContent = `TURN: ${oTurn.textContent}`;
      setTimeout(() => getResult(squares),0);
    } else {
      this.textContent = `${oTurn.textContent}`;
      index = parseInt(this.id);
      squares[index] = oTurn.textContent;
      presentTurn.textContent = `TURN: ${xTurn.textContent}`;
      setTimeout(() => getResult(squares),0);
    }
}

function startGame(event) {
  event.preventDefault();
  startButton.style.display = "none";
  presentTurn.textContent = `TURN: ${xTurn.textContent}`;
  cubes.forEach(cube => {
    cube.addEventListener('click', writeSign);
  });
}

function restartGame(event) {
  event.preventDefault();
  presentTurn.textContent = `TURN: ${xTurn.textContent}`;
  cubes.forEach(cube => {
    cube.textContent = "";
  });
  signCount = 0;
  squares = [];
  cubes.forEach(cube => {
    if(cube.removeEventListener) {
      cube.removeEventListener('click', stopFunc, true);
    }
  });
}

const cubes = document.querySelectorAll(".item");
const startButton = document.querySelector(".start-button");
const restartButton = document.querySelector(".restart-button");
let presentTurn = document.querySelector(".present-turn");
const xTurn = document.querySelector("body > section > div.turn-sign > span.turn.X-turn");
const oTurn = document.querySelector("body > section > div.turn-sign > span.turn.O-turn");
let squares = [];
let index, signCount=0;


startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);