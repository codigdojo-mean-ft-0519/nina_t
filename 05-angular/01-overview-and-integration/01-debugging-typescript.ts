//1

// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Since myString is supposed to be a string type (as defined in line 1), you won't be able to set myString as a number. Only strings! 
// myString = "9";

// //2
// function sayHello(name: string){
//     return `Hello, ${name}!`;
//  }
//  // This is working great:
//  console.log(sayHello("Kermit"));
//  // Function "sayHello" only accepts a string as a parameter...
//  //So you should then turn 9 into a string by wrapping it in quotes.
//  console.log(sayHello("9"));
 
//  //3
//  function fullName(firstName: string, lastName: string, middleName?: string){
//     if (middleName !== undefined) {
//         return `${firstName} ${middleName} ${lastName}`;
//     }
//    return `${firstName} ${lastName}`;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// // What do I do if someone doesn't have a middle name?
// //If someone doesn't have a middle name, then that parameter should be made optional. (See the question mark on line 20).
// //Then, if someone provides a middle name, return the first, middle and last name.
// //But if someone doesn't provide a middle name, then we just print the first and last name. 
// console.log(fullName("Jimbo", "Jones"));

// //4
// interface Student {
//     firstName: string;
//     lastName: string;
//     belts: number;
//  }
//  function graduate(ninja: Student){
//     return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
//  }
//  const christine = {
//     firstName: "Christine",
//     lastName: "Yang",
//     belts: 2
//  }
//  const jay = {
//     firstName: "Jay",
//     lastName: "Patel",
//     //Silly jay - he had "belt" when he should have had "belts"!
//     belts: 4
//  }
//  // This seems to work fine:
//  console.log(graduate(christine));
//  // This one has problems:
//  console.log(graduate(jay));

// //5
// class Ninja {
//     fullName: string;
//     constructor(
//        public firstName: string,
//        public lastName: string){
//           this.fullName = `${firstName} ${lastName}`;
//        }
//     debug(){
//        console.log("Console.log() is my friend.")
//     }
//  }
//As seen above in lines 62-66, the Ninja class needs two strings as parameters (as well as a "new" keyword) in order to property create a new isntance of a SLNode class. So in order to make a new Ninja instance, shane needed to pass a first and a last name when invoking the class object.
//  const shane = new Ninja("Shane","mcShane");
//We'll then make a "turing" instance of the Ninja class by passing in his first and last name as parameters. 
//const turing = new Ninja("Alan","Turing");
//  function study(programmer: Ninja){
//     return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
//  }
//  //As seen in line 80, the study function requires a Ninja as a parameter. Since turing wasn't a "proper" Ninja before being declared as such on line 74, e couldn't use the study function. 
//  console.log(study(turing));
 
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => x * x;
// // Remove the squiggly brackets around the x's!
// console.log(square(4));
// // Put parantheses around the two parameters - don't let them be naked!
// var multiply = (x,y) => x * y;
// // There were so many actions in this annonymous function that it helps to wrap them up in squiggly brackets.
// var math = (x, y) => {
//    let sum = x + y;
//    let product = x * y;
//    let difference = Math.abs(x-y);
//    return [sum, product, difference];
// }
    
// class Elephant {
//     constructor(public age: number){}
//As the platform said, changing this to an arrow function...seems to work
//     birthday = age =>
//        this.age++;
//  }
//  const babar = new Elephant(8);
//  setTimeout(babar.birthday, 1000)
//  setTimeout(function(){
//     console.log(`Babar's age is ${babar.age}.`)
//     }, 2000)
//  // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 