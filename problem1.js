// Problem 1

function calculateMoney(ticketSale) {

    if (ticketSale < 0) {
        return 'Your Pocket Is Full Of Air';
    }

    const totalSell = ticketSale * 120;

    console.log('Your total selling of today is : ', totalSell);

    const guardBill = 500;
    const luanchBill = 8 * 50;

    const totalbill = guardBill + luanchBill;

    console.log('your total bill is : ', totalbill);

    const result = totalSell - totalbill;

    console.log('Your total income is : ', result);

    return result;

}



// problem 2 

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









// *****Problem-5****

function monthlySavings(arr, livingCost) {

    if (!Array.isArray(arr) && typeof livingCost !== "number") {
        return "Invalid input";
    }

    let totalTax = 0;
    let totalIncome = 0;
    
    for (const numb of arr) {
        totalIncome += numb;
        
        if (numb >= 3000) {
            const tax = numb * 20 / 100;
            totalTax += tax;
        }
    }
    
    console.log('total income is : ' , totalIncome);
    const totalExpensex = totalTax + livingCost;
    console.log('total expences : ' ,  totalExpensex);   

    const savings = totalIncome - totalExpensex;

    if(savings < 0){
        return 'earn more';
    }
    return savings;
}