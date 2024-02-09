function inverterFrase(frase) {
    // Dividir a frase em palavras
    const palavras = frase.split('');
    // Inverter a ordem das palavras
    const fraseInvertida = palavras.reverse().join(' ');
    return fraseInvertida;
}

console.log(inverterFrase('inverter isso')); // Saída: "isso inverter"
