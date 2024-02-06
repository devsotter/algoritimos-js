function encontrarMaiorNumero(numeros) {
    let maior = numeros[0]; // Suponha que o primeiro número é o maior inicialmente
    
    // Itera sobre o array para encontrar o maior número
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    
    return maior;
  }
  
  // Teste da função
  const arrayDeNumeros = [10, 5, 25, 8, 55];
  console.log("O maior número é:", encontrarMaiorNumero(arrayDeNumeros)); // Deve imprimir "O maior número é: 25"
  