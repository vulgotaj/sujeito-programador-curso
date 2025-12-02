type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`)
}

function logUsuario(uuid: Uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`)
}

// acessar(123, "Felipe")
// acessar("555", "Brito")
// logUsuario("12345");

type Moedas = "BRL" | "EUR" | "USD"

function comprarItem(moeda: Moedas) {
    console.log("Comprando com a moeda: ", moeda)
}

comprarItem("BL"); 