// Tupla não possui no JS, apenas no TS.

let aluno: [string, number]; // Precisa seguir a mesma ordem passada nos parâmetros

aluno = ["aaa", 123];

aluno.push("Matheus", 4321);

console.log(aluno);