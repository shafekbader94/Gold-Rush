class GoldRush extends Matrix {
  constructor(numRows, numColumns) {
    super(numRows, numColumns);
    this.alter(0, 0, 1);
    this.alter(numRows - 1, numColumns - 1, 2);
    this.coins = 0;
    this.player1 = { x: 0, y: 0, score: 0, myTurn: true, number: 1, name: "" };
    this.player2 = {
      x: numColumns - 1,
      y: numRows - 1,
      score: 0,
      myTurn: true,
      number: 2,
      name: "",
    };
    this.percent = {
      c: 40,
      n: 25,
    };
    this.winner = "";
    this.matrix = this.creatMatrix(numRows, numColumns);
  }

  checkwinner() {
    this.coins -= 10;
    if (this.coins === 0) {
      if (this.player1.score > this.player2.score) {
        if (this.player1.name === "") this.winner = "player1 is the winner";
        else this.winner = this.player1.name + " is the winner";
      } else if (this.player1.score == this.player2.score) {
        this.winner = "DRAW";
      } else {
        if (this.player2.name === "") this.winner = "player2 is the winner";
        else this.winner = this.player2.name + " is the winner";
      }

      this.player1.myTurn = false;
      this.player2.myTurn = false;
    }
    return this.winner;
  }

  getPLayer(player) {
    if (player === 1) {
      return this.player1;
    } else {
      return this.player2;
    }
  }
  movePlayer(player, myPosition) {
    if (this.getPLayer(player).myTurn) {
      if (myPosition === "up") {
        if (this.getPLayer(player).x !== 0) {
          this.alter(this.getPLayer(player).x, this.getPLayer(player).y, "");
          this.checkPositionBoth(player);
          if (
            this.matrix[this.getPLayer(player).x - 1][
              this.getPLayer(player).y
            ] === "c"
          ) {
            this.getPLayer(player).score = this.getPLayer(player).score + 10;
            this.checkwinner();
          }
          this.alter(
            this.getPLayer(player).x - 1,
            this.getPLayer(player).y,
            player
          );
          this.getPLayer(player).x -= 1;
        }
      } else if (myPosition === "down") {
        if (this.getPLayer(player).x < this.matrix.length - 1) {
          this.alter(this.getPLayer(player).x, this.getPLayer(player).y, "");
          this.checkPositionBoth(player);
          if (
            this.matrix[this.getPLayer(player).x + 1][
              this.getPLayer(player).y
            ] === "c"
          ) {
            this.getPLayer(player).score = this.getPLayer(player).score + 10;
            this.checkwinner();
          }
          this.alter(
            this.getPLayer(player).x + 1,
            this.getPLayer(player).y,
            player
          );
          this.playerx = this.getPLayer(player).x + 1;
          this.getPLayer(player).x += 1;
        }
      } else if (myPosition === "left") {
        if (this.getPLayer(player).y !== 0) {
          this.alter(this.getPLayer(player).x, this.getPLayer(player).y, "");
          this.checkPositionBoth(player);
          if (
            this.matrix[this.getPLayer(player).x][
              this.getPLayer(player).y - 1
            ] === "c"
          ) {
            this.getPLayer(player).score = this.getPLayer(player).score + 10;
            this.checkwinner();
          }
          this.alter(
            this.getPLayer(player).x,
            this.getPLayer(player).y - 1,
            player
          );
          this.getPLayer(player).y -= 1;
        }
      } else if (myPosition === "right") {
        if (
          this.getPLayer(player).y <
          this.matrix[this.getPLayer(player).x].length - 1
        ) {
          this.alter(this.getPLayer(player).x, this.getPLayer(player).y, "");
          this.checkPositionBoth(player);
          if (
            this.matrix[this.getPLayer(player).x][
              this.getPLayer(player).y + 1
            ] === "c"
          ) {
            this.getPLayer(player).score = this.getPLayer(player).score + 10;
            this.checkwinner();
          }
          this.alter(
            this.getPLayer(player).x,
            this.getPLayer(player).y + 1,
            player
          );
          this.getPLayer(player).y = this.getPLayer(player).y + 1;
        }
      }
    }
  }

  checkPositionBoth(player) {
    if (
      this.matrix[this.player1.x][this.player1.y] ==
      this.matrix[this.player2.x][this.player2.y]
    ) {
      if (this.getPLayer(player).number === 1)
        this.matrix[this.player1.x][this.player1.y] = 2;
      else this.matrix[this.player2.x][this.player2.y] = 1;
    }
  }

  creatMatrix(numRows, numColumns) {
    this.matrix = [];

    for (let r = 0; r < numRows; r++) {
      this.matrix.push([]);
      for (let c = 0; c < numColumns; c++) {
        if ((r != 0 && c != 0) || (r != numRows - 1 && c != numColumns - 1))
          this.matrix[r].push(this.randomValue(r, c));
      }
    }
    this.alter(0, 0, 1);
    this.alter(numRows - 1, numColumns - 1, 2);
    return this.matrix;
  }

  randomValue(i, j) {
    let number = Math.random() * 100;
    let value = "";
    this.matrix[0][0] = 1;

    if (number < this.percent.c) {
      this.coins = this.coins + 10;
      if (
        this.matrix[i][j] !== 1 ||
        (this.matrix[i][j] !== 2 && this.matrix[i][j] !== "c")
      ) {
        value = "c";
      }
    } else if (number < this.percent.c + this.percent.n) {
      if (
        this.matrix[i][j] !== 1 ||
        (this.matrix[i][j] !== 2 && this.matrix[i][j] !== "c")
      ) {
        value = "";
      }
    }

    return value;
  }

  getNames(player1, player2) {
    this.player1.name = player1;
    this.player2.name = player2;
    return;
  }
}
