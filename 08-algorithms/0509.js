// Min of Sorted-Rotated
// You will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. Don’t use built-in functions (surprise!). Given the input array ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"] , you should return "Anna" . Remember, do not linearly iterate the array!

function minOfSorted(arr){
    //We'll start looking at the start, the middle, and the end of our array.
    //The reason why we're looking at three places is because we have a
     var startIdx = 0;
     var lastIdx = arr.length-1;
     var midIdx = Math.floor((startIdx + arr.length/2));
     while (lastIdx - startIdx > 1){
        if (arr[startIdx] > arr[midIdx]){
            lastIdx = midIdx - 1;
            console.log(`${lastIdx} is the last 111index and ${startIdx}`);
        } 
        else{
            startIdx = midIdx + 1;
                        console.log(`${lastIdx} is the last index and ${startIdx}`);
        }
        midIdx = Math.floor((lastIdx - startIdx)/2 + startIdx);
        console.log(`Our start value is ${arr[startIdx]}, our last value is ${arr[lastIdx]}, our midpoint value is ${arr[midIdx]}`);
        console.log(`Our start index is ${startIdx} and our last index is ${lastIdx}`);
    }
    console.log(`Kent's start value is ${arr[startIdx]}, the last value is ${arr[lastIdx]}, and his midpoint value is ${arr[midIdx]}`);
    console.log(`Our start index is ${startIdx}, our midpoint index is ${midIdx} and our last index is ${lastIdx}`);
    if (arr[lastIdx]<arr[startIdx]){
        return arr[lastIdx];
    }
    else{
        return arr[startIdx];
    }
}

// var rotatedArray = [45,50,66,71,75,99,150,2,3,7,10,14,23,34,36,42];

// var sortedArray = [2,3,7,10,14,23,34,36,42,45,50,66,71,75];
// console.log(minOfSorted(rotatedArray));
// console.log(`The length of the array is ${rotatedArray.length}`);
// // console.log(minOfSorted(sortedArray));

const sampleArr = ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"];
console.log(minOfSorted(sampleArr));

// function binarySearch(myArray, desiredVal){
//     //Create variables that define the start of our range
//     var startRange = 0;
//     var endRange = myArray.length-1;
//     var midPoint = Math.floor((endRange - startRange)/2 + startRange);
//     while (startRange < endRange){
//         if (desiredVal > myArray[midPoint]){
//             startRange = midPoint+1;
//         }
//         else if (desiredVal < myArray[midPoint]){
//             endRange = midPoint-1;
//         }
//         else{
//             return true;
//         }
//     midPoint = Math.floor((endRange - startRange)/2 + startRange);
//     }
//     return false;
// }

// // // console.log(binarySearch(exampleArray,14));
// // console.log(binarySearch(exampleArray,71));
// console.log(binarySearch(exampleArray,72));
// console.log(binarySearch(exampleArray,75));

// // function arrayFlatten(arr){
// //     console.log("Hi there!");

// // }

// // const sampleArr2 = [1,[2,3],4,[]];
// // console.log(arrayFlatten(sampleArr2));
// // //First result should be: 
// // //Second result should be: [1,3,4,2]

// // Code for checking whether or not a value is a string or a number
//     //  if (typeof(arr[0]) == 'string'){
//     //      console.log("yes I'm a string");
//     //  }
//     //  else if (typeof(arr[0]) == number){
//     //      console.log("yes I'm a number");
//     //  }

// function compareStrings(str1, str2){
//     if (str1 > str2){
//         console.log("the first string is bigger than the other");
//     }
//     else{
//         console.log("the second string is bigger than the other.");
//     }
// }
