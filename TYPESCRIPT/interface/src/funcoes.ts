interface CursoProps{
    id: string;
    nome: string;
    preco: number;

    // Definir apenas a função e o que ela deve esperar e retornar

    promocao: (preco: number) => void;
}

// function mostraPromocao(preco: number): void {
//     console.log(`Promoçao no curso: R$ ${preco}`)
// }

const novoCurso: CursoProps = {
    id: "001",
    nome: "Felipe",
    preco: 500,
    promocao: (preco: number): void => {
        console.log("Preço Total: ", preco);
    }
}

console.log(novoCurso);
console.log(novoCurso.promocao(350));

// ------------------------------------------------------------------------------

interface SomaProps {
    (valor1: number, valor2: number): number;
}

let somaNumeros: SomaProps = (valor1: number, valor2: number): number => {
    console.log('Resultado:', valor1 + valor2);

    return valor1 + valor2;
}

const resultado = somaNumeros(155, 100);

console.log(resultado);