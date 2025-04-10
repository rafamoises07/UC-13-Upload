// Importa o modulo do Express para configurar as rotas
const express = require("express");

// Cria a instancia do roteador do express para definir ROTAS
const router = express.Router();

// Importa a configuração do Multer para ligar com uploads de arquivos
const upload = require("../config/multer");

// Importa o controlador da img, onde tem todas as funçoes e busca
const PictureController = require("../controllers/PictureController");

// Definindo a rota POST para criar, e fazer upload da imagem
router.post("/", upload.single("file"), PictureController.create);

// Definindo a rota GET para buscar todas as imagens do DB
router.get("/", PictureController.findAll);

// Definindo a rota GET para obter uma imagem especifica
router.get("/:id/image", PictureController.getImage);

// Exportando o arquivo para utilizar no app.js
module.exports = router;