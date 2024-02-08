
function calculateMoney(ticketSale) {

    if (ticketSale < 0) {
        return 'Invalid Number';
    }

    const totalSell = ticketSale * 120;


    const guardBill = 500;
    const luanchBill = 8 * 50;

    const totalbill = guardBill + luanchBill;


    const result = totalSell - totalbill;


    return result;

}



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



function password(obj) {

    if (!obj || typeof obj !== 'object' || !('name' in obj) || !('birthYear' in obj) || !('siteName' in obj)) {
        return 'invalid';
    }

    const { name, birthYear, siteName } = obj;
    const nSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    const password = `${nSiteName}#${name}@${birthYear}`;
    if (birthYear.toString().length < 4) {
        return "invalid";
    }
    return password;
}



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