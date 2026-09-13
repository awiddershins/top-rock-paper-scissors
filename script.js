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

// prompt human to get human choice

function getHumanChoice(){
   return rpsHumanChoice = prompt().toLowerCase(); 
}

//global variables to track the game
let humanScore = 0;
let computerScore = 0;

//function to play one round of rock paper scissors with score update and outcome
function playRound(human, computer){
    const choiceArray = ["rock", "paper", "scissors"];
    //matrix of outcomes assuming computerChoice as rows and human choice as columns
    const outcomeMatrix = [['t', 'w', 'l'], ['l', 't', 'w'], ['w', 'l', 't']];
    const computerIndex = choiceArray.indexOf(computer);
    const humanIndex = choiceArray.indexOf(human);
    switch(outcomeMatrix[computerIndex][humanIndex]) {
        case 't':
            console.log("It's a tie!");
            break;
        case 'w':
            humanScore++;
            console.log("You win!");
            break;
        case 'l':
            computerScore++;
            console.log("You lose!");
            break;
            
    }
}

//function to play five rounds of rock paper scissors

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    switch((humanScore - computerScore) > 0) {
        case true:
            return "You win! Score - " + humanScore + " to " + computerScore;
        case false:
            return "You lose :( Score - " + humanScore + " to " + computerScore;
    }
}

console.log(playGame());