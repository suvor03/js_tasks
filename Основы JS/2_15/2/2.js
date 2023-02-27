let age = prompt('Укажите свой возраст', '');
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAgeNew(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

alert(checkAge(age));
alert(checkAgeNew(age));