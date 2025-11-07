let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector(".new-game");
let msg = document.querySelector("#msg");

let turno = false;

let winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
box.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (turno) {
      box.textContent = "X";
      turno = false;
    } else {
      box.innerText = "0";
      turno = true;
    }
    box.disabled = true;
    checkWin();
  });
});

const checkWin = () => {
  for(const pattern of winArray){
    let postion = pattern.map(index => box[index].innerText);
    console.log(postion);
    if(postion.every(item => item != "")){
      if(postion.every(item => item == postion[0])){
        showwinner(postion[0]);
      }
    }
  }
}

showwinner = (winner) => {
  msg.innerText = "Congratulations! " + winner + " is the winner";
  newGame.classList.remove("hide");
  disabledBox();
};
const disabledBox = () => {
  box.forEach((box) => {
    box.disabled = true;
  });
};
const resetGame = () => {
  turno = false;
  box.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  newGame.classList.add("hide");
};
reset.addEventListener("click", resetGame);
