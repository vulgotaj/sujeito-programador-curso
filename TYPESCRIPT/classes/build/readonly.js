"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    id = "123";
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    mostraId() {
        console.log(`ID DO USUARIO ${this.nome}: ${this.id}`);
    }
}
const taj = new Pessoa("Felipe Taj", 20);
console.log(taj);
taj.mostraId();
//# sourceMappingURL=readonly.js.map