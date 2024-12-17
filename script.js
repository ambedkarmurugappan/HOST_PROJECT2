let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['stone', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update the user's and computer's choices in the DOM
  document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  // Determine the result of the game
  let result;
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
    userScore++;
  } else {
    result = 'You lose!';
    computerScore++;
  }

  // Update the result and scores in the DOM
  document.getElementById('game-result').textContent = `Result: ${result}`;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;

  // Check if there is a winner
  checkWinner();
}

function checkWinner() {
  if (userScore === 10 || computerScore === 10) {
    const winnerMessage =
      userScore === 10
        ? "Congratulations! You won the game! 🎉"
        : "Game Over! The computer won. 😢";

    // Display the winner message and show the popup
    document.getElementById('winner-message').textContent = winnerMessage;
    document.getElementById('winner-popup').classList.remove('hidden');
  }
}

function resetGame() {
  // Reset scores and update the DOM
  userScore = 0;
  computerScore = 0;

  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('user-choice').textContent = 'You chose:';
  document.getElementById('computer-choice').textContent = 'Computer chose:';
  document.getElementById('game-result').textContent = 'Result:';

  // Hide the winner popup
  document.getElementById('winner-popup').classList.add('hidden');
}
