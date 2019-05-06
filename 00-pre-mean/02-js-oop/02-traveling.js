var tigger = { 
    character: "Tigger", 
};
var pooh = { 
    character: "Winnie the Pooh",
};
var piglet = { 
    character: "Piglet",
};     
var bees = { 
    character: "Bees",
};
var owl = { 
    character: "Owl",
};
var christopher = { 
    character: "Christopher Robin",
};
var rabbit = { 
    character: "Rabbit",
};
var gopher = { 
    character: "Gopher",
};
var kanga = { 
    character: "Kanga",
};
var eeyore = { 
    character: "Eeyore",
};
var heffalumps = { 
    character: "Heffalumps",
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
        }
        else{
            console.log("You may not go that way!");
        }
    }
    else if (direction == "east"){
        if (player.location.east != undefined){
            newLocation = player.location.east;
            console.log("You are now at "+newLocation.character+"'s house.");
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