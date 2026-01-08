"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("AUTOMOVEL LIGADO COM SUCESSO");
    }
    desligar() {
        console.log("AUTOMOVEL DESLIGADO COM SUCESSO");
    }
}
class Especificacao {
    descricao;
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
const gol = new Carro("Gol 1.6");
gol.ligar();
gol.descricao = "Carrinho bala trem bala";
console.log(gol);
gol.desligar();
//# sourceMappingURL=mixin.js.map