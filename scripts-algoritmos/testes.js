function gerarFibonacci(n) {
    var sequencia = [0, 1];
  
    for (var i = 2; i < n; i++) {
      var proximoNumero = sequencia[i - 1] + sequencia[i - 2];
      sequencia.push(proximoNumero);
    }
  
    console.log("Sequência de Fibonacci com os primeiros " + n + " números:");
    console.log(sequencia.join(', '));
  }
  
  gerarFibonacci(8);s
  