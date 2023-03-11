function factorial(n) {
    let result = 1;

    return (n == 1) ? result : (n * factorial(n - 1));
}

alert(factorial(5));