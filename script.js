var counter = 0;
var data = [],
    diffs = [];

function onPress() {
    var d = new Date();
    data[counter] = d.getTime();
    counter++;
}

function onEnter() {
    for (var i = counter - 1; i >= 0; i--) {
        data[i] = data[i] - data[0];
    }
    counter = 0
    console.log(data);
    diffs=[]
    data=[]
}

function final() {
    function takeDiffs() {
        if (data.length == 0) {
            data = [0];
        }
        for (var i = counter - 1; i >= 1; i--) {
            diffs[i - 1] = data[i] - data[i - 1];
        }
        //console.log(standardDeviation(diffs));
        //console.log(diffs);
        return standardDeviation(diffs);
    }

    function standardDeviation(values) {
        var avg = average(values);

        var squareDiffs = values.map(function(value) {
            var diff = value - avg;
            var sqrDiff = diff * diff;
            return sqrDiff;
        });

        var avgSquareDiff = average(squareDiffs);

        var stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    }

    function average(data) {
        var sum = data.reduce(function(sum, value) {
            return sum + value;
        }, 0);

        var avg = sum / data.length;
        return avg;
    }

    z = takeDiffs();
    if (z < 10) {
        return false;
    } else {
        return true;
    }
}