# UC-13-Upload - API Galeria de Fotos

Esta é uma API RESTful desenvolvida para ser uma galeria de fotos, utilizando **Node.js**, **Express**, e **MongoDB**. A API permite fazer upload, visualizar e excluir fotos, que são armazenadas no banco de dados **MongoDB**.

## Funcionalidades

- **GET /pictures**: Retorna todas as fotos da galeria.
- **GET /pictures/:id/image**: Retorna uma imagem específica pelo ID.
- **POST /pictures**: Faz o upload de uma nova imagem para a galeria.
- **DELETE /pictures/:id**: Exclui uma imagem específica da galeria e do banco de dados.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- **Node.js** (versão 14 ou superior)
- **MongoDB** (local ou em um cluster na nuvem)
- **npm** (gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório:
   ```bash
    git clone <URL_DO_REPOSITORIO>
    cd UC-13-Upload

2. Instale as dependências do projeto:
```bash
    npm install 
```

3. Certifique-se de que os seguintes pacotes estão instalados:
```bash
    dotenv
    express
    mongoose
    multer
    nodemon
```

## Configuração

1. Crie um arquivo **.env** na raiz do projeto e configure as variáveis de ambiente:

```bash
    DB_USER=SeuUsuario
    DB_PASS=SuaSenha
    PORT=4000
```

2. Certifique-se de que o MongoDB está configurado corretamente. Caso esteja usando o MongoDB Atlas, substitua **SeuUsuario** e **SuaSenha** pelas credenciais do cluster.

## Como usar 

1. Inicie o servidor:
```bash
    npm start
```

2. A API estará disponível em **http://localhost:4000.**

## Endpoints

1. Listar todas as fotos
- **Método:** GET
- **Rota:** /pictures
- **Descrição:** Retorna todas as fotos armazenadas no banco de dados.

2. Obter uma imagem específica
- **Método:** GET
- **Rota:** /pictures/:id/image
- **Descrição:** Retorna a imagem correspondente ao ID fornecido.

3. Fazer upload de uma nova foto
- **Método:** POST
- **Rota:** /pictures
- **Descrição:** Faz o upload de uma nova imagem para a galeria.
- **Corpo da requisição (FormData):**
- Exemplo de resposta:
```bash
    {
      "picture": {
      "_id": "64a7b2c5e4b0f5a1d2e8c3f4",
      "name": "Minha Foto",
      "contentType": "image/jpeg"
      },
      "msg": "Imagem salva com sucesso!" }
```

4. Excluir uma foto
- **Método:** DELETE
- **Rota:** /pictures/:id
- **Descrição:** Exclui uma imagem específica pelo ID.
- Exemplo de resposta:
```bash
  {
    "message": "Imagem deletada com sucesso!"
  }
```

## Estrutura do Projeto
```bash
.env
.gitignore
app.js
config/
  multer.js
controllers/
  PictureController.js
db.js
index.html
models/
  Picture.js
package.json
README.md
routes/
  picture.js
script.js
styles.css
uploads/
```

- **app.js:** Arquivo principal que inicializa o servidor e configura as rotas.
- **controllers/PictureController.js:** Contém a lógica para manipulação de imagens (CRUD).
- **models/Picture.js:** Define o modelo de dados para as imagens no MongoDB.
- **routes/picture.js:** Define as rotas da API relacionadas às imagens.
- **config/multer.js:** Configuração do Multer para upload de arquivos.

## Tecnologias Utilizadas:

- **Node.js:** Ambiente de execução JavaScript.
- **Express:** Framework para criação de APIs.
- **MongoDB:** Banco de dados NoSQL para armazenamento das imagens.
- **Multer:** Middleware para upload de arquivos.
- **dotenv:** Gerenciamento de variáveis de ambiente.

## Licença

Este projeto é licenciado sob a **MIT License**.