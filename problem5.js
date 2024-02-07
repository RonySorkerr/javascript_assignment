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

// const array = [ 1000 , 2000 , 3000 ];
// const livingCost = 5400;
// const result = monthlySavings(array, livingCost);
// console.log(result);
