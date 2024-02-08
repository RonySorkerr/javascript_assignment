function checkName(name) {
    if (typeof name !== 'string' || name.length === 0) {
        return 'invalid';
    }

    const lastChar = name.charAt(name.length - 1).toLowerCase();

    const goodCharacters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (goodCharacters.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

const input = 'salama';
console.log(checkName(input));