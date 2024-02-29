function verificarOrdenados(n) {

    for(i = 0; i < n.length; i++){
        const crescente = n.sort((a,b) => a - b);
        const decrescente = n.sort((a,b) => a - b);

    
if( n === crescente || n === decrescente) {

    return true 
}
else {
    return false
}
     
    }

  
}

console.log(verificarOrdenados([1,5,3,4,5,38]))