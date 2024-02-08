// function checkName(name)

function checkName(name) {

    if (typeof name !== 'string') {
        return 'invalid';
    }

    const words = name.charAt(name.length - 1).toLowerCase();

    // console.log("Last word:", words);

    const wordList = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (wordList.includes(words)) {
        return "Good Name";
    }

    else {
        return "Bad Name";
    }

}


// passed: