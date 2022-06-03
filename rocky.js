//function to computer to generate result
function computerPlay() {
    let rps = ["rock", "paper", "scissors"];
    return(rps[Math.floor(Math.random()*rps.length)]);
};

//function to check players choice against computers and determines winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("tie");
        } else if (computerSelection == "paper") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("lose: paper beats rock");
            computerWin++;
            //update counter used in game() function
        } else if (computerSelection == "scissors") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("win: rock beats scissors");
            playerWin++;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("win: paper beats rock");
            playerWin++;
        } else if (computerSelection == "paper") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("tie");
        } else if (computerSelection == "scissors") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("lose: scissors beats paper");
            computerWin++;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("lose: rock beats scissors");
            computerWin++;
        } else if (computerSelection == "paper") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("win: scissors beats paper");
            playerWin++;
        } else if (computerSelection == "scissors") {
            console.log(`player chose: ${playerSelection}`);
            console.log(`computer chose: ${computerSelection}`);
            console.log("tie");
        }
    } else {
        console.log("error_play")
    }
}

//variable to count wins
let computerWin = 0;
let playerWin = 0;

//create function to play multiple rounds 
function game() {
    for (let i = 0; i < 5; i++) { //repeat this section of code 5 times
        const playerSelection = prompt("Rock, Paper, scissors?").toLowerCase();
        //player input option and convert to lower case
        const computerSelection = computerPlay();
        //calls computerPlay function to get random option
        playRound(playerSelection, computerSelection);
        console.log(`ROUND ${i+1} PLAYED`);
        //counter for each round played
    }
    console.log(`Computer: ${computerWin}`);
    console.log(`Player: ${playerWin}`);
    
}

game();

//compare scores and announce winner
if (computerWin > playerWin) {
    console.log("YOU LOSE");
    document.getElementById("winner").innerHTML = "Computer wins!";
} else if (playerWin > computerWin) {
    console.log("YOU WIN");
    document.getElementById("winner").innerHTML = "You win!";
} else {
    console.log("TIE");
    document.getElementById("winner").innerHTML = "Its a tie!";
};