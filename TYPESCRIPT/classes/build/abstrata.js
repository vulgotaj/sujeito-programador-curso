"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log("=======================================================");
        console.log(`Nova conta P.Fisica criada com sucesso ${dados.nome}`);
        console.log("=======================================================");
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log("=======================================================");
        console.log(`Nova conta P.Juridica criada com sucesso ${dados.nome}`);
        console.log("=======================================================");
        return true;
    }
}
const felipe = new PessoaFisica();
felipe.abrirConta({
    nome: "Felipe Brito",
    numero: "305",
    endereco: "Rua Frachesco Guedo"
});
const sujeitotaj = new PessoaJuridica();
sujeitotaj.abrirConta({
    nome: "Sujeito Taj",
    numero: "308",
    endereco: "Arauruar"
});
//# sourceMappingURL=abstrata.js.map