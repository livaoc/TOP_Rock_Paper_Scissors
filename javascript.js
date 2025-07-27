function getComputerChoice(max) {
    let computer_got_choice = Math.floor(Math.random() * max)
    if (computer_got_choice == 0) {
        return "rock";
    } else if (computer_got_choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let while_condition = true;
    while (while_condition) {
    let user_choice = prompt("Choose between rock, paper, scissors: ");
    user_choice = user_choice.toLowerCase();
        if (user_choice == "rock" || user_choice == "paper" || user_choice == "scissors") {
            console.log("You chose " + user_choice);
            while_condition = false;
            return user_choice;
        } else {
            console.log("Invalid input. Please try again.");
        }
    }
}

getHumanChoice();
console.log("Computer input: " + getComputerChoice(3));


let computer_score = 0;
let human_score = 0;




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