import { fastify } from 'fastify';
import { DataBasePostgres } from './database-postgres.js';

const server = fastify();
const dataBasePostgres = new DataBasePostgres();


server.get('/pessoas', async () => {
    return await dataBasePostgres.list();
})

server.post('/pessoas', async (req, replay) => {
   const {nome, idade, nacionalidade} = req.body
    await dataBasePostgres.create({
    nome,
    idade,
    nacionalidade
   });
   replay.status(201).send();
})

server.put('/pessoas/:id', async (req, reply) => {
    const pessoaId = req.params.id
    const {nome, idade, nacionalidade} = req.body
    await dataBasePostgres.update(pessoaId, {
        nome,
        idade,
        nacionalidade
    })
    return reply.status(204).send()
    
})

server.delete('/pessoas/:id', async (req, reply) => {
    const pessoaId = req.params.id
    await dataBasePostgres.delete(pessoaId)

    return reply.status(204).send()
})


server.listen({
    port:3333
})