import { sql } from './db.js';

sql`
    CREATE TABLE pessoas (
        id TEXT PRIMARY KEY,
        nome TEXT,
        idade INTEGER,
        nacionalidade TEXT 
    )
`.then( () => {
    console.log("tabela criada!")
} )