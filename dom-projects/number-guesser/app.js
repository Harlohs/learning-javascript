/*
GAME FUNCTION
- player must guess a number betweena min and max
- player gets certain amount of guesses
- notify player of guesses remaining
- notify the player of the correct answer if lost
- let player choose to play again
*/

// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');
      
// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// btn event listener
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);
  // validate input
  if(isNaN(guess) === NaN || guess < min || guess > max){
    setMessage(`please enter a number between ${min} and ${max}`, 'red');
  }

  // check if won
  if(guess === winningNum){
    // game over - won

    gameOver(true, `${winningNum} is correct, YOU WIN!`)

  } else { 
    // wrong number 
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // game over - loss
      
      gameOver(false, `sorry you lost, the correct number was ${winningNum}`)


    } else {
      // game continues - answer wrong

      // change border color
      guessInput.style.borderColor = 'red';

      // clear input
      guessInput.value = '';

      // tell user wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
      
    }
}});

// game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // change text color
  message.style.color = color;
  // set message
  setMessage(msg);

  // play again
  guessBtn.value = 'Play Again?';
  guessBtn.className += 'play-again';
  
}
// get random winning number
function getRandomNum(min, max){
 return Math.floor(Math.random()*(max-min+1)+min);
}


//set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}