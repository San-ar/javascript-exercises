const sumAll = function (lowerLimit, upperLimit) {

    let sum = 0;

    if (lowerLimit < 0 || !Number.isInteger(lowerLimit) || upperLimit < 0 || !Number.isInteger(upperLimit)) {
        return "ERROR"
    }

    if (lowerLimit > upperLimit) {
        for (let i = upperLimit; i <= lowerLimit; i++) {
            sum += i;

        }
    } else {
        for (let i = lowerLimit; i <= upperLimit; i++) {
            sum += i;

        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
