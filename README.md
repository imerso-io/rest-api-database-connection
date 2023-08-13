# 🇧🇷
# Conectando a API Rest com o Banco de Dados 🗃️

Siga os requisitos para que a aplicação rode em sua máquina:

### 1. Instale a biblioteca NodeJS em: <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a>
### 2. Na pasta "<i>restAPI-database-connection</i>" abra um terminal (CLI) e instale os pacotes necessários:
###  - ``npm i express``
###  - ``npm i cors``
### 3. Baixe <a href="https://dbeaver.io/download/">DBeaver</a> ou outro sistema para gerenciar o banco de dados, e confira se sua tabela está recebendo dados.
### - Saiba como criar o banco de dados pelo DBeaver clicando <a href="./CreateDatabase.md">aqui</a>.
### 4. Instale o Docker (<a href="https://docs.docker.com/get-docker/">https://docs.docker.com/</a>)
### 5. No terminal, verifique a versão do seu Docker digitando: ``docker -v``
### 6. Modificar o arquivo chamado: <i>docker-compose.yml</i> colocando uma senha (ou se preferir pode manter a mesma configuração)
### 7. Com uma conta criada no Docker, vá no terminal e digite: ``docker compose up`` 
### 8. Instale e inicialize as bibliotecas necessárias para o Prisma:
###  - ``npm install prisma --save-dev``
###  - ``npx prisma``
###  - ``npx prisma init``
### 9. Vá na pasta <i>prisma</i>, e em seguida acesse o arquivo <i>schema.prisma</i>
### 10. Crie seu model a partir desse código:
```prisma
// Setup
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Model
model users {
  id        Int      @id @default(autoincrement())
  name      String   @db.VarChar(80)
  email     String   @db.VarChar(100) @unique
}
```
### 11. Vá no arquivo ``.env`` e altere a URL alterando seus dados como no exemplo a seguir:
### - DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
### - Em nosso caso ficaria: ``DATABASE_URL="postgresql://postgres:restAPI-ino@localhost:5433/users?schema=public"`` (Sendo o USER o nome que você define no DBeaver).
### 12. Crie seu próprio <b>migrate</b> dessa maneira (O migrate vai criar seu model como uma tabela no PostgreSQL automaticamente, entenda mais sobre clicando <a href="https://www.prisma.io/docs/concepts/components/prisma-migrate">aqui</a>.):
###  - ``npx prisma migrate dev --nome-do-seu-commit init``
### 13. Realize os seguintes comandos:
###  - ``npx prisma db push``
###  - ``npx prisma db pull``

# Sobre Métodos HTTP e RestAPI
<a href="https://github.com/inobrasil/restAPI-nodeJS/blob/main/README.md">Saiba mais</a>.

# DOCS
### <a href="https://www.prisma.io/docs/getting-started/quickstart">Prisma ORM</a>
### <a href="https://docs.docker.com/get-started/">Docker</a>
### <a href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql">PostgreSQL + Prisma</a>
### <a href="https://www.postgresql.org">PostgreSQL</a>
### <a href="https://expressjs.com/en/starter/installing.html">ExpressJS</a>
### <a href="https://nodejs.org/pt-br/docs">NodeJS</a>
### <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS">Cors</a>
### <a href="https://dbeaver.io/about/">DBeaver</a>

# 🇺🇸/🏴󠁧󠁢󠁥󠁮󠁧󠁿
# Connecting Rest API with PostgreSQL database 🗃️

Follow the requirements for the application to run on your machine:

### 1. Install the NodeJS library from: <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a>
### 2. in the folder "<i>restAPI-database-connection</i>" open a terminal (CLI) and install the necessary packages:
###  - ``npm i express``
###  - ``npm i cors``
### 3. Download <a href="https://dbeaver.io/download/">DBeaver</a> or another system to manage the database, and check if your table is receiving data
### - Learn how to create the database by DBeaver by clicking <a href="./CreateDatabase.md">here</a>.
### 4. Install Docker (<a href="https://docs.docker.com/get-docker/">https://docs.docker.com/</a>)
### 5. In the terminal (CLI), check your Docker version by typing:: ``docker -v``
### 6. Modify the file called: <i>docker-compose.yml</i> putting a password (or if you prefer you can keep the same configuration)
### 7. With an account created in Docker, go to the terminal and type: ``docker compose up``
### 8. Install and initialize the necessary libraries for Prisma:
###  - ``npm install prisma --save-dev``
###  - ``npx prisma``
###  - ``npx prisma init``
### 9. Go to the <i>prisma</i> folder, and then access the <i>schema.prisma</i> file.
### 10. Create your model from this code:
```prisma
// Setup
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Model
model users {
  id        Int      @id @default(autoincrement())
  name      String   @db.VarChar(80)
  email     String   @db.VarChar(100) @unique
}
```
### 11. Go to the ``.env`` file and change the URL by changing its data as in the following example:
### - DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
### - In our case it would be: ``DATABASE_URL="postgresql://postgres:restAPI-ino@localhost:5433/users?schema=public"`` (USER being the name you define in DBeaver).
### 12. Create your own <b><a href="https://www.prisma.io/docs/concepts/components/prisma-migrate">migrate</a></b> like this:
###  - ``npx prisma migrate dev --your-commit-name init``
### 13. Run the following commands:
###  - ``npx prisma db push``
###  - ``npx prisma db pull``

# Tecnologias usadas
