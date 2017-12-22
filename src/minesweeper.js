//variable creates 1 row of 3 columns, each seperated by a vertical line
const blankLine = '   |   |   ';
//prints a message and the visual representation of the 3x3 game board
console.log('This is what an empty board would look like:');
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);
//hard coded example of what the board will look like when a player selects a square
const guessLine =  ' 1 |   |   ';
//represents what the board will look like when a player reveals a bomb
const bombLine = '   | B |   ';
//prints message and visual representation
console.log('This is what a board with a guess and a bomb would look like:');
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
