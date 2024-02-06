function calcularMedia(listaNumeros) {
  const soma = listaNumeros.reduce((acc, curr) => acc + curr, 0); // Calcula a soma dos números usando o método reduce

  const contagem = listaNumeros.length; // Obtém o número total de elementos na lista de números

  const media = soma / contagem; // Calcula a média dividindo a soma pelo número total de elementos

  return media; // Retorna a média calculada
}

console.log(calcularMedia([1, 2, 3, 4, 5, 6])); // Chama a função e imprime o resultado
