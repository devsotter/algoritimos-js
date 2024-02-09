function contarCaracteres(palavras) {
    const cincoCaracteres = [];

    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        if (palavra.length === 5) {
            cincoCaracteres.push(palavra);
        }
    }

    return cincoCaracteres;
}

console.log(contarCaracteres(['adriano', 'jorte', 'pedro']));
