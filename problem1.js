function calculateMoney(ticketSale) {

    if (ticketSale <= 0 ) {
        return 'Your Pocket Is Full Of Air';
    }

    const totalSell = ticketSale * 120;

    console.log('Your total selling of today is : ', totalSell);

    const guardBill = 500;
    const luanchBill = 8 * 50;

    const totalExpences = guardBill + luanchBill;

    console.log('your total expences is : ' , totalExpences);

    const result = totalSell - totalExpences;

    console.log('Your total income is : ', result);

    return result;

}

// const ticketSale = calculateMoney(1055);
// console.log(ticketSale);