"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const novoUsuario = {
    nome: "matheus",
    email: "felipe",
    status: true
};
console.log(novoUsuario);
function novoUser({ nome, email, status }) {
    console.log(nome);
}
novoUser({ email: "felipe@felipe.com", status: false });
// function novoUser( propriedades: CadastroProps ) 
//# sourceMappingURL=opcional.js.map