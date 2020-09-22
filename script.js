let computerScore = 0;
let playerScore = 0;
let computerChoice;
let playerChoice;


let rockButton = document.getElementById('rock-btn');
rockButton.addEventListener('click', (e)=>{
    console.log(e);
    playerChoice = "rock";
    let playerChoiceHTML = document.getElementById('player-choice');
    playerChoiceHTML.innerHTML = `Your choice: ${playerChoice}`;
    getComputerChoice();
    evaluateScore();
});


let paperButton = document.getElementById('paper-btn');
paperButton.addEventListener('click', (e)=>{
    console.log(e);
    playerChoice = "paper";
    let playerChoiceHTML = document.getElementById('player-choice');
    playerChoiceHTML.innerHTML = `Your choice: ${playerChoice}`;
    getComputerChoice();
    evaluateScore();
});

let scissorButton = document.getElementById('scissor-btn');
scissorButton.addEventListener('click', (e)=>{
    console.log(e);
    playerChoice = "scissor";
    let playerChoiceHTML = document.getElementById('player-choice');
    playerChoiceHTML.innerHTML = `Your choice: ${playerChoice}`;
    getComputerChoice();
    evaluateScore();
});

let playAgainEvent = document.getElementById('play-again-btn');
playAgainEvent.addEventListener('click',()=>{
        window.location.reload();
});

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let chooseRandom = Math.floor(Math.random()* 3);
    computerChoice = choices[chooseRandom];
    let computerChoiceHTML = document.getElementById('computer-choice');
    computerChoiceHTML.innerHTML = `Computer's choice: ${computerChoice}`;
}

function evaluateScore(){
    let playerScoreHTML = document.querySelector('#player-score');
    let computerScoreHTML = document.querySelector('#computer-score');
    let resultEditHTML = document.querySelector('#result');

    if(playerChoice == computerChoice){
        resultEditHTML.innerHTML = "Draw! Try again.";
    }else if(playerChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        computerScoreHTML.innerHTML = `COMPUTER'S SCORE: ${computerScore}`;
        resultEditHTML.innerHTML = "Sorry! You've lost this round.";
    }else if(playerChoice == "rock" && computerChoice == "scissor"){
        playerScore++;
        playerScoreHTML.innerHTML = `PLAYER'S SCORE: ${playerScore}`;
        resultEditHTML.innerHTML = "Congratulations! You've won this round.";
    }else if(playerChoice == "paper" && computerChoice == "scissor"){
        computerScore++;
        computerScoreHTML.innerHTML = `COMPUTER'S SCORE: ${computerScore}`;
        resultEditHTML.innerHTML = "Sorry! You've lost this round." ;
    }else if(playerChoice == "paper" && computerChoice == "rock"){
        playerScore++;
        playerScoreHTML.innerHTML = `PLAYER'S SCORE: ${playerScore}`;
        resultEditHTML.innerHTML = "Congratulations! You've won this round." ;
    }else if(playerChoice == "scissor" && computerChoice == "rock"){
        computerScore++;
        computerScoreHTML.innerHTML = `COMPUTER'S SCORE: ${computerScore}`;
        resultEditHTML.innerHTML = "Sorry! You've lost this round." ;
    }else if(playerChoice == "scissor" && computerChoice == "paper"){
        playerScore++;
        playerScoreHTML.innerHTML = `PLAYER'S SCORE: ${playerScore}`;
        resultEditHTML.innerHTML = "Congratulations! You've won this round.";
    }
    isMatchOver();
}


function isMatchOver(){
    let rockPaperScissorElement = document.getElementById('rock-paper-scissor-btn');
    let playAgainElement = document.getElementById('play-again-btn');

    if(computerScore > 4 || playerScore > 4){
        
        setTimeout(() => {
            rockPaperScissorElement.style.display = "none";
            playAgainElement.style.display = "block";
        }, 200);

        if(computerScore == 5){
            querySelector('#result').innerHTML = "Sorry! You've lost the game.";
        }else{
            querySelector('#result').innerHTML = "Congratulation! You've won the game."
        }
    }
}
