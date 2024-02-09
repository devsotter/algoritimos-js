function verificarPrimo(numero) {
    if (numero <= 1) {
        return 'não é primo'; // Números menores ou iguais a 1 não são considerados primos
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return 'não é primo'; // Se o número é divisível por algum número diferente de 1 e ele mesmo, não é primo
        }
    }
    
    return 'é primo'; // Se o número passou pelos testes anteriores, então é primo
}

console.log(verificarPrimo(5)); // Saída: é primo
