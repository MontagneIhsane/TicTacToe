const prompt = require("prompt-sync")();

class Morpion {
  constructor() {
    this.player1 = "X";
    this.player2 = "O";
    this.cells = ["", "", "", "", "", "", "", "", ""];
  }

  showBoard() {
    for (let i = 0; i < 9; i += 3) {
      console.log(
        ` ${this.cells[i]} | ${this.cells[i + 1]} | ${
          this.cells[i + 2]
        } `
      );
      if (i < 6) {
        console.log("---|---|---");
      }
    }
  }

  play(player) {
    console.clear();
    console.log("Joueur " + player + " joue.");
    this.showBoard();

    const choice = prompt("Choisis une case (entre 1 et 9)");
    const numberIsValid = Number(choice) > 0 && Number(choice) < 10;
    const cellIsEmpty = this.cells[Number(choice) - 1] === "";

    if (numberIsValid && cellIsEmpty) {
      this.cells[Number(choice) - 1] = player;
    } else {
      console.log("Nan, rejoue.");
      this.play(player);
    }

    this.showBoard();
  }

  checkVictory(symbol) {
    const winningCombinations = [
      // Horizontal Win
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical Win
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal Win
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (
        this.cells[a] === symbol &&
        this.cells[b] === symbol &&
        this.cells[c] === symbol
      ) {
        console.log("Joueur " + symbol + " gagne !");
        return true;
      }
      return false;
    }
  }

  gameLoop() {
    for (let i = 0; i < this.cells.length; i++) {
      this.play(this.player1);
      if (this.checkVictory(this.player1)) {
        return;
      }

      this.play(this.player2);
      if (this.checkVictory(this.player2)) {
        console.log("victoire 2");
        return;
      }
    }
  }
}

// const m = new Morpion();
// m.gameLoop();
// m.checkVictory();

module.exports = Morpion;
