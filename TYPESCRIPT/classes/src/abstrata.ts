type DadosConta = {
    nome: string;
    numero: string;
    endereco: string;
}

abstract class ContaBanco {
    abstract abrirConta(dados: DadosConta): boolean

}

class PessoaFisica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {

        console.log("=======================================================")
        console.log(`Nova conta P.Fisica criada com sucesso ${dados.nome}`)
        console.log("=======================================================")

        return true;
    }
}

class PessoaJuridica extends ContaBanco {
    abrirConta(dados: DadosConta): boolean {

        console.log("=======================================================")
        console.log(`Nova conta P.Juridica criada com sucesso ${dados.nome}`)
        console.log("=======================================================")

        return true;
    }
}

const felipe = new PessoaFisica();

felipe.abrirConta({
    nome: "Felipe Brito",
    numero: "305",
    endereco: "Rua Frachesco Guedo"
})

const sujeitotaj = new PessoaJuridica();

sujeitotaj.abrirConta({
    nome: "Sujeito Taj",
    numero: "308",
    endereco: "Arauruar"
})
