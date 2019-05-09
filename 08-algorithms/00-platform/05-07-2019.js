function balanceIndex(myArray){
    if (myArray.length % 2 == 1){
        var center = findCenterOddArray(myArray);
        var sumL = myArray[i];
        var sumR = myArray[myArray.length-1];
        for (var i = 1; i < myArray[center]; i++){
            sumL += myArray[i];
        }
        for (var j = myArray[myArray.length-1]; j > myArray[center]; j--){
            sumR += myArray[j];
        }
        if (sumL == sumR){
            return 
        }
    }
    else{
        return -1;
    }
}

function findCenterOddArray(myArray){
    var center = Math.ceiling(myArray.length/2);
    return center;
}
