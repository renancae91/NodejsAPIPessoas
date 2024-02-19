import { randomUUID } from 'node:crypto';
import { sql } from './db.js';

export class DataBasePostgres { 
    pessoas = new Map();

    async list(){
        return await sql`select * from pessoas`
    }

    async create(pessoa){
        const pessoaID = randomUUID()
        const { nome, idade, nacionalidade } = pessoa
        await sql`insert into pessoas (id, nome, idade, nacionalidade) VALUES (${pessoaID}, ${nome}, ${idade}, ${nacionalidade} )` 
    }

    async update(id, pessoa) {
        const { nome, idade, nacionalidade } = pessoa
        await sql`update pessoas set nome = ${nome}, idade = ${idade}, nacionalidade = ${nacionalidade} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete from pessoas WHERE id = ${id}`
    }
}