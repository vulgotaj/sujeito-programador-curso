// // let lista = ["Matheus","JOSE","MARIA"];

// // lista.map((item, index) => {
// //     console.log(`PASSANDO: ${item} | INDEX: ${index}`);
// // })

// let numeros = [5, 3, 2];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//     console.log(`${acumulador} - total até o momento`);
//     console.log(`${numero} - valor atual`);
//     console.log(`${indice} - indice atual`);
//     console.log(`${original} - array original`);
//     console.log("=============================================================")

//     return acumulador += numero;
// }, 0)

// console.log(total);

// let listagem = [5, 3, "Jose", 2, "Matheus"];

// let busca = listagem.find((item) => {
//     return item === 'Felipe'
// });

// console.log(busca)

let palavras = ['Matheus', 'Felipe', 'Bruno', 'Sujeito', 'Bia', 'Jose'];

let resultado = palavras.filter((item) => {
    return item.length <= 4;
})

console.log(resultado);