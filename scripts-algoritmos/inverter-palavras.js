function reverseWords(str) {
    // Divide a string em palavras
    const words = str.split(' ');
    
    // Inverte cada palavra
    const reversedWords = words.map(word => {
        // Converte a palavra em um array de caracteres, inverte o array e junta os caracteres novamente em uma string
        return word.split('').reverse().join('');
    });
    
    // Junta as palavras invertidas de volta em uma string
    return reversedWords.join(' ');
}

// Testando a função
console.log(reverseWords('inverter cada palavra da string')); // Deve imprimir: "retrevni adac palavra adas gnirts"
