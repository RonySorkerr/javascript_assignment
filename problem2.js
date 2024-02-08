// function checkName(name)

function checkName(name) {

    if (typeof name !== 'string') {
        return 'invalid';
    }

    const goodWords = name.charAt(name.length - 1).toLowerCase();

    const wordsList = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (wordsList.includes(goodWords)) {
        return "Good Name";
    }

    else {
        return "Bad Name";
    }

}






// passed: