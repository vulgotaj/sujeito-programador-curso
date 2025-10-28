// Como deixar um valor por defaults ou deixar ele opcional.

function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void {
    let data = {email, senha, nome};

    console.log(data);
}

cadastro("teste@teste.com", "213456", "Felipe");

function cadastroLoja(nome: string, email: string, status = false): boolean {
    console.log(nome, status, email);

    return status;
}

cadastroLoja("Felipe", "testeteste", true);