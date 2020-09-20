let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;


let rockButton = document.getElementById('rock-btn');
rockButton.addEventListener = ('click', (e)=>{
    console.log(e);
    playerChoice = "rock";
    let playerChoiceHTML = document.getElementById('player-choice');
    playerChoiceHTML.innerHTML = `Your choice: ${playerChoice}`;
    // getComputerChoice();
    // evaluateScore();
});


let paperButton = document.getElementById('paper-btn');
paperButton.addEventListener = ('click', (e)=>{
    console.log(e);
    playerChoice = "paper";
    let playerChoiceHTML = document.getElementById('player-choice');
    playerChoiceHTML.innerHTML = `Your choice: ${playerChoice}`;
    // getComputerChoice();
    // evaluateScore();
});

let scissorButton = document.getElementById('scissor-btn');
rockButton.addEventListener = ('click', (e)=>{
    console.log(e);
    playerChoice = "scissor";
    let playerChoiceHTML = document.getElementById('player-choice');
    playerChoiceHTML.innerHTML = `Your choice: ${playerChoice}`;
    // getComputerChoice();
    // evaluateScore();
});