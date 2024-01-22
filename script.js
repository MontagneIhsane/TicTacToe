const prompt = require("prompt-sync")();

class Morpion {
constructor() {
    this.player1 = "X";
    this.player2 = "O";
    this.cells = ["", "", "", "", "", "", "", "", ""];
}

showBoard() {
    console.log(
    " " +
        this.cells[0] +
        " | " +
        this.cells[1] +
        " | " +
        this.cells[2] +
        " "
    );
    console.log("---|---|---");
    console.log(
    " " +
        this.cells[3] +
        " | " +
        this.cells[4] +
        " | " +
        this.cells[5] +
        " "
    );
    console.log("---|---|---");
    console.log(
    " " +
        this.cells[6] +
        " | " +
        this.cells[7] +
        " | " +
        this.cells[8] +
        " "
    );
}

play(player) {
    console.log("Joueur " + player + " joue.");
    this.showBoard();

    const choice = prompt("Choisis une case (entre 1 et 9)");
    const btwZeroAndNine = Number(choice) > 0 && Number(choice) < 10;
    const cellIsEmpty = this.cells[Number(choice) - 1] === "";

    if (btwZeroAndNine && cellIsEmpty) {
    this.cells[Number(choice) - 1] = player;
    } else {
    console.log("Nan, rejoue.");
    this.play(player);
    }

    this.showBoard();
}

checkVictory() {
    const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

    for (const condition of winConditions) {
    const [a, b, c] = condition;
    f (
        this.cells[a] !== "" &&
        this.cells[a] === this.cells[b] &&
        this.cells[b] === this.cells[c]
    );
    {
        console.log("Joueur " + this.cells[a] + " remporte la partie !");
        return true;
    }
    }

    return false;
}

gameLoop() {
    this.play(this.player1);
    if (this.checkVictory()) {
    return;
    }
    this.play(this.player2);
    this.checkVictory();
}
}

const m = new Morpion();
m.gameLoop();
