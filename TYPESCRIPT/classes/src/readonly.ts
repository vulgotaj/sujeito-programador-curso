class Pessoa{
    readonly id: string = "123";
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade
    }

    mostraId() {
        console.log(`ID DO USUARIO ${this.nome}: ${this.id}`);
    }
}

const taj = new Pessoa("Felipe Taj", 20);

console.log(taj);

taj.mostraId();

