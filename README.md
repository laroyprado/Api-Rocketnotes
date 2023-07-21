<h1 align="center">
    <img src=".github/logo-rocketnotes.svg" title="Rocketnotes" alt="" width="30px" />
    Rocketnotes API
</h1>

<h4 align="center"> 
	🚀 Aplicação Finalizada 🚀
</h4>

<p align="center">
 <a href="#-about">About</a> |
 <!-- <a href="#-funcionalidades">Funcionalidades</a> | -->
 <!-- <a href="#-layout">Layout</a> | -->
 <a href="#-deploy">Deploy</a> | 
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <!-- <a href="#-contribuidores">Contribuidores</a> |  -->
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>

## 💻 About

Este é o repositório do back-end da aplicação Rocketnotes ([link do front-end](https://github.com/laroyprado/Rocketnotes)), sendo está uma aplicação web na qual os usuários podem se cadastrar e criar de forma organizada anotações sobre determinados assuntos, tendo disponível a adição de titulo, descrição, links e tags para cada nota, além de contar a edição de perfil do usuário, podendo alterar seu avatar, nome, email e senham, entre outras funcionalidades.

Vale ressaltar que este projeto faz parte da trilha/curso **Explorer** oferecida pela [Rocketseat](https://www.rocketseat.com.br/) para quem tiver interesse.

## 🔗 Deploy

O acesso ao deploy da API fica disponível através da seguinte URL base: https://api-rocketseat.onrender.com

> Obs: a aplicação pode demorar um pouco para entrar na primeira execução depois de um tempo, devido ao back-end estar rodando através do plano gratuito na plataforma de hospedagem.

---

## 🚀 How it works

<!--
Este projeto é divido em três partes:
1. Backend (pasta server)
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.
-->

### Pré-requisitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) ou [NPM](https://www.npmjs.com/)

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/laroyprado/Api-Rocketnotes

# Acesse a pasta do projeto no terminal/cmd
$ cd API-Rocketnotes

# Configure as variáveis de ambiente em um arquivo .env na raiz do projeto (use o arquivo .env.example como base)

# Instale as dependências
$ npm install

# Execute as migrations
$ npm run migrate:dev

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333

# Executar testes (caso queira)
$ npm test
```

### Rotas

| Método | Rota             | Descrição                                                | Parâmetros                                                                | Observação                                                       |
| ------ | ---------------- | -------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| POST   | /sessions        | Retorna os dados de autenticação de um usuário existente | `email`, `password`                                                       | enviar parâmetros no `body`                                      |
| GET    | /users           | Retorna um usuário específico                            | `token`                                                                   | enviar `token` de autenticação no `header`                       |
| POST   | /users           | Cria um novo usuário                                     | `name`, `email`, `password`                                               | enviar parâmetros no `body` da requisição                        |
| PUT    | /users           | Atualiza um usuário específico                           | `token`, `name`, `email`, `password`, `newPassword`(opcional)             | enviar `token` pelo `header` e o restante no `body`              |
| PATCH  | /users/avatar    | Atualiza o avatar de um usuário específico               | `token`, `avatar`                                                         | enviar `token` pelo `header` e o `avatar` no formato `multipart` |
| GET    | /notes           | Retorna todas as notas de um usuário                     | `token`                                                                   | enviar `token` de autenticação no `header`                       |
| GET    | /notes:id        | Retorna uma nota específica                              | `id`, `token`                                                             | enviar `token` pelo `header` e `id` pela rota                    |
| POST   | /notes           | Cria uma nota                                            | `title`, `description`, `tags`(array, optional), `link`(array, optional) | enviar `token` pelo `header` e o restante no `body`              |
| DELETE | /notes/:id       | Deleta uma nota específica                               | `id`, `token`                                                             | enviar `token` pelo `header` e `id` pela rota                    |
| GET    | /tags            | Retornas as tags criadas por um usuário                  | `token`                                                                   | enviar `token` de autenticação no `header`                       |
| GET    | /files/:filename | Retorna arquivos de avatar                               | `filename`                                                                | enviar `filename` pela rota                                      |

> Obs: todos os parâmetros enviados e respondidos no corpo da requisição e resposta estão no formato `JSON`.

## 🛠 Technologies

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server** ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/pt-br/)**
- **[Nodemon](https://www.npmjs.com/package/nodemon)**
- **[Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)**
- **[Knex](https://knexjs.org/)**
- **[PostgreSQL](https://node-postgres.com/)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**
- **[CORS](https://www.npmjs.com/package/cors)**
- **[Dotenv](https://www.npmjs.com/package/dotenv)**
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)**
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
- **[Multer](https://www.npmjs.com/package/multer)**
- **[PM2](https://pm2.keymetrics.io/)**
- **[Jest](https://jestjs.io/pt-BR/)**

## ✍ Author

<a href="https://github.com/laroyprado">
 <img alt="LaroyPrado" title="LaroyPrado" src="https://github.com/laroyprado.png" width="100px" />
 <br />
 <sub><strong>Laroy Prado</strong> 🚀</sub>
</a>

<br />

[![Linkedin Badge](https://img.shields.io/badge/-Laroy_Prado-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/laroyprado/)](https://www.linkedin.com/in/laroyprado/)
[![Gmail Badge](https://img.shields.io/badge/-laroyprado@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:laroyprado@gmail.com)](mailto:laroyprado@gmail.com)

---

## 📝 License

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações

Feito com 💜 por Laroy Prado 👋🏽 [Entre em contato!](https://www.linkedin.com/in/laroyprado/)
