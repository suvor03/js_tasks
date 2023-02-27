let schedule = {
    name: undefined,
};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(object) {
    for (let i in object) {
        return false;
    }
    return true;
}