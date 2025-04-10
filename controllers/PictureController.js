// Importa o models Picture para interagir com o DB
const Picture = require("../models/Picture");

// Função para criar uma nova imagem no banco de dados
exports.create = async (req, res) => {

    try{
        // Obtem o nome da img do corpo da requisição
        const { name } = req.body;

        // Obtém o arquivo da req.(usado pelo Multer para fazer o Upload
        const file = req.file;

        // Cria uma nova instancia com nome e imagem
        const picture = new Picture({
              name,
              image: file.buffer,
              contentType: file.mimetype,
        });

        // Salva a imagem no Db
        await picture.save();

        // Retorna a resposta com img. e uma msg. de sucesso
        res.json({ picture, msg: "Imagem salva com sucesso!"});
    }   catch (error) {
        // em caso de erro, retorna uma msg. com erro 500
        res.status(500).json({ message: "Erro ao salvar imagem! "});
    }
};

// Função para encontrar todas as imagens no banco de dados
exports.findAll = async ( req, res ) => {
    try{
        // Busca todas as imagens no banco de dados
        const pictures = await Picture.find();

        // Retorna todas as imagens do DB
        res.json(pictures);
    } catch (err) {
        // Em caso de erro, retorna uma resposta de erro com código 500
        res.status(500).json({ message: "Erro ao buscar imagens! "});
    }
};

// FUnção para obter somente uma imagem especifica
exports.getImage = async (req, res) => {
    try {
        // Buscando a imagem pelo id no banco de dados
        const picture = await Picture.findById(req.params.id);
       
        // Verificando se a imagem foi encontrada, caso não, retorna erro 404
        if (!picture) {
            return res.status(404).json({ message: "Imagem não encontrada!", });
        }

        //  Define o tipo da resposta
        res.set('Content-Type', picture.contentType);
        
        //  Mostra a imagem na resposta
        res.send(picture.image);
    } catch (error) {
        // Caso corra erro, retorna para o usuario
        res.status(500).json({ message: "Erro ao buscar a imagem! "});
    }
};