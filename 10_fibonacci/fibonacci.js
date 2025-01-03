const fibonacci = function (limit) {
    const arr = [];
    let n = 0;

    if (limit == 0) {
        arr.push(0);
        return arr[0];
    } else if (limit < 0) {
        return "OOPS";
    } else {
        for (let i = 0; i < limit; i++) {
            if (arr.length < 2) {
                arr.push(1);
            } else {
                let val = arr[n] + arr[n + 1];
                arr.push(val);
                n++;
            }
        }
        return arr[arr.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
