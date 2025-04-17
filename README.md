# UC-13-Upload
# API Galeria de Fotos - WEBAPI

Esta é uma API em construção que será uma API RESTful desenvolvida para ser uma galeria de fotos, utilizando
**Node.js**e**Express**. A API permite anexar, ver e excluir fotos, que ficaram salvas no banco de dados **mongoDB**.

## Funcionalidades 

-**GET/**: Mostra a galeria de fotos.
-**POST /**: Adicionado um nova imagem a galeria.
-**PUT /**: Ainda não temos:/
-**DELETE /**: Exclui a imagem escolhida da galeria e do banco de dados.

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

### Use o seguinte endpoint para adicionar uma nova foto.
**Método: POST**
Rota: /fotos/upload
Corpo: FormData (campo name para o nome e image para o arquivo de imagem)

### Endpoint para Listar Fotos:
**Método: GET**
Rota: /fotos
Esse endpoint retorna todas as fotos salvas na galeria.

### Endpoint para Excluir Foto:
**Método: DELETE**
Rota: /fotos/delete/:id
Este endpoint exclui uma foto com base no ID fornecido.

## Licença
Este projeto é licenciado sob a MIT License.