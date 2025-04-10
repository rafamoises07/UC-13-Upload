// Importa para interagir com DB
const mongoose = require("mongoose");

// Carrega variáveis de ambiente do arquivo .ENV
require("dotenv").config();

// Configurando para permitir consultas (Restritas)
mongoose.set("strictQuery", true);

// Credenciais 
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Função para no DB
async function main() {
    await mongoose
    .connect
    // Link do mongo
    ( `mongodb+srv://${dbUser}:${dbPassword}@apiuc13-2.hpq3j.mongodb.net/?retryWrites=true&w=majority&appName=APIUC13-2`);
    // Exibe ao usuario que realizou a coneção
    console.log("Conectou ao banco de dados!");
}

// Exibe a msg ao usuário com erro
main().catch((err) => console.log(err));

// Exporta a função para utilizar em outro arquivo
module.exports = main;