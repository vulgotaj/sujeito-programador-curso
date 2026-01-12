/*
    >> DECORATORS <<

    Class
    Propriedade
    Métodos
    Parametros (POUCO USADO)
    GETTERS/SETTERS (POUCO USADO)
*/

// target = receber o construtor da classe.


// function logInfo(target: any) {
//     console.log(target, "SISTEMA ONLINE");
// }



// >>> Padrão factory (Fabrica) | Função que retorna a criação do decorator.

// function logInfo(mensagem: string) {
//     return (target: any) => {
//         console.log(`${mensagem}, ${target}`)
//     }
// }

// @logInfo("Servidor Rodando!")
// class Sistema {

// }

// ==================================================== PRATICANDO ======================================================

function setIpServidor(novoIp: string) {
    return (target: any) => {
        return class extends target {
            ip = novoIp;
        }
    }
}

@setIpServidor("192.168.12.24")
class Servidor {

}

const servidor1 = new Servidor();

console.log(servidor1);