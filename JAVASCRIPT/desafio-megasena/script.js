let senhaFinal = [];

function megaSena(num) {
    if (num < 6 || num > 9) {
        console.log('Este número não pode ser usado!');
        return [];
    } else {
        while(senhaFinal.length < num) {
            let numGen = Math.floor(Math.random() * 60) + 1;
            if(!senhaFinal.includes(numGen)) {
                senhaFinal.push(numGen)
            }
        }  
    }

    console.log(`Os números gerados no sorteio são: ${senhaFinal}`);
    return senhaFinal;
}

megaSena(6);
megaSena(8);

