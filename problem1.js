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
