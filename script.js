const currentPlayer = document.querySelector(".currentPlayer");
const emojiQualquer = "";

console.log("Emoji qualquer: " + emojiQualquer); // Saída: 😊

let selected;
let player = src = "🐧 ";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selected = [];

  currentPlayer.innerHTML = `PLAYER OF THE TURN: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, [100]);

  player = player === "🐧 " ? "🦜" : "🐧 ";
  currentPlayer.innerHTML = `PLAYER OF THE TURN: ${player}`;
}

function check() {
  let playerLastMove = player === "🐧 " ? "🦜" : "🐧 ";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      alert("PLAYER '" + playerLastMove + "' WIN!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("IT WAS A TIE!");
    init();
    return;
  }
}