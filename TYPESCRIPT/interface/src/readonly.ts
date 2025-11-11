interface ProdutoProps{
    readonly id: string;
    nome: string;
    descricao: string;
}

let produto1: ProdutoProps = {
    id: "1",
    nome: "Tenis Adidas",
    descricao: "Tirando onda"
}

console.log(produto1);