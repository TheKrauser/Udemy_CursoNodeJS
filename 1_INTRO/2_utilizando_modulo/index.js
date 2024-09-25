const fs = require("fs"); //importando o fs (file system)

//Lê o arquivo "arquivo.txt" no formato UTF-8
//(err, data) é uma função anônima passada como parametro para verificar a ocorrência de erro
fs.readFile("arquivo.txt", "utf-8", (err, data) =>
{
    if (err)
    {
        console.log(err);
        return;
    }

    console.log(data);
});