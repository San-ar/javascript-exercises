function isLetter(char){
    return  /[a-zA-Z0-9 ]/.test(char);
}

const palindromes = function (str) {
    const wholeArr = str.replace(/\s/g, "").split("");
    const filteredArr = wholeArr.filter(isLetter).map((item) => item.toUpperCase());
    const reversedArr = wholeArr.filter(isLetter).reverse().map((item) => item.toUpperCase());

    return JSON.stringify(filteredArr) === JSON.stringify(reversedArr);
};

// Do not edit below this line
module.exports = palindromes;
