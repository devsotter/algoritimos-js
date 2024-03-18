let produto = {
    preco: 'R$ 20',
    nome: 'chapeu',
    unidades: 10,
  }
  
  const precoLimpo = +produto.preco.replace('R$', '');
  
  function valorTotal(valor) {
    const troco = valor - precoLimpo;
    const faltaPagar = Math.abs(troco);
   
  
    if(valor < precoLimpo) {
      return `Faltam pagar R$ ${faltaPagar}`
    }
    if(valor > precoLimpo) {
      return `O troco é de R$ ${troco}`
    }
    if(valor == precoLimpo) {
      return 'Compra aprovada'
    }
  
  
  
  }
    console.log(valorTotal(12));
    
  
 //orgulhoso de mim, primeiro codigo que eu fiz inteiramente sozinho.
   