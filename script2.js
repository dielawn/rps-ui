const rpsButtons = document.querySelectorAll('.rpsButtons')
let computerScore = 0;
let playerScore = 0;
let score = 0;



function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const computerChoice = rpsChoice[randomNumber]
    return computerChoice;
}

function applyRules(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return 0;
    } else if (
        (playerChoice == 'Rock' && computerChoice == 'Scissors') ||
        (playerChoice == 'Paper' && computerChoice == 'Rock') ||
        (playerChoice == 'Scissors' && computerChoice == 'Paper')){
            score++;
            return 1;
    } else {
        score = -1;
        return -1;
    }
}

const resultsDiv = document.getElementById('results')
const playerResult = document.getElementById('playerScore')
const computerResult = document.getElementById('computerScore')
const outcome = document.getElementById('outcome')
const scoreBoardDiv = document.getElementById('scoreBoard')

const round = document.getElementById('round')

function showResult(score, playerChoice, computerChoice){
    if(score == 0){
        playerResult.textContent = (`${playerChoice}`)
        outcome.textContent = ('Draw')
        computerResult.textContent = (`${computerChoice}`)
        result = `<li> Draw: ${playerChoice} vs ${computerChoice} 
        Player Score: ${playerScore} Computer Score: ${computerScore}</li>`;
    } else if (score == 1){
        playerScore++
        round.textContent = (`Player Score ${playerScore} Computer Score ${computerScore} `)
        playerResult.textContent = (`${playerChoice}`)
        outcome.textContent = ('You Win this round!')
        computerResult.textContent = (` ${computerChoice}`)
        result = `<li> Win: ${playerChoice} vs ${computerChoice}
        Player Score: ${playerScore} Computer Score: ${computerScore}</li>`;
    } else{
        computerScore++
        round.textContent = (`Player Score ${playerScore} Computer Score ${computerScore}`)
        playerResult.textContent = (`${playerChoice}`)
        outcome.textContent = ('You Lose this round')
        computerResult.textContent = (` ${computerChoice}`)
        result = `<li> Loss: ${playerChoice} vs ${computerChoice}
        Player Score: ${playerScore} Computer Score: ${computerScore}</li>`;
    }
    scoreBoardDiv.innerHTML += result;
}



function onClickRPS(playerChoice){
    const computerChoice = getComputerChoice();
    const score = applyRules(playerChoice, computerChoice);
    showResult(score, playerChoice, computerChoice)
    if(playerScore === 3 || computerScore === 3){
        let winner = '';
        if(playerScore === 3){
            winner = 'player';
        } else {
            winner = 'computer'
        }
        endGame(winner)        
    }
}

const playerChoice = document.querySelectorAll('.rpsButtons')

function playGame(){
    rpsButtons.forEach(button => {
        button.addEventListener('click', () => {
           startAnimation(button.firstElementChild);
            onClickRPS(button.value);
        })
    })
}

function endGame(winner) {   
    rpsButtons.forEach(button => {
        button.disabled = true;
    })
        if(winner == 'player'){
            playerResult.textContent = 'Game Over'
            outcome.textContent = 'You Won the Game!'
            scoreBoardDiv.innerHTML += `Game Won`
            
                   
        } else {
            playerResult.textContent = 'Game Over'
            outcome.textContent = 'You Lost the Game'
            scoreBoardDiv.innerHTML += `Game Lost`
            
    }
}

function resetGame(){
    playerResult.textContent = '';
    computerResult.textContent = '';
    outcome.textContent = 'Choose Wisely';
    round.textContent = 'Best of 5'
    playerScore = 0;
    computerScore = 0;
    scoreBoardDiv.innerHTML = '';
    rpsButtons.forEach(button => {
        button.disabled = false;
    });
}
let images = document.querySelectorAll('img')
function startAnimation(img) {    
        img.classList.add('line');
        setTimeout(() =>{
            img.classList.remove('line');
        }, 100);
    };



playGame()