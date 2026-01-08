"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arroz = {
    nome: "Arroz Branco",
    preco: 1500,
    formatar(valor) {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        });
        return valorFormatado;
    }
};
console.log(arroz);
console.log(arroz.formatar(1500));
const feijao = {
    nome: "FEIJAO",
    preco: "2000"
};
console.log(feijao);
//# sourceMappingURL=interfaces.js.map