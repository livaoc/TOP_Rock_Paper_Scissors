function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max)
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    while (true) {
    let userChoice = prompt("Choose between rock, paper, scissors: ");
    userChoice = userChoice.toLowerCase();
        if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
            console.log("You chose " + userChoice);
            return userChoice;
        } else {
            console.log("Invalid input. Please try again.");
        }
    }
}

getHumanChoice();
console.log("Computer input: " + getComputerChoice(3));


let computerScore = 0;
let humanScore = 0;

function playRound(computerChoice, userChoice) {

    if (computerChoice == "rock" && userChoice == "scissors"|| computerChoice == "paper" && userChoice == "rock"|| computerChoice == "scissors" && userChoice == "paper") {
        computerScore = computerScore + 1;
    } else if (computerChoice == userChoice) {
        console.log("Its a draw!");
    } else {
        humanScore = humanScore + 1;
    }
}


/* computer needs to return a random string between rock/paper/scissors
i can use Math.random() to return a random number (1 > number >= 0)
and code it to return a random number from 1 to 3 (0 to 2) using Math.floor()
and converting to Int

then, I'm able to associate each number to one of the 3 strings (rock/paper/scissors)
*/

/* human choice logic:
use prompt to get a user string input
use a system like while on python to keep the user on a loop until it writes one of the option
use .toLowerCase() to ignore capitalization of the user input
*/