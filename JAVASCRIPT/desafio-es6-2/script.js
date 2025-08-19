function numVerify (num) {
    let n = Number(num);

    if(n < 0) console.log("Seu número é negativo");
    if(n === 0) console.log("Seu número é 0!");
    if(n > 0) console.log("Seu número é positivo");

}

numVerify(0);

// ===============================================================================================

const numArray = [0, 1, 2, 3];

function include (numArray, numCheck) {
    if (numArray.includes(numCheck)) {
        console.log(`Sim, em seu array existe o número ${numCheck}`);
    } else {
        console.log("Número não encontrado");
    }
}

include(numArray, 0);

// ===============================================================================================

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

let resultado = products.filter((item) => {
    return (item.price === 20);    
});

console.log(resultado);

let resultado2 = products.filter((item) => {
    return (item.price < 8);
});

console.log(resultado2);