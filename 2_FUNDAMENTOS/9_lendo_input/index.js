const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual o seu jogo favorito?\n", (jogo) =>
{
    console.log(`Seu jogo favorito é: ${jogo}`);
    readline.close();
})