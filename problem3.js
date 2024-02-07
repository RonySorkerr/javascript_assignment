// take an array as input
// return an array only with numbers
// delete all the other elements of the array except number
// input array can have any type of value or data.

// function deleteInvalids(array) {
//     // You have to write your code here

//     if(typeof array === "number"){
//         console.log(array);
//     }
//     return deleteInvalids;
// }

// const array = deleteInvalids[1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// console.log(array);


function deleteInvalids(array) {

    const newArray = array.filter(function(array){
        return typeof array === "number";
    });
    console.log(newArray);

    // const numbArray = [];

    // console.log(array);
}

const array = [1 , null, undefined, 18, -19, 'NaN', "12", [1, 2], { ob: "lala" }];
console.log(deleteInvalids(array));
