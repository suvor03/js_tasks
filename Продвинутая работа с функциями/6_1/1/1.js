// function sumTo(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i;
//     }
//     return result;
// }

function sumTo(n) {
    let result = 1;
    return (n == 1) ? result : (n + sumTo(n -1))
}

// function sumTo(n) {
//     return ((1 + n)*n)/2;
// }

alert( sumTo(100) ); // 5050