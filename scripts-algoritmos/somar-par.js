function somarPares(array) {
    let soma = 0; // Inicializa a variável soma
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) { // Verifica se o número atual é par
        soma += array[i]; // Adiciona o número par à soma
      }
    }
    if (soma === 0) {
      return 'não tem pares'; // Se a soma for zero, não há números pares
    }
    return soma; // Retorna a soma dos números pares
  }
  
  console.log(somarPares([23, 34, 24, 13, 52])); // Saída: 114 (34 + 24 + 52)
  