"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function mostraPromocao(preco: number): void {
//     console.log(`Promoçao no curso: R$ ${preco}`)
// }
const novoCurso = {
    id: "001",
    nome: "Felipe",
    preco: 500,
    promocao: (preco) => {
        console.log("Preço Total: ", preco);
    }
};
console.log(novoCurso);
console.log(novoCurso.promocao(350));
let somaNumeros = (valor1, valor2) => {
    console.log('Resultado:', valor1 + valor2);
    return valor1 + valor2;
};
const resultado = somaNumeros(155, 100);
console.log(resultado);
//# sourceMappingURL=funcoes.js.map