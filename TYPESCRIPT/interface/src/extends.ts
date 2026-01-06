interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4dead: JogoProps = {
    id: "123",
    nome: "Left 4 Dead 2",
    descricao: "jogo de ação/zumbis",
    plataforma: ["PS5", "PC"]
}

interface DLC extends JogoProps {
    jogoOriginal: JogoProps;
    novoConteudo: string[];
}

const left4DeadDLC: DLC = {
    id: "90",
    nome: "Left 4 Dead - New Maps",
    descricao: "4 novos mapas para jogar",
    plataforma: ["PS5", "PC"],
    novoConteudo: ["Modo Coop"],
    jogoOriginal: left4dead
}

console.log(left4dead);
console.log(left4DeadDLC);

