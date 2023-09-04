let randomNumber = () => Math.floor(Math.random() * (3 - 1 + 1) + 1);

function getComputerChoice() {
    let number = randomNumber();
    if (number === 1) {
        return "Rock";
    } else {
        if (number === 2) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return "Rock, Paper, or Scissors... you must decide.";
    } 

    let playerLowerCase = playerSelection.toLowerCase();
    let playerChoice = playerLowerCase.charAt(0).toUpperCase() + playerLowerCase.slice(1);

    if (computerSelection === "Paper" && playerChoice === "Rock") {
        return "You Lose! The Internet chose paper, which beats rock";
    } else if (computerSelection === "Scissors" && playerChoice === "Rock") {
        return "You Win! Rock beats the Internet's choice--scissors";      
    } else if (computerSelection === "Rock" && playerChoice === "Rock") {
        return "Tie! You and the Internet both selected rock";
    } else if (computerSelection === "Paper" && playerChoice === "Paper") {
        return "Tie! You and the Internet both selected paper";
    } else if (computerSelection === "Scissors" && playerChoice === "Paper") {
        return "You Lose! The Internet chose scissors, which beats paper";      
    } else if (computerSelection === "Rock" && playerChoice === "Paper") {
        return "You Win! Paper beats the Internet's choice--rock";
    } else if (computerSelection === "Paper" && playerChoice === "Scissors") {
        return "You Win! Scissors beats the Internet's choice--paper";
    } else if (computerSelection === "Scissors" && playerChoice === "Scissors") {
        return "Tie! You and the Internet both selected scissors";      
    } else if (computerSelection === "Rock" && playerChoice === "Scissors") {
        return "You Lose! The Internet chose rock, which beats scissors";
    } else {
        return "hmmmmmmm...";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const score = document.getElementById('score');
    const roundResult = document.getElementById('result');
    const page = document.getElementById('page');
    
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function scoreCounter() {
        let roundString = roundResult.textContent;
        let firstFive = roundString.substring(0, 5);
        if (firstFive === "You L") {
            computerScore++;
        } if (firstFive === "You W") {
            humanScore++;
        }
        let currentScore = document.getElementById('score');
        currentScore.textContent = `Human: ${humanScore} | Internet: ${computerScore}`;
    }

    function roundCounter() {
        rounds++
    }

    function clearPage() {
        const blankPage = page

        if (rounds >= 5) {
            blankPage.removeChild(rock);
            blankPage.removeChild(paper);
            blankPage.removeChild(scissors);
            blankPage.removeChild(roundResult);
            blankPage.removeChild(score);
        }
    }

    function gameWinner() {
        const winningMessage = document.createElement('h1');

        if (rounds >= 5 && (computerScore > humanScore)) {
            winningMessage.textContent = `You Lose! Refresh your browser to play again. Final Score: Human: ${humanScore} | Internet: ${computerScore}`;
        } else if (rounds >= 5 && (computerScore < humanScore)) {
            winningMessage.textContent = `You Win! Refresh your browser to play again. Final Score: Human: ${humanScore} | Internet: ${computerScore}`;
        } else if (rounds >= 5) {
            winningMessage.textContent = `Tie! Refresh your browser to play again. Final Score: Human: ${humanScore} | Internet: ${computerScore}`;
        }

        document.body.appendChild(winningMessage)
    }

    rock.addEventListener('click', function() {
        const userInput = "rock";
        const computerInput = getComputerChoice(); 
        const result = playRound(userInput, computerInput);
        const resultDisplay = document.getElementById('result');
        resultDisplay.textContent = result;
    });
    rock.addEventListener('click', scoreCounter);
    rock.addEventListener('click', roundCounter);
    rock.addEventListener('click', clearPage);
    rock.addEventListener('click', gameWinner);

    paper.addEventListener('click', function() {
        const userInput = "paper";
        const computerInput = getComputerChoice(); 
        const result = playRound(userInput, computerInput);
        const resultDisplay = document.getElementById('result');
        resultDisplay.textContent = result;
    });
    paper.addEventListener('click', scoreCounter);
    paper.addEventListener('click', roundCounter);
    paper.addEventListener('click', clearPage);
    paper.addEventListener('click', gameWinner);


    scissors.addEventListener('click', function() {
        const userInput = "scissors";
        const computerInput = getComputerChoice(); 
        const result = playRound(userInput, computerInput);
        const resultDisplay = document.getElementById('result');
        resultDisplay.textContent = result;
    });
    scissors.addEventListener('click', scoreCounter);
    scissors.addEventListener('click', roundCounter);
    scissors.addEventListener('click', clearPage);
    scissors.addEventListener('click', gameWinner);

});

