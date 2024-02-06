
function contarNumerosPares(lista) {
    let contadorPares = 0;
  
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] % 2 === 0) { // Verifica se o número é par
        contadorPares++; // Incrementa o contador se o número for par
      }
    }
  
    return contadorPares;
  }
  
  const numeros = [0, 22, 34, 42];
  console.log("O número de números pares é:", contarNumerosPares(numeros)); // Deve imprimir "O número de números pares é: 4"
  

