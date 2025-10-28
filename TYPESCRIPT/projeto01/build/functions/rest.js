"use strict";
// function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number{
//     const total = venda1 + venda2 + venda3 + venda4;
Object.defineProperty(exports, "__esModule", { value: true });
//     console.log(total);
//     return total;
// }
// totalVendas(10, 30, 50, 10);
function totalVendas(...vendas) {
    const quantidadeVendas = vendas.length;
    console.log(`Você tem ${quantidadeVendas} vendas hoje!`);
}
totalVendas(10, 50, 25, 15, 90, 15, 30);
function mostraNomes(...nomes) {
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Natan", "Lucas", "Felipe", "Tajima");
//# sourceMappingURL=rest.js.map