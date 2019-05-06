function coinChange(totalPennies){
    var change = {};
    if (totalPennies > 100){
        numDollars = totalPennies / 100;
        var dollars = Math.floor(numDollars);
        change.dollars = dollars;
        totalPennies = totalPennies % 100;
    }
    if (totalPennies > 25){
        numQuarters = totalPennies / 25;
        var quarters = Math.floor(numQuarters);
        change.quarters = quarters;
        totalPennies = totalPennies % 25;
    }
    if (totalPennies > 10){
        numDimes = totalPennies / 10;
        var dimes = Math.floor(numDimes);
        change.dimes = dimes;
        totalPennies = totalPennies % 10;
    }
    if (totalPennies > 5){
        numNickels = totalPennies / 5;
        var nickels = Math.floor(numNickels);
        change.nickels = nickels;
        totalPennies = totalPennies % 5;
    }
    else{
        var pennies = totalPennies;
        if (pennies > 0){
            change.pennies = pennies;
        }
    }
    return change;
}
