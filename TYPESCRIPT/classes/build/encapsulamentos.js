"use strict";
// Herança > quando temos uma classe que herda de outra classe
// ClasseMÃE tem seus atributos e a ClasseFILHA vai ter todas os atributos da mãe além dos seus próprios
Object.defineProperty(exports, "__esModule", { value: true });
/*
    4 Modificadores: Public, Private, Protected, Readonly

    Public: Posso ver e modificar em qualquer lugar do código que eu tiver (Toda propriedade é publica
     se não houver nada definido prefixamente)

    Protected: Atributos e métodos protegidos podem ser acessados ou alterados por meio da classe em
     que foram criados e por meio das classes que forem filhas (que extende a classe pai)

    Private: Podem ser acessados ou alterados apenas por meio da classe em que foram criados, ou seja,
     ele não pode ser acessado ou modificado fora da classe em que foi criado

    Readonly: Podemos apenas ler e ver esse atributo, porém não podemos alterar ele.
*/
class Usuario {
    id; // Podemos chamar na classe pai ou classes que extendem a classe Usuario
    nome;
    email;
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    cargo;
    nivel;
    constructor(id, nome, email, cargo, nivel) {
        // Chamando o construtor da classe pai.
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("Alterando cargo para ", cargo);
        console.log("ID DO USUARIO: ", this.id);
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario1 = new Admin(1234, "Felipe", "tal@gmail.com", "Dev Front", 2);
console.log(usuario1);
usuario1.acessarAdmin();
//# sourceMappingURL=encapsulamentos.js.map