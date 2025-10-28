function login(username: string): boolean | string {
    let message = 'Bem vindo ' + username;

    console.log(message);

    return username
}

const usernameLogin = login("matheus");

console.log(usernameLogin)

let n1: number = 10;
let n2: number = 25;

function soma(valor1: number, valor2: number): number {

    let soma = valor1 + valor2

    return soma

}

console.log(soma(n1, n2));