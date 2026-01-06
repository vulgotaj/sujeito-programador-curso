type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info = {
    id: 1234,
    nome: "Placa de Vídeo",
    descricao: "Placa RTX 4060"
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: "hardware",
    quantidadeProduto: 2
}

type ProdutoInfo = Info & Categoria // ProdutoInfo é a intercessão (UNIÃO) entre Info e Categoria

const novoProduto: ProdutoInfo = {
    id: 1235,
    nome: "Teclado Gamer",
    descricao: "Teclado USB",
    slug: "Periférico",
    quantidadeProduto: 240
}