//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {
   map: function(arr, callback) {
    // Underscore.js notes: Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
     //Nina notes: Takes in an array and then does something with each value in the array.
     //Loop through each value in the array...
     for (let i = 0; i < arr.length; i++){
         //Do something to the value at each index in the array (i.e. what's happening with callback(arr[i]) and then reassign the value of arr[i] to be that new, transformed value
         arr[i] = callback(arr[i]);
     }
   },
   reduce: function(arr, callback) { 
    // Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
     var sum = 0;
     for (let i = 0; i < arr.length; i++){
         sum += arr[i];
     }
   },
   find: function(arr,callback) {   
    //  Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. predicate is transformed through iteratee to facilitate shorthand syntaxes.
    //Nine notes: look through all of the values in the array...
    for (let i = 0; i < arr.length; i++){
        //If the value passed through the callback function is true; 
        if (callback(arr[i])){
            //Return that value. 
            return arr[i];
        }
    }
    //If it gets through the loop and doesn't find something...don't return anything
   },
   filter: function(arr, callback) { 
    // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate). predicate is transformed through iteratee to facilitate shorthand syntaxes.
    const newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
   },
   reject: function(arr, callback) { 
    // Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter. predicate is transformed through iteratee to facilitate shorthand syntaxes.
    const rejectArr = [];
    for (let i = 0; i < arr.length; i++){
        if (!callback(arr[i])){
            rejectArr.push(arr[i]);
        }
    }
    return rejectArr;
   }
 }
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].
