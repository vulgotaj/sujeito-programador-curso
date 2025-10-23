// Quando você não sabe o tipo que irá receber a variável.

let total: unknown;

let idPedido: any = 123;
let totalPedido: unknown = 15;

let entregador: number = idPedido;

// Valor do tipo unknown só pode ser atribuido ao tipo unknown ou any
let totalEntrega: any = totalPedido;

console.log(totalEntrega)