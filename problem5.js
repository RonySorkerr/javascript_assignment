// function monthlySavings(arr , livingCost)
function monthlySavings(arr , livingCost) {

    if (!Array.isArray(arr) && typeof livingCost !== "number") {
        return "invalid input";
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
    
    const totalExpences = totalTax + livingCost;

    const savings = totalIncome - totalExpences;

    if(savings < 0){
        return "earn more";
    }
    return savings;
}


