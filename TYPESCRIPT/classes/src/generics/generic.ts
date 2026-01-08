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

function repositorio<T extends string | number>() {
    let dados: T;

    function getDados() {
        return dados;
    }

    function setDados(novoDado: T) {
        dados = novoDado;
    }

    return{ getDados, setDados }

}

const repo1 = repositorio<string | number>();

repo1.setDados(522);

console.log(repo1.getDados());

const repo2 = repositorio<string>();

repo2.setDados("25");
