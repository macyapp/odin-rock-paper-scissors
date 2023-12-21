function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const lowerLimit=0;
    const upperLimit=2;
    const randomNumber=lowerLimit+Math.floor(Math.random()*(upperLimit-lowerLimit+1));
    return choices[randomNumber];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    while (rounds > 0) {
        const playerSelection = prompt("What's your move? Rock, Paper, or Scissors?").toLowerCase();

        // Check for invalid input
        if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
            console.log('Invalid input. Please choose Rock, Paper, or Scissors.');
            continue; // Restart the loop to prompt again for a valid input
        }

        const computerSelection = getComputerChoice();

        console.log(`Computer: ${computerSelection}, Player: ${playerSelection}`);
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update scores based on the result of the round
        if (result.includes('Win')) {
            playerScore++;
        }
        else if (result.includes('Lose')) {
            computerScore++;
        }

        rounds--;
    }

    // Determine the winner after all rounds are played
    if (playerScore > computerScore) {
        console.log("You win the game!");
    }
    else if (playerScore < computerScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("It's a tie!");
    }
}

// Start the game when the button is clicked
const startButton = document.querySelector("#play");
startButton.addEventListener("click", game);
