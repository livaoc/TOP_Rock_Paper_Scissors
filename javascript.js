// 3 buttons: rock, paper, scissors
// player clicks one of the buttons
// getHumanChoice acts
//      -> one option for this is to make it act by
//         checking the text content for the button  
//         and returning it as the human choice
//
let humanChoice;
let computerChoice;
let computerScore = 0;
let humanScore = 0;
let drawScore = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max)
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computerChoice, humanChoice) {
        if ((computerChoice === "rock" && humanChoice === "scissors") || 
            (computerChoice === "paper" && humanChoice === "rock") || 
            (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore = computerScore + 1;
            return console.log("You lost this round!");
        } else if (computerChoice === humanChoice) {
            drawScore = drawScore + 1;
            return console.log("Its a draw!");
        } else {
            humanScore = humanScore + 1;  
            return console.log("You won this round!");   
        }
}


console.log("Computer input: " + computerChoice);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.textContent;
        humanChoice = buttonText;

        computerChoice = getComputerChoice(3);
        
        playRound(computerChoice, humanChoice);

        console.log("\nYour choice: " + humanChoice +
                    "\nComputer choice: " + computerChoice +
                    "\n\nYour score: " + humanScore +
                    "\nComputer score: " + computerScore +
                    "\nDraws: " + drawScore);
    });

});


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