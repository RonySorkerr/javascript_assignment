function monthlySavings(arr, livingCost) {
    let totalTax = 0;
    let totalIncome = 0;
    // You have to write your code here
    for (const numb of arr) {
        totalIncome += numb;
        
        if (numb >= 3000) {
            const tax = numb * 20 / 100;
            totalTax += tax;
            console.log(tax);
        }
    }
    console.log('total income is : ' , totalIncome);

    const totalExpences = totalTax + livingCost;
    console.log('total expences : ' ,  totalExpences);

    



    return totalTax;
}

const array = [100, 2500, 3100];
const livingCost = 5400;
const result = monthlySavings(array, livingCost);
console.log(result);

// // if (numb > 3000) {
// //     const tax = 3000 * 20 / 100;
// //     console.log('tax is : ', tax);
// // }

// function monthlySavings(arr, livingCost) {
//     let totalTax = 0;
//     for (const numb of arr) {
//         if (numb > 3000) {
//             const taxPay = numb * 0.2; // 20% charge
//             totalTax += taxPay;
//         }
//     }
//     return totalTax;
// }

// const array = [100, 2500, 3000, 4000];
// const livingCost = 5400;
// const result = monthlySavings(array, livingCost);
// console.log(result); // Output: 800
