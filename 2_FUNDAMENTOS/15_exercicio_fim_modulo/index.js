import inquirer from "inquirer"
import chalk from "chalk"

inquirer.prompt([
    {
        name: "nome",
        message: "Qual o seu nome?\n"
    },
    {
        name: "idade",
        message: "Qual a sua idade?\n"
    }
])
    .then((answers) =>
    {
        //EXTRA
        if (!answers.nome || !answers.idade)
        {
            throw new Error("O nome e a idade são obrigatórios!");
        }

        console.log(chalk.bgYellow.black(`Seu nome é ${ answers.nome } e você tem ${ answers.idade } anos.`));
    })
    .catch((err) =>
    {
        console.log(chalk.bgRed(`${ err }`));
    })