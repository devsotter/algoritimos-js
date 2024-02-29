function segundoMaior(n) {
    const ordem = n.sort((a, b) => a - b);
    return ordem[ordem.length - 2];
}

const array = [5, 2, 8, 1, 9];
console.log(segundoMaior(array)); // Saída: 8
