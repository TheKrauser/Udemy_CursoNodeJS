const http = require("http");

const porta = 3000;
const server = http.createServer((req, res) =>
{
    res.write("Ola");
    res.end();
})

server.listen(porta, () =>
{
    console.log(`Servidor rodndo na porta: ${porta}`);
});