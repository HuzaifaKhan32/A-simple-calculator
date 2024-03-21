#! usr/bin/env node
// this line is known as SHABANG 

import chalk from "chalk";
import inquirer from "inquirer";
// We are taking 3 inputs. In first and second we are taking input from user of 2 numbers
// On 3rd we are asking from user that which operation they want to do.
const answer = await inquirer.prompt([{
    message: "Enter your first number",
    type: "number",
    name: "firstNumber"
}, {
    message: "Enter your second number",
    type: "number",
    name: "secondNumber"
}, {
    message: "Select your operation which you want to do",
    // set type to list to give multiple options to user
    type: "list",
    name: "operators",
    choices: [chalk.green("Addition"), chalk.red("Subtraction"), chalk.yellow("Multiplication"), chalk.black("Division")]
}])
// console.log(answer);
// Using condition statements which help us to do operation in an easy way
if (answer.operators == chalk.green("Addition")) {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators == chalk.red("Subtraction")) {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators == chalk.black("Division")) {
    console.log(answer.firstNumber / answer.secondNumber);
}
else{
    console.log(answer.firstNumber * answer.secondNumber);
}