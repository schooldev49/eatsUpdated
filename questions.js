var num = function (n) {
    return (n > 0) ? "+" + n : n;
};

var temps = [-5,-2, 8, 40]
var tempvals = [3,2,1,0]
var rods = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
var rodvals = ['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%']

var random = (a) => {
    const thepog = Math.floor(Math.random() * a.length)

    return [thepog,a[thepog]];
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
    var random1 = random(temps)
    var random2 = random(rods)
    var temprature = random1[1];
    var control = random2[1];
    var real1 = tempvals[random1[0]]
    var real2 = rodvals[random2[0]]
    var val1 = trueFalse()
    var pressure = val1 ? (temprature === 40 ? 26 : 13) : 0

    var multiplier = getRandomInt(min, max);

    if (multiplier < max) {
        multiplier = multiplier + trueFalse() ? 0.5 : 0
    }


    return `Question:<br>Every ${control * multiplier} seconds,  ${num(pressure * multiplier)} PSI, ${num(temprature * multiplier)}°C<br><br>Answer:<br><b>Temperature:</b> ${num(temprature)} (${real1})<br><b>Interval:</b> ${control} (${real2})<br><b>Psi:</b> ${num(pressure)} (${val1})`

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
