var tigger = { 
    character: "Tigger", 
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};
var pooh = { 
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh bother!");
    }
};
var piglet = { 
    character: "Piglet",
    greet: function(){
        console.log("Oh, d-d-d-dear! I musn't f-f-fear!");
    }
};     
var bees = { 
    character: "Bees",
    greet: function(){
        console.log("Buzzzzzz!! Buzzy Buzz!!");
    }
};
var owl = { 
    character: "Owl",
    greet: function(){
        console.log("Why, thank you for stopping by! I daresay it's tea-o-clock!");
    }
};
var christopher = { 
    character: "Christopher Robin",
    greet: function(){
        console.log("Come outside and play!");
    }
};
var rabbit = { 
    character: "Rabbit",
    greet: function(){
        console.log("Why I've never met someone more annoying in my entire life!");
    }
};
var gopher = { 
    character: "Gopher",
    greet: function(){
        console.log("Go away - I'm hiding until spring!");
    }
};
var kanga = { 
    character: "Kanga",
    greet: function(){
        console.log("Oh, Roo dear, don't play in the mud.");
    }
};
var eeyore = { 
    character: "Eeyore",
    greet: function(){
        console.log("Oh dear, I might as well just sleep all day.");
    }
};
var heffalumps = { 
    character: "Heffalumps",
    greet: function(){
        console.log("I'm not really real!");
    }
};

tigger.north = pooh;
pooh.south = tigger;
pooh.west = piglet;
pooh.north = christopher;
piglet.north = owl;
bees.north = rabbit;
pooh.east = bees;
piglet.east = pooh;
bees.west = pooh;
owl.south = piglet;
christopher.south = pooh;
christopher.west = owl;
owl.east = christopher;
christopher.east = rabbit;
rabbit.west = christopher;
rabbit.east = gopher;
christopher.north = kanga;
kanga.south = christopher;
kanga.north = eeyore;
eeyore.south = kanga
eeyore.east = heffalumps;
heffalumps.west = eeyore;

var player = { location: tigger };

function move(direction){
    if (direction == "north"){
        if (player.location.north != undefined){
            newLocation = player.location.north;
            console.log("You are now at "+newLocation.character+"'s house.");
            newLocation.greet();
            player.location = newLocation;
        }
        else{
            console.log("You may not go that way!");
        }
    }
    else if (direction == "south"){
        if (player.location.south != undefined){
            newLocation = player.location.south;
            console.log("You are now at "+newLocation.character+"'s house.");
            newLocation.greet();
            player.location = newLocation;
        }
        else{
            console.log("You may not go that way!");
        }
    }
    else if (direction == "west"){
        if (player.location.west != undefined){
            newLocation = player.location.west;
            console.log("You are now at "+newLocation.character+"'s house.");
            newLocation.greet();
        }
        else{
            console.log("You may not go that way!");
        }
    }
    else if (direction == "east"){
        if (player.location.east != undefined){
            newLocation = player.location.east;
            console.log("You are now at "+newLocation.character+"'s house.");
            newLocation.greet();
        }
        else{
            console.log("You may not go that way!");
        }
    }
}

move("north");
move("north");
move("north");
move("west");