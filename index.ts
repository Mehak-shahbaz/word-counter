#! usr/bin/env node 
import inquirer from "inquirer"

//Declare  a constant 'answers' and assign it to the result of inquirer.propmt function

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])

const words = answers.sentence.trim().split(" ")

console.log(words)

console.log(`your sentence word count is ${words.length}`);

