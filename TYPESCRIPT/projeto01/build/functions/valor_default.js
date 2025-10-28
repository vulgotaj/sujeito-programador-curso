"use strict";
// Como deixar um valor por defaults ou deixar ele opcional.
Object.defineProperty(exports, "__esModule", { value: true });
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome };
    console.log(data);
}
cadastro("teste@teste.com", "213456", "Felipe");
function cadastroLoja(nome, email, status = false) {
    console.log(nome, status, email);
    return status;
}
cadastroLoja("Felipe", "testeteste", true);
//# sourceMappingURL=valor_default.js.map