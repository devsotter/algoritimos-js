function contarVogais(palavra) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let contadorVogais = 0;

  for (let i = 0; i < palavra.length; i++) {
    const caractere = palavra[i].toLowerCase(); // Converter para minúscula para considerar tanto maiúsculas quanto minúsculas

    if (vogais.includes(caractere)) {
      contadorVogais++;
    }
  }

  if (contadorVogais > 0) {
    return contadorVogais;
  } else {
    return 'não tem vogais';
  }
}

console.log(contarVogais('eu não sei mano'));
