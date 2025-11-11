// interface TecnologiaProps {
//     id: string;
//     nome: string;
//     slug?: (string | number)[];
// }

// let tecnologia1: TecnologiaProps = {
//     id: "1",
//     nome: "PHP",
//     slug: ["php", "phpdozero", "php15"]
// }

interface TecnologiaProps {
    id: string;
    nome: string;
    descricao?: string;
}

interface NomeProps{
    tecnologia: TecnologiaProps[];
}

let frontend: NomeProps = {
    tecnologia: [
        {id: "12", nome: "ReactJS", descricao: "Biblioteca"},
        {id: "1", nome: "VueJS"},
    ]
}

console.log(frontend.tecnologia);