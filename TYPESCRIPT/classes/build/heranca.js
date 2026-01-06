"use strict";
// Herança > quando temos uma classe que herda de outra classe
// ClasseMÃE tem seus atributos e a ClasseFILHA vai ter todas os atributos da mãe além dos seus próprios
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(nome, email, cargo, nivel) {
        // Chamando o construtor da classe pai.
        super(nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
}
const usuario1 = new Admin("Felipe", "tal@gmail.com", "Dev Front", 2);
console.log(usuario1);
//# sourceMappingURL=heranca.js.map