users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ];

function userlanguages(array){
    //We've been given an array of dictionaries. Loop through each dictionary in the array...
    var str= "";
    for (var i = 0; i < array.length; i++){
        str += array[i].fname+" "+array[i].lname+" knows ";
        for (var j = 0; j < array[i].languages.length-1; j++){
            str += array[i].languages[j]+", ";
        }
        str += "and "+array[i].languages[array[i].languages.length-1]+". \n"
        // str += array[i].fname +" is also interested in ";
        // for (interest in array[i].interests){
        //     console.log("The interest is: "+interest);
        // }
    }
        return str;    
}  

console.log(userlanguages(users));

