class Conta{
    // Private: Não pode ser acessado ou modificado fora da classe em que é criado!
    private limite: number = 450;

    private aumentarLimite(quantidade: number) {
        if(quantidade < 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: R$ ${this.limite}`)
        } else {
            console.log(`Limite reprovado!`);
        }
    }

    protected solicitarLimite(quantidade: number) {
        return this.aumentarLimite(quantidade);
    }

    solicitarLimiteApp(estaAutenticado: boolean, quantidade: number): void | boolean{
        if(estaAutenticado) {
            this.aumentarLimite(quantidade);
        } else {
            return false
        }
    }

}

class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(999)
    }
}

const fulano = new Conta();

fulano.solicitarLimiteApp(true, 750)

console.log(fulano)

console.log("---------------------------------------------------------------------------");

const joao = new BancoAfiliado();

joao.limiteAfiliado();

console.log(joao);

