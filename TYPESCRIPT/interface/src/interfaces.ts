// let loja: object;

// loja = {
//     nome: 'BK',
//     endereco: 'Rua Francisco Silva',
//     status: true,
// }

interface LojaProps {
    nome: string;
    endereco: string;
    status: boolean;
    produtoPromocao: string;
}

const BurguerK: LojaProps = {
    nome: 'BK',
    endereco: 'Rua Francisco',
    status: true,
    produtoPromocao: 'asdasd'
}

console.log(BurguerK);

function novaLoja({nome, endereco, status}: LojaProps): void {
    console.log(nome);
    console.log(endereco);
    console.log(status);
}
