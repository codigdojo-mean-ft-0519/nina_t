function minMaxAvg(arr){
    var sum = arr[0];
    var max = arr[0];
    var min = arr[0];
    for (var i=1 ; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i]; 
        }
        sum += arr[i];
    }
    var avg = sum/arr.length;
    return "The minimum is "+min+", the maximum is "+max+", and the average is "+avg+".";
}

console.log(minMaxAvg([1,-2,9,4]));
