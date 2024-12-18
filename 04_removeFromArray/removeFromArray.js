const removeFromArray = function(text) {
    let startIndex;
    let endIndex;
    let newArray;
    
    for (let i = 0; i < text.length; i++){
        if (text[i] == "[") {
            startIndex = i;
        }
        if (text[i] == "]") {
            endIndex = i;
        }
    }

    for (let i = 0; i < endIndex; i++){
        newArray = newArray.push(text[i]);
    }
    // let requiredString = text.slice(startIndex + 1, endIndex);
    
    // let trimmedString = requiredString.replaceAll(/\s+/g, "");
    // console.log(trimmedString);
    
    // stringArray = trimmedString.split(",");
    // console.log(stringArray);
    
    // let numberArray = stringArray.map(Number);

    // for ()
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
