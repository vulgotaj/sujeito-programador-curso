// O que é uma classe?

// Uma classe armazena as características e ações que esse objeto vai possuir.
// Ou seja, um conjunto de atributos e métodos.

type Status = "ABERTO" | "FECHADO";

class Loja {
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(): void {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {
        
        pedidos.map( (pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`)
        })

        return `Pedido na mesa: ${mesa}`;
    }

    mudarStatus(status: Status): void {
        if(status === "ABERTO") {
            console.log("LOJA ABERTA!");
        } else {
            console.log("LOJA FECHADA!");
        }
    }
}

const redBurguer = new Loja("Red burger", "Lanches");

redBurguer.criarLoja()

const retornoLoja = redBurguer.emitirPedido(48, "Xtudo", "Crepe", "Pizza", "Coca gelada")

redBurguer.mudarStatus("ABERTO");

console.log(retornoLoja);