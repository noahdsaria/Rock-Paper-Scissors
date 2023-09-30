function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);

    switch(x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Error with Computer Choice");
            break;
    }
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "rock"){return 0}
            else if(computerSelection === "paper"){
                return document.getElementById('enemy')
            }
            else{
                return document.getElementById('player');
            }
            break;
        case "paper":
            if(computerSelection === "paper"){return 0;}
            else if(computerSelection === "scissors"){
                return document.getElementById('enemy');
            }
            else{
                return document.getElementById('player');
            }
            break;
        case "scissors":
            if(computerSelection === "scissors"){
                return 0;
            }
            else if(computerSelection === "rock"){
                return document.getElementById('enemy');
            }
            else{
                return document.getElementById('player');
            }
    }
}

let playerScore = 0; 
let enemyScore = 0;
let numRounds = 0;
let choice = '';

function updateDisplay(){
    document.getElementById("player").value = playerScore;
    document.getElementById("enemy").value = enemyScore;
}
function reset(){
    playerScore = 0; 
    enemyScore = 0;
    numRounds = 0;
    updateDisplay();
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        choice = button.id;
        let winner = playRound(choice, getComputerChoice());

        if(winner.id === 'player'){
            ++playerScore;
            alert("Player Scores");
        }
        else if(winner.id === 'enemy'){
            ++enemyScore;
            alert("Opponent Scores");
        }
        else{
            alert("Tie!");
        }

        ++numRounds;
        updateDisplay();


        if(numRounds % 5 === 0){
            if(playerScore > enemyScore){
                alert("Player Wins!"); 


            }
            else if(playerScore < enemyScore){
                alert("Opponent Wins!");

            }
            else{
                alert("Game Tie!");

            }
            reset();
        }
    });
});

