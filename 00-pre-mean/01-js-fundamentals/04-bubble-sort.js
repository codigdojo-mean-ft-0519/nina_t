function bubbleSort(arr){
    for (var i = 1; i < arr.length; i++){
        var counter = arr.length;
        while (counter > 0){
            for (var j = arr.length-1; j > 0 ; j--){
                if (arr[j-1] > arr[j]){
                    var temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                    console.log("The array is now: "+arr+".");
                }
                counter -=1;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([9,2,100,10,0,8,2]));
// end result should be: [0,2,2,8,9,10,100]
console.log(bubbleSort([4,1,5,90,43,2]));
// end result should be: 1, 2, 4, 5, 43, 90); 

