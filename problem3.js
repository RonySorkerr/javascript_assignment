// function deleteInvalids(array)

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}



// passed : 