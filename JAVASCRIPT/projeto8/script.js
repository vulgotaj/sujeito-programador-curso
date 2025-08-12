function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroGerado]);
}

sorteador(1, 4, 5, 10, 20, 25, 50, 42, 1231245);