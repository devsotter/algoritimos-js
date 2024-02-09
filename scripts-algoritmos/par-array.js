
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
  

//mesmo codigo, mas criando uma lista de de pares em um array

function listaNumeros(numeros) {
  const pares = [];

  for (let i = 0; i < numeros.length; i++) {
      if(numeros[i] % 2 === 0) {
       pares.push(numeros[i]);

      }   
  }

  
  if ( pares.length === 0){
      return 'não tem pares'
     }

  return pares
}

console.log(listaNumeros([32,3,4,1]));