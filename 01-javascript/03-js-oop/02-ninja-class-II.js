function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
        return this;
    }

    this.kick = function(target){
        // if (!target || !(target instanceof Ninja)){
        //     console.log(target+'is not an instance of the ninja class!');
        // }
        var lost_health = strength*15;
        target.health -= lost_health;
        console.log(target.name+" was kicked by "+this.name+" and lost "+lost_health+" health!");
    }
}
Ninja.prototype.sayName = function(){
    console.log("My ninja name is " + this.name+"!");
    return this;
}

Ninja.prototype.drinkSake = function(){
    this.health += 10;
    return this;
}

Ninja.prototype.punch = function(target){
    // if (!target || !target instanceof Ninja){
    //     console.log(target+' is not an instance of the ninja class!');
    // }
    target.health -= 5;
    console.log(target.name+" was punched by "+this.name+" and lost 5 health!");
}

var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Nina");
var ninja3 = "cheese";
ninja1.punch(ninja2);
//Ninja2 should lose 5 health
ninja2.showStats();
//It should show that Ninja2 has 95 health
ninja1.kick(ninja2);
//Ninja2 should lose 45 health because ninja 1 currently has 3 strength
ninja2.showStats();
//Ninja2 should show that Ninja2 has 50 health
ninja1.punch(ninja3);