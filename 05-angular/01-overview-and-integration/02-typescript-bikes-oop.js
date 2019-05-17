var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        (this.price = price), (this.max_speed = max_speed);
        this.miles = 0;
    }
    Bike.prototype.displayInfo = function () {
        console.log("Price: " + this.price + ", Maximum speed: " + this.max_speed + ", Total mileage: " + this.miles);
        return this;
    };
    Bike.prototype.ride = function () {
        console.log('Riding!');
        this.miles += 10;
        console.log("We just rode 10 miles! This bike has traveled a total of " + this.miles + " miles.");
        return this;
    };
    Bike.prototype.reverse = function () {
        console.log('Reversing!');
        if (this.miles > 5) {
            this.miles -= 5;
            console.log("We just reversed 5 miles. This bike is now " + this.miles + " miles away from its starting point.");
            return this;
        }
        else if (this.miles > 0) {
            var remaining_miles = this.miles;
            this.miles -= remaining_miles;
            console.log("We only had " + this.miles + " to go...so we reversed all the way home!");
            return this;
        }
        else {
            console.log("You can't go backwards, silly! You're still at " + this.miles + " miles.");
            return this;
        }
    };
    return Bike;
}());
var tricycle = new Bike(20, '15mph');
var foldeable = new Bike(599, '25mph');
var roadrunner = new Bike(1299, '40mph');
// console.log(`Wow, the roadrunner costs a whopping ${roadrunner.price}!`);
// console.log(
//   `My daughter loves going ${tricycle.max_speed} mph on her tricycle!`
// );
console.log(tricycle
    .ride()
    .ride()
    .ride()
    .reverse()
    .displayInfo());
console.log(foldeable
    .ride()
    .ride()
    .reverse()
    .reverse()
    .displayInfo());
console.log(roadrunner
    .reverse()
    .reverse()
    .reverse()
    .displayInfo());
