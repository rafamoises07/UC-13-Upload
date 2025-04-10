// Importa para interação com o DB
const mongoose = require("mongoose");

// Permite criar esquemas e modelos para o MongoDB
const Schema = mongoose.Schema;

// Definindo um Schema para as imagens
const PictureSchema = new Schema({
    // Campo do tipo string e obrigatorio
    name: { type: String, required: true},
    //  armazena como buffer
    Imagem: { type: Buffer, required: true},
    // Campo para armazenar o tipo de imagem
    contentType: { type: String, required: true},
});

// criando o modelo 'Picture' a partir do esquema criado antes 
// O Modelo 'Picture' é usado para interagir com a "Tabela" Picture no DB
module.exports = mongoose.model("Picture", PictureSchema);