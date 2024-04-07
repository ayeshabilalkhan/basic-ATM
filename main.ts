#! /usr/bin/env node

import inquirer from "inquirer";

// initialize user account balance & pin code
let myBalance = 50000;
let myPin = 4444;

// Print welcome message
console.log(`Welcome, Ayesha! Your current balance is: ${myBalance}`);


let pinAnswer = await inquirer.prompt(
    [
        {
          name: "pin",
          message: "Pleace Enter your PIN.",
          type: "number",
        }
    ]
);

// Verify pin code
if (pinAnswer.pin === myPin) {
  console.log("Pin is Correct, Login Successfully!");

// Ask for operation choice
  let operationAns = await inquirer.prompt(
    [
        {
          name: "operation",
          message: "Please select option",
          type: "list",
          choices: ["Withdraw Ammount", "Check Balance"],
        },
    ]
);
 
// Adding options for different amounts
if (operationAns.operation === "Withdraw Ammount") {
let amountAns = await inquirer.prompt(
  [
    {
      name: "amount",
      message: "Pleace select amount",
      type: "list",
      choices: ["10000", "20000", "30000", "40000"],
    }
  ]
);

myBalance -= amountAns.amount;

console.log("Withdraw Successfully")
console.log("Your remaiming balance is: " + myBalance)


} else if (operationAns.operation === "Check Balance") {
  console.log("Your balance is: " + myBalance);
}

}

 else {
  console.log("PIN is Incorrect, Try Again!");
 }

 