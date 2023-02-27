let i = 1;

outer: while(i) {
    i = prompt('Введите число больше 100: ', '');
    if (i > 100 || i == undefined) {
        break outer;
    }
}

alert('Счастливого дня!');