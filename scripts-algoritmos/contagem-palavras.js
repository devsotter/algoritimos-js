function contarPalavras(frase) {
    const contagem = {}; // Inicialize um objeto vazio para armazenar as contagens de cada palavra

    const palavras = frase.split(' '); // Divida a frase em palavras

    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i].toLowerCase(); // Converta a palavra para minúsculas

        if (contagem[palavra]) {
            contagem[palavra]++; // Se a palavra já estiver no objeto de contagem, incremente sua contagem
        } else {
            contagem[palavra] = 1; // Se a palavra não estiver no objeto de contagem, inicialize sua contagem como 1
        }
    }

    return contagem; // Retorne o objeto de contagem completo
}

console.log(contarPalavras('vou testar essa'));
