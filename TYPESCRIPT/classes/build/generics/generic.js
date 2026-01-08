"use strict";
/*

Generics -v

Permite Criar estruturas que serão adaptáveis a vários tipos de dados,
ajudando a reaproveitar melhor nosso código e deixá-lo mais flexível

Podemos usar os generics em:

Funções | interfaces / type | classes

Alguns padrões a ser encontrados:

S => State;
T => Type;
K => Key;
V => Value;
E => Element;


*/
Object.defineProperty(exports, "__esModule", { value: true });
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(522);
console.log(repo1.getDados());
const repo2 = repositorio();
repo2.setDados("25");
//# sourceMappingURL=generic.js.map