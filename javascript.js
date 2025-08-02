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

let infoComputerChoice = document.querySelector(".infoComputerChoice");
let infoHumanChoice = document.querySelector(".infoHumanChoice");
let infoResult = document.querySelector(".infoResult");
let infoHumanScore = document.querySelector(".infoHumanScore");
let infoComputerScore = document.querySelector(".infoComputerScore");

let won = "";
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
            won = "no";
            return console.log("You lost this round!");
        } else if (computerChoice === humanChoice) {
            drawScore = drawScore + 1;
            won = "draw";
            return console.log("Its a draw!");
        } else {
            humanScore = humanScore + 1;  
            won = "yes"; 
            return console.log("You won this round!");  
        }
}

infoComputerChoice.textContent = "Computer choice: ---";
infoHumanChoice.textContent = "Your choice: ---";
infoResult.textContent = "----------------";
infoComputerScore.textContent = "Computer score: " + computerScore;
infoHumanScore.textContent = "Your score: " + humanScore;

console.log("Computer input: " + computerChoice);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonText = button.textContent;
        humanChoice = buttonText.toLowerCase();
        computerChoice = getComputerChoice(3);
        
        playRound(computerChoice, humanChoice);
        if (won === "yes") {
            infoComputerChoice.textContent = "Computer choice: " + computerChoice;
            infoHumanChoice.textContent = "Your choice: " + humanChoice;
            infoResult.textContent = "You WON this round!";
            infoComputerScore.textContent = "Computer score: " + computerScore;
            infoHumanScore.textContent = "Your score: " + humanScore;
        } else if (won === "no") {
            infoComputerChoice.textContent = "Computer choice: " + computerChoice;
            infoHumanChoice.textContent = "Your choice: " + humanChoice;
            infoResult.textContent = "You LOST this round!";
            infoComputerScore.textContent = "Computer score: " + computerScore;
            infoHumanScore.textContent = "Your score: " + humanScore;
        } else {
            infoComputerChoice.textContent = "Computer choice: " + computerChoice;
            infoHumanChoice.textContent = "Your choice: " + humanChoice;
            infoResult.textContent = "It's a DRAW!";
            infoComputerScore.textContent = "Computer score: " + computerScore;
            infoHumanScore.textContent = "Your score: " + humanScore;
        }
        console.log("\nYour choice: " + humanChoice +
                    "\nComputer choice: " + computerChoice +
                    "\n\nYour score: " + humanScore +
                    "\nComputer score: " + computerScore +
                    "\nDraws: " + drawScore);
    });

});