//getComputerChoice
//returns a random number between 1 and 3
// create a variable for a random number
const rpsButtons = document.querySelectorAll('.rpsButtons')

const computerChoice = getComputerChoice();

let score = 0;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {    
    const randomNumber = Math.floor(Math.random() * 3)
    const rpsChoice = ['rock', 'paper', 'scissors']
    const computerChoice = rpsChoice[randomNumber]
    return computerChoice
}

function getScore(humanChoice, computerChoice, score) {
    // Compare humanChoice and computerChoice
    console.log(score)
    if (humanChoice == computerChoice){// if statements for rules
        return 0;
    } else if (
        (humanChoice == 'rock' && computerChoice == 'scissors') ||
        (humanChoice == 'paper' && computerChoice == 'rock') ||
        (humanChoice == 'scissors' && computerChoice == 'paper')){
        score++;
        return 1;
    } else {
        score = -1;
        return -1;
    }
}

const results = document.getElementById('results');

function showResult(score, humanChoice, computerChoice) {
    console.log(score)
    if (score == 0) {
        results.textContent = (`${humanChoice} draw ${computerChoice}`)
    } else if (score == 1) {
        results.textContent = (`${humanChoice} You Win ${computerChoice}`)
    } else {
        results.textContent = (`${humanChoice} You lose ${computerChoice}`)
    }
}

function onClickRPS(humanChoice){
    const computerChoice = getComputerChoice();
    const score = getScore(humanChoice, computerChoice);
    showResult(score, humanChoice, computerChoice);
}


//use image click to get input from the user
const humanChoice = document.querySelectorAll('.rpsButtons')

function playRPS() {
    rpsButtons.forEach(button => {
        button.addEventListener('click', () => {
            onClickRPS(button.value);
        });
    });    
}

playRPS()




//make case insesnsitive rock, Rock, ROCK all good!


//function game() call playRPS * 5
//for (let i = 0; i < 5; i++) {
//  --code here--
//}


