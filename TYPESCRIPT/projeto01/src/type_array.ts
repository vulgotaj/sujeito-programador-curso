let numeros: number[];

numeros = [1,2,3,4];
numeros.push(123214);

console.log(numeros);

// --------------------------------

let filmes: string[];

filmes = ["a", "b", "c", "d"];
filmes.push("asdasds");

console.log(filmes);

// --------------------------------

let array: Array<string>;
let array2: Array<number>;
let array3: Array<string | number>; // Array de string ou number
let array4: (string | number)[]; // Array de string ou number (segundo modo de fazer)