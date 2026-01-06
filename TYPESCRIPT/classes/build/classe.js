"use strict";
// O que é uma classe?
Object.defineProperty(exports, "__esModule", { value: true });
class Loja {
    nome;
    categoria;
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("LOJA ABERTA!");
        }
        else {
            console.log("LOJA FECHADA!");
        }
    }
}
const redBurguer = new Loja("Red burger", "Lanches");
redBurguer.criarLoja();
const retornoLoja = redBurguer.emitirPedido(48, "Xtudo", "Crepe", "Pizza", "Coca gelada");
redBurguer.mudarStatus("ABERTO");
console.log(retornoLoja);
//# sourceMappingURL=classe.js.map