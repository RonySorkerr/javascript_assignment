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

