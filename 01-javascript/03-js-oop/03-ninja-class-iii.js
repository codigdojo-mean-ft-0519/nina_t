//Part 1
// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.

class Ninja{
    //Create a class of ninja
    constructor(name){
        //When constructing a new instance of the object, the only variable it will need is the name
        this.name = name;
        //the instances will also inherit the default values below
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name} and I'm a ninja!`);
    }
    showStats(){
        console.log(`Name:${this.name}, Health:${this.health}, Speed:${this.speed}, Strength:${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

// const ninja1 = new Ninja("Nina");
// console.log(ninja1.sayName());
// console.log(ninja1.showStats());

// //Part 2
// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// // example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"


class Sensei extends Ninja{
    //Sensei is going to inherit most of the same attributes as Ninja
    constructor(name){
        //It inherits the name from the Ninja class
        super(name);
        //...otherwise, it has unique attributes
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    //Sensei has a few methods unique to its class. 
    sayName(){
        console.log(`My name is ${this.name} and I'm a Sensei!`);
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`What one programmer can do in one month,
        two programmers can do in two months.`);
    }
    //Sensei has a few methods unique to its class.
    showStats(){
        console.log(`Name:${this.name}, Health:${this.health}, Speed:${this.speed}, Strength:${this.strength}, Wisdom:${this.wisdom}`);
    }
} 

const superSensei = new Sensei("Master Splinter");
superSensei.sayName();
// superSensei.drinkSake();
// // superSensei.speakWisdom();
// superSensei.showStats();