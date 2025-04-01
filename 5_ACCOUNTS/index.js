import inquirer from "inquirer"
import chalk from "chalk"
import fs from "fs"

operations()

const accountsFolder = "accounts"

function operations()
{
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "O que você deseja fazer?",
            choices:
                [
                    'Criar Conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Sair'
                ],
        }])
        .then((answer) =>
        {
            const action = answer['action']
            console.log(action);

            if (action == "Criar Conta")
            {
                createAccountMessage()
            }
            else if (action == "Consultar Saldo")
            {
                consult()
            }
            else if (action == "Depositar")
            {
                deposit()
            }
            else if (action == "Sacar")
            {

            }
            else
            {
                end()
            }
        })
        .catch((err) => console.log(err))
}

function createAccountMessage()
{
    console.log(chalk.bgGreen.black("Obrigado por escolher o nosso banco!"))
    console.log(chalk.green(""))

    createAccountPrompt()
}

function createAccountPrompt()
{
    inquirer.prompt(
        {
            name: "accountName",
            message: "Digite o nome para a sua conta: "
        })
        .then((answer) =>
        {
            const accountName = answer['accountName']

            //Se o diretório não existe, crie ele
            if (!fs.existsSync(accountsFolder))
            {
                fs.mkdirSync(accountsFolder)
            }

            if (fs.existsSync(`${ accountsFolder }/${ accountName }.json`))
            {
                console.log(chalk.bgRed.black("Ja existe uma conta com esse nome, por favor tente novamente!"));
                createAccountPrompt();
                return;
            }

            fs.writeFileSync(`${ accountsFolder }/${ accountName }.json`, '{"balance": 0}', function (err)
            {
                console.log(err);
            })

            console.log(chalk.green("A sua conta foi criada!"));
            operations()
        })
        .catch((err) =>
        {
            console.log(err);
        })
}

function deposit()
{
    inquirer.prompt(
        {
            name: "accountName",
            message: "Qual o nome da sua conta?"
        })
        .then((answer) =>
        {
            const accountName = answer["accountName"]

            //Se a conta não existe, reexecuta a função
            if (!checkAccount(accountName))
            {
                return deposit()
            }

            inquirer.prompt(
                {
                    name: "amount",
                    message: "Digite a quantia que você deseja depositar:"
                })
                .then((answer) =>
                {
                    const amount = answer["amount"]

                    addAmount(accountName, amount)
                })
                .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
}

function checkAccount(accountName)
{
    if (!fs.existsSync(`${ accountsFolder }/${ accountName }.json`))
    {
        console.log(chalk.bgRed.black("Esta conta não existe, tente novamente!"));
        return false
    }

    return true
}

function addAmount(accountName, amount)
{
    const accountData = getAccount(accountName)

    if (!amount)
    {
        console.log(chalk.bgRed.black("Ocorreu um errom tente novamente!"));
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`${ accountsFolder }/${ accountName }.json`, JSON.stringify(accountData), function (err)
    {
        console.log(err)
    })

    console.log(chalk.green(`Foi depositado o valor de R$${ amount } na sua conta de nome ${ accountName }`))
    operations()
}

function getAccount(accountName)
{
    fs.readFileSync
    const accountJSON = fs.readFileSync(`${accountsFolder}/${ accountName }.json`,
        {
            encoding: "utf8",
            flag: "r"
        })

    return JSON.parse(accountJSON)
}

function consult()
{
    inquirer.prompt({
        name: "accountName",
        message: "Qual o nome da conta na qual deseja consultar o saldo?"
    })
    .then((answer) =>
    {
        const accountName = answer['accountName']

        if (!checkAccount(accountName))
        {
            return consult()
        }

        console.log(chalk.bgGreen.black(`O saldo da sua conta [${accountName}] é de R$${getBalance(accountName)}`));
    })
    .catch(err => console.log(err))
}

function getBalance(accountName)
{
    return getAccount(accountName).balance
}

function withdraw()
{

}

function end()
{
    console.log(chalk.bgBlue.black("Finalizando o programa..."));
    console.log(chalk.bgGreen.black("Obrigado por usar o Accounts!"));
    return
}