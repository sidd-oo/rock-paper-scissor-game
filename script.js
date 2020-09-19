// console.log("Let's play Rock Paper Scissor")
// let computerScore = 0;
// let playerScore = 0;

// let computerPlay = ()=>{
//     let entities = ['rock', 'paper', 'scissor'];
//     let chooseRandom = Math.floor(Math.random() * (3 - 0) + 0);
//     return entities[chooseRandom];
// };

// let playerPlay = ()=>{
//     let select = window.prompt("Choose from Rock, Paper and Scissor").toLowerCase();
//     return select;
// };

// let playRound = (computerSelection, playerSelection)=>{
//     const computerSelect = computerSelection;
//     const playerSelect = playerSelection;
//     if(computerSelect == playerSelect){
//         computerScore++;
//         playerScore++;
//         console.log(`You both won as you both choose ${computerSelect}`);
//     }else if(computerSelect == "rock" && playerSelect == "paper"){
//         playerScore++;
//         console.log(`You won this round`);
//     }else if(computerSelect == "rock" && playerSelect == "scissor"){
//         computerScore++;
//         console.log(`You got hit badly with ${computerSelect}`);
//     }else if(computerSelect == "paper" && playerSelect == "scissor"){
//         playerScore++;
//         console.log(`You won this round`);
//     }else if(computerSelect == "paper" && playerSelect == "rock"){
//         computerScore++;
//         console.log(`You got hit badly with ${computerSelect}`);
//     }else if(computerSelect == "scissor" && playerSelect == "rock"){
//         playerScore++;
//         console.log(`You won this round`);
//     }else if(computerSelect == "scissor" && playerSelect == "paper"){
//         computerScore++;
//         console.log(`You got hit badly with ${computerSelect}`);
//     }else{
//         console.log(`The input is not correct`);
//     }
// };

// function winner(){
//     if(computerScore == playerScore){
//         console.log("Draw");
//     }else if (computerScore > playerScore){
//         console.log(`You lost this game by ${playerScore} - ${computerScore}`);
//     }else {
//         console.log(`You won this game by ${playerScore} - ${computerScore}`);
//     }
// }

// function game(){
//     for(let i = 0; i < 5; i++){
//         playRound(computerPlay(), playerPlay());
//     }
//     winner();
// }
// game();
