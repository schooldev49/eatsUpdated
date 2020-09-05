var num = function (n) {
    return (n > 0) ? "+" + n : n;
};

var getAnswer = (psi, degrees, interval) => {
    var tempLoop = -5

    var correctTemp = 0
    var correctInterval = 0
    var correctPsi = 0

    var tempOptions = []
    var possible = false

    if (degrees < 0)
        tempOptions = [-5, -2]
    else
        tempOptions = [5, 25]

    for (let i = 0; i < tempOptions.length; i++) {
        var multiplier = degrees / tempOptions[i]
        var currentInterval = interval / multiplier
        var validMultiplier = currentInterval % 0.5 == 0 && currentInterval >= 5 && currentInterval <= 10

        if (validMultiplier) {
            possible = true
            correctTemp = num(degrees / multiplier)
            correctInterval = interval / multiplier
            correctPsi = num(psi / multiplier)
        }
    }

    if (!possible) {
        return "Impossible question!"
    } else {
        return `Temprature: ${correctTemp}<br>Interval: ${correctInterval}<br>Psi: ${correctPsi}`
    }
}

var textChange = () => {
    var temp = $('#temp').val()
    var pressure = $('#pressure').val()
    var interval = $('#interval').val()

    if (temp.length > 0 && pressure.length > 0 && interval.length > 0) {
        var answer = getAnswer(Number(pressure), Number(temp), Number(interval))

        $('#result').html(answer)
    }
}

$('document').ready(() => {
    document.getElementById("calc").onclick = textChange;
});