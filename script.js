//global variables to track the game
let humanScore = 0;
let computerScore = 0;

// computer makes its rock paper scissors choice
function getComputerChoice(){
    const rpsChoice = (() => {
        switch(Math.floor(Math.random()*3)) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    })();
    return rpsChoice;
};

//function to play one round of rock paper scissors with score update and outcome
function playRound(human, computer){
    const resultsPara = document.querySelector(".results");
    const scorePara = document.querySelector(".score");

    const choiceArray = ["rock", "paper", "scissors"];
    //matrix of outcomes assuming computerChoice as rows and human choice as columns
    const outcomeMatrix = [['t', 'w', 'l'], ['l', 't', 'w'], ['w', 'l', 't']];
    const computerIndex = choiceArray.indexOf(computer);
    const humanIndex = choiceArray.indexOf(human);
    
    switch(outcomeMatrix[computerIndex][humanIndex]) {
        case 't':
            resultsPara.textContent = "It's a tie!";
            scorePara.textContent = `Human - ${humanScore} | Computer - ${computerScore}`;
            break;
        case 'w':
            humanScore++;
            resultsPara.textContent = "You win!";
            scorePara.textContent = `Human - ${humanScore} | Computer - ${computerScore}`;
            break;
        case 'l':
            computerScore++;
            resultsPara.textContent = "You lose!";
            scorePara.textContent =`Human - ${humanScore} | Computer - ${computerScore}`;
            break;
            
    }
    if (humanScore >=5 && computerScore >= 5){
        const finalPara = document.querySelector(".final").textContent =`You are tied!`;
    }
    else if (humanScore >= 5) {
        const finalPara = document.querySelector(".final").textContent = `You are the winner!`;
    }
    else if (computerScore >= 5) {
        const finalPara = document.querySelector(".final").textContent = `You are the loser!`;
    }
}

//get human choice from button click
let humanChoice = "";

document.getElementById("rock").addEventListener("click", () => {playRound("rock", getComputerChoice());});
document.getElementById("paper").addEventListener("click", () => {playRound("paper", getComputerChoice());});
document.getElementById("scissors").addEventListener("click", () => {playRound("scissors", getComputerChoice());});
