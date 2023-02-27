let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = salaries.John + salaries.Ann + salaries.Pete;

if (isObjEmpty(salaries)) {
    sum = 0;
}

alert(sum);
function isObjEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}

