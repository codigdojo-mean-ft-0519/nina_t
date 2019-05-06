// 1
console.log(hello);                                   
var hello = 'world';

// prediction:
// var hello;
//console.log(hello) //undefined
//hello = 'world';

// 2
//
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

//prediction:
// magnet
//Not correct

// 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// prediction:
// 'super cool'
//Correct!

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

//prediction:
//chicken
//gone INCORRECT!
//reality:
//chicken
//half-chicken

// 5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

var foo = "bar";
function magic(){
    foo = "hello world";
    console.log(foo);
    var foo;
}
magic();
console.log(foo);


//prediction:
//fish
//chicken
//undefined
//undefined

//INCORRECT
//error

// 6
var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    var genre = "r&b";
    genre = "rock"; //this overwrites it!
	console.log(genre);
	console.log(genre);
}
console.log(genre);

//disco
//rock
//rock
//disco



// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// dojo = "san jose";
// console.log(dojo);
// function learn() {
//var dojo 	
// dojo = "seattle";
// 	console.log(dojo);
// 	dojo = "burbank";
// 	console.log(dojo);
// }
// learn();
// 
// console.log(dojo);



// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

//prediction
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// 
// {Chicago, 65, hiring}
// closed for now
//FAILED due to reassignment
