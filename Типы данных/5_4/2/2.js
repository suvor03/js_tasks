let styles = ["Джаз", "Блюз"];
alert(styles);

styles.push("Рок-н-ролл");
alert(styles);

changeMiddleValue(styles, "Классика");
alert(styles);

styles.shift();
alert(styles);

styles.unshift("Рэп", "Регги");
alert(styles);

function changeMiddleValue(arr, str) {
    let middleElement = Math.floor(arr.length / 2);

    arr[middleElement] = str;

    return arr;
}