interface CadastraProps {
    nome?: string;
    email: string;
    status: boolean;
}

const novoUsuario: CadastraProps = {
    nome: "matheus",
    email: "felipe",
    status: true
}

console.log(novoUsuario);

function novoUser( { nome, email, status }: CadastraProps) {
    console.log(nome)
}

novoUser({ email: "felipe@felipe.com", status: false })

// function novoUser( propriedades: CadastroProps ) 

