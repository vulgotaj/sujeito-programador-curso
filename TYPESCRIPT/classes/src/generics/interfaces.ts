interface NovoProduto<V extends number> {
    nome: string;
    preco: V;

    formatar(valor: V): string;
}

const arroz: NovoProduto<number> = {
    nome: "Arroz Branco",
    preco: 1500,

    formatar(valor: number): string {
        let valorFormatado = valor.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        })
        return valorFormatado;
    }
}

console.log(arroz);
console.log(arroz.formatar(1500));

type NovoProduto2<V> = {
    nome: string;
    preco: V;
}

const feijao: NovoProduto2<number | string> = {
    nome: "FEIJAO",
    preco: "2000"
}

console.log(feijao);