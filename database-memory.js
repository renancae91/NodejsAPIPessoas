import { randomUUID } from 'node:crypto';

export class DataBaseMemory { 
    pessoas = new Map();

    list(){
        return Array.from(this.pessoas.entries()).map((pessoaArray) => {
            const id = pessoaArray[0]
            const data = pessoaArray[1]

            return {id, ...data}
        })
    }

    create(pessoa){
        const pessoaID = randomUUID();
        this.pessoas.set(pessoaID, pessoa);
    }

    update(id, pessoa) {
        this.pessoas.set(id, pessoa)
    }

    delete(id) {
        this.pessoas.delete(id)
    }
}