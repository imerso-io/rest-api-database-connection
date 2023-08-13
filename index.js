const express = require('express');
const cors = require('cors');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();

const port = 3000;

app.listen(port, () =>
    console.log(`
🚀 API on-line: http://localhost:${port}
⭐️ Acesse o repositório do GitHub: https://github.com/inobrasil/restAPI-database-connection`)
);

app.use(
    express.json()
);

app.use(
    cors({
        origin: '*'
    })
);

app.get('/health', (req, res) => {
    res.status(204).end();
});

app.post('/signup', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    console.log(req.body);

    const users = await prisma.users.findMany({});

    const findEmail = users.some(
        users => users.email.toUpperCase() === email.toUpperCase()
    );

    if (findEmail) {
        res.status(404).json(`Já existe um usuário com o email "${email}"!`);
    } else {

        try {
            await prisma.users.create({
                data: {
                    name: name,
                    email: email
                }
            });
        } catch (error) {
            return console.error(error);
        }

        res.status(201).json('Usuário criado com sucesso!');
    }
});

app.get('/users', async (req, res) => {
    const users = await prisma.users.findMany({})

    if (users.length === 0) {
        res.status(404).json('Não há nenhum usuário cadastrado.');
    } else {
        res.status(200).json(users);
    }
});

app.get('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const users = await prisma.users.findMany({});
    const findId = users.some(
        users => users.id === id
    );

    if (findId) {
        const user = await prisma.users.findUnique({
            where: {
                id: id,
            }
        });

        res.send(user);
    } else {
        res.status(404).send(`O usuário que você está tentando procurar pelo ID "${id}" não existe!`);
    }
});

app.patch('/user/:id/', async (req, res) => {
    const id = parseInt(req.params.id);

    const users = await prisma.users.findMany({});

    const name = req.body.name;
    const email = req.body.email;

    if (users.length === 0) {
        res.status(404).json('Não há nenhum usuário cadastrado.');
    } else {

        if (!name && !email) {
            res.status(400).json('Nome e e-mail vázio, digite o que quer editar.');
        }

        if (name !== undefined && name !== null && name !== "") {
            await prisma.users.update({
                where: {
                    id: id
                },
                data: {
                    name: name
                }
            });
        }

        if (email !== undefined && email !== null && email !== "") {
            await prisma.users.update({
                where: {
                    id: id
                },
                data: {
                    email: email
                }
            });
        }

        return res.status(200).json('Usuário atualizado!');
    }
});

app.delete('/user/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    await prisma.users.delete({
        where: {
            id: id
        }
    });

    res.status(204).send('Usuário deletado com sucesso!');
});
