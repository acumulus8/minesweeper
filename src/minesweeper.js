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

console.log(generatePlayerBoard(3, 3));
