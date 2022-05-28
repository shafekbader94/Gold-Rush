class Matrix {
  constructor(numRows, numColumns) {
    this.matrix = this.generateMatrix(numRows, numColumns);
  }

  generateMatrix(numRows, numColumns) {
    let matrix = [];
    let num = 1;

    for (let r = 0; r < numRows; r++) {
      matrix.push([]);
      for (let c = 0; c < numColumns; c++) {
        matrix[r].push("");
      }
    }
    return matrix;
  }

  get(rowNum, colNum) {
    return this.matrix[rowNum][colNum];
  }

  print() {
    for (let i = 0; i < this.matrix.length; i++) {
      let line = "";
      for (let j = 0; j < this.matrix[i].length; j++) {
        line = line + (this.matrix[i][j] + "\t");
      }
      console.log(line);
    }
  }

  printColumn(colNum) {
    let col = [];
    for (let i = 0; i < this.matrix.length; i++) {
      col.push(this.matrix[i][colNum]);
    }
    return col;
  }

  printRow(rowNum) {
    let row = [];
    for (let i = 0; i < this.matrix[rowNum].length; i++) {
      row.push(this.matrix[rowNum][i]);
    }
    return row;
  }

  alter(rowNum, colNum, changeTo) {
    return (this.matrix[rowNum][colNum] = changeTo);
  }

  findCoordinate(value) {
    let valueOjectXandY = {};
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (this.matrix[i][j] === value) {
          valueOjectXandY["x"] = j;
          valueOjectXandY["y"] = i;
          return valueOjectXandY;
        }
      }
    }
    return valueOjectXandY;
  }
}
