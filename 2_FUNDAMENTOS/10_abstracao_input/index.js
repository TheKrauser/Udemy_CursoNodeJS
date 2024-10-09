//const inquirer = require("inquirer");

import inquirer from 'inquirer';
//adicionar "type": "module" no arquivo package.json

inquirer.prompt([
    {
        name: "p1",
        message: "Qual a primeira nota?"
    },
    {
        name: "p2",
        message: "Qual a segunda nota?"
    },
])

.then((answers) =>
{
    console.log(answers);
    const media = ((parseInt(answers.p1) + parseInt(answers.p2))/2)
    console.log(`A média é: ${media}`);
})
.catch((err) =>
{
    console.log(err);
})