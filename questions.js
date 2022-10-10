var num = function (n) {
    return (n > 0) ? "+" + n : n;
};

var temps = [-2, -5, 8, 40]
var rods = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]

var random = (a) => {
    return a[Math.floor(Math.random() * a.length)];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.ceil(Math.random() * (max - min + 1)) + min;
}

var trueFalse = () => {
    return (Math.random() >= 0.5)
}

var generateQuestion = (min, max) => {
    var temprature = random(temps);
    var control = random(rods);
    var pressure = trueFalse() ? (temprature === 40 ? 26 : 13) : 0

    var multiplier = getRandomInt(min, max);

    if (multiplier < max) {
        multiplier = multiplier + trueFalse() ? 0.5 : 0
    }


    return `Question:<br>${num(temprature * multiplier)}°C, ${num(pressure * multiplier)} PSI every ${control * multiplier} seconds.<br><br>Answer:<br><b>Temprature:</b> ${num(temprature)}<br><b>Interval:</b> ${control}<br><b>Psi:</b> ${num(pressure)}`

}

var textChange = () => {
    var min = $('#min').val()
    var max = $('#max').val()

    if (min.length > 0 && max.length > 0) {
        $('#result').html(generateQuestion(Number(min), Number(max)))
    }
}

$('document').ready(() => {
    document.getElementById("calc").onclick = textChange;
});
