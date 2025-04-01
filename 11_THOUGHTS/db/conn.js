const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('thoughts', 'root', '', 
{
    host: 'localhost',
    dialect: 'mysql',
})

try
{
    sequelize.authenticate()
    console.log("Conectado com sucesso ao banco de dados!");
}
catch(err)
{
    console.log(`Problema na conexão com o banco de dados: ${err}`);
}

module.exports = sequelize