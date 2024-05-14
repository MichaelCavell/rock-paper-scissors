let computerScore = 0;
let userScore = 0;
let rounds = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function singleRound(playerSelection, computerChoice) {
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerChoice === 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                return `Tie! Both players chose Rock`;
            case 'Paper':
                return `You lose round ${rounds}! Paper beats Rock`;
            case 'Scissors':
                return `You win round ${rounds}! Rock beats Scissors`;
        }
    } else if (playerChoice === 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                return `You win round ${rounds}! Paper beats Rock`;
            case 'Paper':
                return `Tie! Both players chose Paper`;
            case 'Scissors':
                return `You lose round ${rounds}! Scissors beats Paper`;
        }
    } else {
        switch (computerChoice) {
            case 'Rock':
                return `You lose round ${rounds}! Rock beats Scissors`;
            case 'Paper':
                return `You win round ${rounds}! Scissors beats Paper`;
            case 'Scissors':
                return `Tie! Both players chose Scissors`; 
        }
    }
}

function winnerCheck(string) {
    if (string.includes('You lose')) {
        computerScore++;
        return 1;
    } else if (string.includes('You win')) {
        userScore++;
        return 2;
    } else { 
        return 3;
    }
}

////////////////////////

const matchButton = document.querySelector('.match-button');
const description = document.querySelector('.description');
const playerButtons = document.querySelector('.player').children;
const computerDivs = document.querySelector('.computer').children;
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerRecap = document.querySelector('.player-scores');
const computerRecap = document.querySelector('.computer-scores');
const selectionArea = document.querySelector('#selection-area');
const scoreboard = document.querySelector('#scoreboard');

matchButton.addEventListener('click', startGame);
matchButton.addEventListener('click', clearChoices);

function startGame() {
    for (let button of playerButtons) {
        button.addEventListener('click', playRound)
        button.classList.remove('selected', 'winner', 'loser');
    }

    for (let div of computerDivs) {
        div.classList.remove('selected', 'winner', 'loser');
    }

    computerScore = 0;
    userScore = 0;
    rounds = 0;

    playerScoreDisplay.textContent = `Player: ${userScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    selectionArea.style.visibility = 'visible';
    scoreboard.style.visibility = 'visible';
    matchButton.style.display = 'none';
    description.textContent = `Click below to choose 🪨 📄 or ✂️ !`
    playerScoreDisplay.style.backgroundColor = 'transparent';
    computerScoreDisplay.style.backgroundColor = 'transparent';
}

function endGame() {
    for (let button of playerButtons) {
        matchButton.style.display = 'inline';
        matchButton.textContent = 'Play Again!';
        button.removeEventListener('click', playRound)
    }
}

function playRound(e) {
    rounds++;
    const playerChoice = e.target.dataset.selection;
    const computerChoice = getComputerChoice()
    const roundResult = singleRound(playerChoice, computerChoice);
    const winner = winnerCheck(roundResult);
    if (winnerCheck == 1) computerScore++;
    if (winnerCheck == 2) userScore++;
    updateSelectionStyling(playerChoice, computerChoice, winner);
    description.textContent = `${roundResult}--Click 🪨 📄 or ✂️ below to make your choice
    for the next round!`
    playerScoreDisplay.textContent = `Player: ${userScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    updateRoundRecap(playerChoice, computerChoice, winner);
    if (computerScore == 5) {
        endGame()
        playerScoreDisplay.style.backgroundColor = 'red';
        computerScoreDisplay.style.backgroundColor = 'green';
        description.textContent = `After ${rounds} rounds, the COMPUTER is the champion!`
    }
    if (userScore == 5) {
        endGame()
        playerScoreDisplay.style.backgroundColor = 'green';
        computerScoreDisplay.style.backgroundColor = 'red';
        description.textContent = `After ${rounds} rounds, YOU are the champion!`  
    }
}

function updateSelectionStyling(playerChoice, computerChoice, winnerCheck) {
    for (let button of playerButtons) {
        button.classList.remove('selected', 'winner', 'loser');
        if (button.dataset.selection.toLowerCase() == playerChoice.toLowerCase()) {
            if (winnerCheck == 1) {
                button.classList.add('loser');
            } else if (winnerCheck == 2) {
                button.classList.add('winner');
            } else {
                button.classList.add('selected');
            }
        }
    }

    for (let div of computerDivs) {
        div.classList.remove('selected', 'winner', 'loser');
        if (div.dataset.selection.toLowerCase() == computerChoice.toLowerCase()) {
            if (winnerCheck == 1) {
                div.classList.add('winner');
            } else if (winnerCheck == 2) {
                div.classList.add('loser');
            } else {
                div.classList.add('selected');
            }
        }
    }
}

function updateRoundRecap(playerChoice, computerChoice, winner) {
    function emojiConversion(string) {
        if (string.toLowerCase() === 'rock') {
            return '🪨'
        } else if (string.toLowerCase() === 'paper') {
            return '📄'
        } else {
            return '✂️'
        }
    }

    const playerP = document.createElement('p');
    const computerP = document.createElement('p');
    playerP.classList.add('round-choice');
    computerP.classList.add('round-choice');
    
    if (winner == 1) {
        playerP.style.backgroundColor = 'red';
        computerP.style.backgroundColor = 'green';
    }

    if (winner == 2) {
        playerP.style.backgroundColor = 'green';
        computerP.style.backgroundColor = 'red';
    }

    playerP.textContent = `Round ${rounds}: ${emojiConversion(playerChoice)}`
    computerP.textContent = `Round ${rounds}: ${emojiConversion(computerChoice)}`

    playerRecap.appendChild(playerP);
    computerRecap.appendChild(computerP);
}

function clearChoices() {
    const roundChoices = document.querySelectorAll('.round-choice');

    for (let i = 0; i < roundChoices.length; i++) {
        roundChoices[i].parentNode.removeChild(roundChoices[i])
    }
}