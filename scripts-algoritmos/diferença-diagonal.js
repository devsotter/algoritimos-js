function diagonalDifference(arr) {
    let n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;
    
    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][n - i - 1];
    }
    
    return Math.abs(primarySum - secondarySum);
}

// Exemplo de entrada
let arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

// Chamada da função e impressão do resultado
console.log(diagonalDifference(arr)); // Saída: 15
