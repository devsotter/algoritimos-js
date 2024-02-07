
  console.log(calcularFatorial(3)); 

  function calcularFatorial(n) {
    if (n === 0 || n == 1){
      return 1;
    }
    else {
      return n * calcularFatorial(n - 1);
    }
  } 

