// Afirmando algum tipo.

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

mudaStatus = statusAtual as number;

mudaStatus = <number>statusAtual

let query: unknown = 'pizza';

let searchTerm: string = query as string;