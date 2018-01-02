const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [ ];
  for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
    let row = [ ];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push('   ');
    }
    board.push(row);
  }
  return board;
};

//generate the bomb board and random placement of bombs
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [ ];
  for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
    let row = [ ];
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs ) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced += 1;
    //this loop can potentially place bombs on top of bombs - control flow will fix that later
  }
  return board;
};
//function iterates through to join the elements, and then join the rows
let printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
}
//take in arguments for board params
let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
//actually print a message and printBoard function
console.log('Player board: ');
printBoard(playerBoard);
console.log('Bomb board: ')
printBoard(bombBoard);
