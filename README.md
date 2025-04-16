# UC-13-Upload
# API Galeria de Fotos - WEBAPI

Esta é uma API em construção que será uma API RESTful desenvolvida para ser uma galeria de fotos, utilizando
**Node.js**e**Express**. A API permite anexar, ver e excluir fotos, que ficaram salvas no banco de dados **mongoDB**.

## Funcionalidades 

-**PEGAR /**: Mostra a galeria de fotos.
-**PUBLICAR /**: Adicionado um nova imagem a galeria.
-**COLOCAR /**: Ainda não temos:(
-**APAGAR /**: Exclui a imagem escolhida da galeria e do banco de dados.

## Instalação

Instale o package.json

```bash
  npm install 
```
Em seguida instale os modulos(se nao tive-los)
```bash
    dotenv
    express
    mongoose
    multer
    nodemon
```

## Como usar 

Inicie o servidor:

Execute o comando para rodar o servidor:
```bash
  npm start
``` 

## Configurando do MongoDB:

Antes de iniciar o servidor, certifique-se de que o MongoDB está configurado corretamente. 
No arquivo .env, configure a URL de conexão com seu banco de dados MongoDB:

```bash
DB_USER=SeuUsuario
DN_PASS=SuaSenha
PORT=4000
```

## Carregar fotos:

Use o seguinte endpoint para adicionar uma nova foto.

Método: POST
Rota: /fotos/upload

Exemplo de requisição via Postman ou cURL:

cURL:

bash
Copiar
Editar
curl -X POST -F "name=foto1" -F "image=@/path/to/your/image.jpg" http://localhost:3000/fotos/upload
Postman:

Método: POST

Rota: /fotos/upload

Corpo: FormData (campo name para o nome e image para o arquivo de imagem)

Listar fotos:

Use o seguinte endpoint para listar todas as fotos carregadas:

Método: GET
Rota: /fotos

Exemplo de requisição:

cURL:

bash
Copiar
Editar
curl http://localhost:3000/fotos
Resposta:

json
Copiar
Editar
[
  {
    "name": "foto1",
    "imageUrl": "/uploads/foto1.jpg"
  },
  {
    "name": "foto2",
    "imageUrl": "/uploads/foto2.jpg"
  }
]
Excluir uma foto:

Para excluir uma foto, forneça o ID da foto que deseja remover.

Método: DELETE
Rota: /fotos/delete/:id

Exemplo de requisição:

cURL:

bash
Copiar
Editar
curl -X DELETE http://localhost:3000/fotos/delete/ID_DA_FOTO
Estrutura do Projeto
bash
Copiar
Editar
/galeria
├── /models
│   └── Foto.js        # Definição do schema de fotos no MongoDB
├── /public
│   └── /uploads      # Pasta onde as imagens serão armazenadas
├── /routes
│   └── fotoRoutes.js # Rotas para o upload e exclusão de fotos
├── .env              # Variáveis de ambiente, como MONGO_URI
├── app.js            # Arquivo principal do servidor (onde a API é inicializada)
└── package.json      # Dependências e scripts do projeto
Dependências
express: Framework para criar o servidor e as rotas.

mongoose: ODM (Object Data Modeling) para MongoDB.

multer: Middleware para upload de arquivos (neste caso, imagens).

dotenv: Carregar variáveis de ambiente a partir do arquivo .env.

nodemon: Ferramenta para monitoramento e recarga automática do servidor durante o desenvolvimento.

Exemplos de Uso
Endpoint para Adicionar Foto:
Método: POST
Rota: /fotos/upload

Este endpoint recebe uma foto e seus metadados (como nome), salvando-a na pasta de uploads e no banco de dados MongoDB.

Exemplo de corpo da requisição (FormData):

json
Copiar
Editar
{
  "name": "foto1",
  "image": "file"  // Aqui, o arquivo de imagem seria enviado
}
Endpoint para Listar Fotos:
Método: GET
Rota: /fotos

Esse endpoint retorna todas as fotos salvas na galeria.

Resposta:

json
Copiar
Editar
[
  {
    "name": "foto1",
    "url": "/uploads/foto1.jpg"
  },
  {
    "name": "foto2",
    "url": "/uploads/foto2.jpg"
  }
]
Endpoint para Excluir Foto:
Método: DELETE
Rota: /fotos/delete/:id

Este endpoint exclui uma foto com base no ID fornecido.

Exemplo de chamada:

bash
Copiar
Editar
curl -X DELETE http://localhost:3000/fotos/delete/12345
Melhorias Possíveis
Validação de arquivos: Limitar os tipos de arquivos que podem ser enviados (por exemplo, apenas .jpg ou .png).

Paginação: Adicionar paginação na listagem de fotos para evitar que muitas imagens sejam carregadas de uma vez.

Autenticação: Implementar autenticação de usuários (por exemplo, com JWT) para controlar o acesso à galeria de fotos.

## Licença

Este projeto é licenciado sob a MIT License.