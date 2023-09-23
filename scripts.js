// Buttons is a node list. Similar to array
const buttons = document.querySelectorAll("button");

// Use .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerSelection(button.id);
    });

});

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

function playerSelection(choice){
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



function game(playerSelection, computerSelection){
    let playerScore = 0; 
    let enemyScore = 0;
    let winner;
    for(let i = 0; i < 5; ++i){
        winner = playRound(playerSelection(), computerSelection());
        if(winner === -1){
            ++enemyScore;
        }
        else if(winner === 1){
            ++playerScore;
        }
        else{
            continue;
        }
    }

    if(playerScore > enemyScore){
        alert("You Win!");
    }
    else if(playerScore < enemyScore){
        alert("You Lose!");
    }
    else{
        alert("tie!");
    }
}


