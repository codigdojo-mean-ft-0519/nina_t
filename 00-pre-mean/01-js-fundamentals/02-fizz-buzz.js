function setCharAt(str,index,chr){
    return str.substring(0, index) + chr + str.substring(index + 1);
}

function fizzBuzz(n){
    var str =""
    if (typeof n == "string" || n < 0){
        return "Parameter must be a positive number."
    }
    else{
        for (var i = 1; i <= n; i++){
            if (i % 3 === 0 && i % 5 === 0){
                // console.log("FizzBuzz");
                str += "FizzBuzz, ";
            }
            else if (i % 5 === 0){
                // console.log("Buzz");
                str += "Buzz, ";
            }
            else if (i % 3 === 0){
                // console.log("Fizz");
                str += "Fizz, ";
            }
            else{
                // console.log(i);
                str += ""+i+", ";
            }
        }
        return setCharAt(str,str.length-2,".");
    }
}
// Testing Bonus 1 (no strings, only integers)
// console.log(fizzBuzz("fifteen"));
// //Testing Bonus 2 (no negative numbers)
// console.log(fizzBuzz(-5));
// Normal Case:
console.log(fizzBuzz(15));