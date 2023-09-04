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

function playerSelection(){
    let choice = prompt("Rock, Paper, or Scissors?", "rock");
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case "rock":
            if(computerSelection === "rock"){return 0;}
            else if(computerSelection === "paper"){return -1;}
            else{return 1;}
        case "paper":
            if(computerSelection === "paper"){return 0;}
            else if(computerSelection === "scissors"){return -1;}
            else{return 1;}
        case "scissors":
            if(computerSelection === "scissors"){return 0;}
            else if(computerSelection === "rock"){return -1;}
            else{return 1;}
    }
}

function game(){

    let playerScore = 0;
    let CPUScore = 0;
    let roundWinner;

    for(let i = 0; i < 5; ++i){
        roundWinner = playRound(playerSelection(), getComputerChoice());

        if(roundWinner === 1){
            ++playerScore;
        }
        else if(roundWinner === 0){
            continue;
        }
        else{
            ++CPUScore;
        }
    }

    if(CPUScore === playerScore){
        alert("You Tied!");
    }
    else if(CPUScore > playerScore){
        alert("You Lose!");
    }
    else{
        alert("You Win!");
    }
}

game();