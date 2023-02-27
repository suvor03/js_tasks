let x = prompt('Введите число: ');
let n = prompt('Введите натуральную степень: ');

function pow(x, n) {
    return x**n;
}

if (n >= 1) {
    alert(pow(x, n));
} else {
    alert('Вы указали неверную степень, попробуйте ещё раз!');
}