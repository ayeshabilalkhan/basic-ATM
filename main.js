#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// initialize user account balance & pin code
var myBalance = 50000;
var myPin = 4444;
// Print welcome message
console.log("Welcome, Ayesha! Your current balance is: ".concat(myBalance));
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Pleace Enter your PIN.",
        type: "number",
    }
]);
// Verify pin code
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!");
    // Ask for operation choice
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw Ammount", "Check Balance"],
        },
    ]);
    // Adding options for different amounts
    if (operationAns.operation === "Withdraw Ammount") {
        var amountAns = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "Pleace select amount",
                type: "list",
                choices: ["10000", "20000", "30000", "40000"],
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Withdraw Successfully");
        console.log("Your remaiming balance is: " + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("PIN is Incorrect, Try Again!");
}
