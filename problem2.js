// takes a string input
// check is the last char is A, y, i ,e ,o, w
// if these char is available at the end of name returt the result
// if condition matches return "Good Name"
// if condition does not match return "Bad Name"
// BONUS ** other data type will return 'invalid'

function checkName(name) {

    
    if(typeof name !== 'string'){
        return 'Invalid';
    }
    
    name = name.toLowerCase();
    console.log(typeof(name)); // * REMOVE LATER
    // return name;

    const lastChars = 'ayieouw';
    

}

const name = 'salmon'
console.log(checkName(name));

var pattern = ['aeiouyw'];
console.log(pattern);
console.log(typeof(pattern));