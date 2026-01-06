// Herança > quando temos uma classe que herda de outra classe
// ClasseMÃE tem seus atributos e a ClasseFILHA vai ter todas os atributos da mãe além dos seus próprios


class Usuario{
    nome: string;
    email: string;

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

}

class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number){
        // Chamando o construtor da classe pai.
        super(nome, email);
        
        this.cargo = cargo;
        this.nivel = nivel;
    }
}

const usuario1 = new Admin("Felipe", "tal@gmail.com", "Dev Front", 2);

console.log(usuario1);

