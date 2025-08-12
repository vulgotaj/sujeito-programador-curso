function novoUsuario(info) {
    let data = {
        ...info,
        status: "ATIVO",
        inicio: "20/03/2023",
        codigo: "123123"
    };
    console.log(data);
}

novoUsuario({ nome: "Jose", sobrenome: "Silva", cargo: "Dev" });