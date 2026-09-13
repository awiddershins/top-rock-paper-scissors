// computer makes its rock paper scissors choice
function getComputerChoice(){
    const rpsChoice = (() => {
        switch(Math.floor(Math.random()*3)) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissor";
        }
    })();
    return rpsChoice;
};