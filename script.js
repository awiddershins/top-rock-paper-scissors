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

function playRound(human, computer){
    const choiceArray = ["rock", "paper", "scissors"];
    const outcomeMatrix = [['t', 'w', 'l'], ['l', 't', 'w'], ['w', 'l', 't']];
    //matrix of outcomes assuming computerChoice as rows and human choice as columns
    const computerIndex = choiceArray.indexOf(computer);
    const humanIndex = choiceArray.indexOf(human);
    switch(outcomeMatrix[computerIndex][humanIndex]) {
        case 't':
            return "It's a tie!";
        case 'w':
            humanScore += humanScore;
            return "You win!";
        case 'l':
            computerScore += computerScore;
            return "You lose!";
            
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));