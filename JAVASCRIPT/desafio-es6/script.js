// let lista = ['Telefone', 'Computador', 'Mouse', 'Teclado'];
// console.log(lista);

// let excluirMouse = lista.map((mouse) => {
//     if(mouse === 'Mouse') {
//         let posicaoMouse = lista.indexOf(mouse);
//         lista.splice(posicaoMouse, 1);
//     }
// })

// console.log(lista);

// const find = lista.find((item) => {
//     return item === 'Computador';
// });

// if(find) {
//     console.log('Este item foi encontrado!');
// } else {
//     console.log('Este item não foi encontrado');
// }

// lista.splice(1, 1);
// console.log(lista);

// let lista = [1, 3, 5, 7, 0, 9];
// lista.sort();
// console.log(lista);
// lista.shift();
// lista.reverse();
// console.log(lista);

let hoje = new Date();

const dia = hoje.getDate();
const diaSemana = hoje.getDay();
const mes = `0${hoje.getMonth() + 1}`;
const ano = hoje.getFullYear();

console.log(`${dia}/${mes}/${ano}`);