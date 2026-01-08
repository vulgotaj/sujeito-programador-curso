// Caso de uso de um JOGO

class Jogo {
    private servidor: string;
    private id: string = "1234";

    constructor(servidor: string){
        this.servidor = servidor;
    }

    // Método GET = Para pegar o valor ao invés de acessar diretamente a propriedade

    get getServidorIP(){
        console.log("== METODO GET ==");
        return this.servidor;
    }

    // Método SET = Passar ou alterar algum atributo

    set setServidorIP(novoIP: string){
        if(this.servidor === novoIP) {
            throw new Error("Novo IP deve ser diferente do IP antigo!")
        }
        
        this.servidor = novoIP;
    }
}


const GTA5 = new Jogo("192.168.5.10");

try {
    GTA5.setServidorIP = "192.168.5.10"
}catch(error: any) {
    console.log("ERROR: ", error.message);
}

console.log(GTA5.getServidorIP);
