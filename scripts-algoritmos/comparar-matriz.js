function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aliceScore++;
        } else if (a[i] < b[i]) {
            bobScore++;
        }
    }
    
    return [aliceScore, bobScore];
}

// Testando a função com os exemplos fornecidos
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));  // Saída: [1, 1]
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));  // Saída: [2, 1]
