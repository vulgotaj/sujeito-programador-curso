"use strict";
// Caso de uso de um JOGO
Object.defineProperty(exports, "__esModule", { value: true });
class Jogo {
    servidor;
    id = "1234";
    constructor(servidor) {
        this.servidor = servidor;
    }
    // Método GET = Para pegar o valor ao invés de acessar diretamente a propriedade
    get getServidorIP() {
        console.log("== METODO GET ==");
        return this.servidor;
    }
    // Método SET = Passar ou alterar algum atributo
    set setServidorIP(novoIP) {
        if (this.servidor === novoIP) {
            throw new Error("Novo IP deve ser diferente do IP antigo!");
        }
        this.servidor = novoIP;
    }
}
const GTA5 = new Jogo("192.168.5.10");
try {
    GTA5.setServidorIP = "192.168.5.10";
}
catch (error) {
    console.log("ERROR: ", error.message);
}
console.log(GTA5.getServidorIP);
//# sourceMappingURL=get_set.js.map