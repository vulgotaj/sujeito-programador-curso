"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    // Private: Não pode ser acessado ou modificado fora da classe em que é criado!
    limite = 450;
    aumentarLimite(quantidade) {
        if (quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: R$ ${this.limite}`);
        }
        else {
            console.log(`Limite reprovado!`);
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(999);
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 750);
console.log(fulano);
console.log("---------------------------------------------------------------------------");
const joao = new BancoAfiliado();
joao.limiteAfiliado();
console.log(joao);
//# sourceMappingURL=private.js.map