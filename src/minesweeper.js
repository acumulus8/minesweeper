class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Oh no! You hit a bomb! Game Over...');
      this._board.print();
    } else if (this._board.hasSafeTiles() === false) {
      console.log('Congratulations! You won!');
    } else {
      console.log('Current board: ');
      this._board.print();
    }
  }
}

const g = new Game(3, 3, 3);
g.playMove(0, 2);
