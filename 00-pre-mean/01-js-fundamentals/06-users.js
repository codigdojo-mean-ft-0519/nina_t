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

// function userlanguages(array){
//     //We've been given an array of dictionaries. Loop through each dictionary in the array...
//     var str= "";
//     for (var i = 0; i < array.length; i++){
//         str += array[i].fname+" "+array[i].lname+" knows ";
//         for (var j = 0; j < array[i].languages.length-1; j++){
//             str += array[i].languages[j]+", ";
//         }
//         str += "and "+array[i].languages[array[i].languages.length-1]+". \n"
//     }
//     return str;    
// }  

function userInterest(array){
    //Create an empty string, which we will return
    var output_str = "";
    //Loop through the entire user array
    for (var i = 0; i < array.length; i++){
        //For each user within the array...
        this_user = array[i];
        output_str += this_user.fname +" is also interested in ";
        //   interest_keys = Object.keys(this_dict.interests);
        interest_values = Object.values(this_user.interests);
        //Interest_values will output the name of each of the values within the interest objects (i.e. for Kermit, guitar, flue, tap, salsa..etc)
        //Interest_values.length represents the number of keys within the interest objects (i.e. 3 for Kermit)
        //Therefore...we want to loop through each of the values within interests...
        for (var j = 0; j < interest_values.length; j++){
            //And then we want to loop through each of the arrays...
            for (var k = 0; k < interest_values[j].length; k++){

                if ((j==interest_values.length-1)&&(k == interest_values[j].length-1)){
                    output_str += " and "+interest_values[j][k]+". \n";
                }
                else if((j==0)&&(k==0)){
                    output_str += interest_values[j][k];
                }
                else{
                    output_str += ", " + interest_values[j][k];
                }
            }
        }
        output_str += "\n"
    }
    //After you've stopped looping through all users...return the entire string.
    return output_str;
}

// console.log(userlanguages(users));
console.log(userInterest(users));  

// users = [
//   {
//     fname: "Kermit",
//     lname: "the Frog",
//     languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
//     interests: {
//       music: ["guitar", "flute"],
//       dance: ["tap", "salsa"],
//       television: ["Black Mirror", "Stranger Things"]
//     }
//   },
//   {
//     fname: "Winnie",
//     lname: "the Pooh",
//     languages: ["Python", "Swift", "Java"],
//     interests: {
//       food: ["honey", "honeycomb"],
//       flowers: ["honeysuckle"],
//       mysteries: ["Heffalumps"]
//     }
//   },
//   {
//     fname: "Arthur",
//     lname: "Dent",
//     languages: ["JavaScript", "HTML", "Go"],
//     interests: {
//       space: ["stars", "planets", "improbability"],
//       home: ["tea", "yellow bulldozers"]
//     }
//   }
// ]
// // Write a function called userLanguages that accepts an array of users, such as the one shown above. Return a string that lists all the users by first name and last name and the languages that each user knows. Make the string as nicely formatted as possible so that it is easy to read.

// // Example: userLanguages(users) returns

// // Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL. 
// // Winnie the Pooh knows Python, Swift, and Java. 
// // Arthur Dent knows JavaScript, HTML, and Go.
// // BONUS: Adjust the userLanguages function to also include what each user's interests are.

// var users = [
//     {
//       fname: "Kermit",
//       lname: "the Frog",
//       languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
//       interests: {
//         music: ["guitar", "flute"],
//         dance: ["tap", "salsa"],
//         television: ["Black Mirror", "Stranger Things"]
//       }
//     },
//     {
//       fname: "Winnie",
//       lname: "the Pooh",
//       languages: ["Python", "Swift", "Java"],
//       interests: {
//         food: ["honey", "honeycomb"],
//         flowers: ["honeysuckle"],
//         mysteries: ["Heffalumps"]
//     }
// },
// {
//     fname: "Arthur",
//     lname: "Dent",
//     languages: ["JavaScript", "HTML", "Go"],
//     interests: {
//         space: ["stars", "planets", "improbability"],
//         home: ["tea", "yellow bulldozers"]
//     }
// }
// ];

// function userLanguages(users) {
    
//     outputString ="";
//     for (var i=0; i < users.length; i++) {
//         var interestArray = []
//         outputString += users[i].fname + " " + users[i].lname + " knows ";
//         var langIdx = users[i].languages.length;

//         for (var j = 0; j < langIdx; j++){
//             outputString += users[i].languages[j]
            
//             if (j == langIdx-2) {
//                 outputString += ", and ";
//             }
//             else if (j == langIdx-1) {
//                 outputString += ".\n";
//             }
//             else {
//                 outputString += ", ";
//             }
//         }
//         outputString += users[i].fname + " is also interested in "
//         var numInterstTypes=Object.values(users[i].interests).length;
//         for(var k=0; k <numInterstTypes; k++){
//             for(var m=0; m < Object.values(users[i].interests)[k].length; m++) {
//                 interestArray.push(Object.values(users[i].interests)[k][m])
//             } 
//         }
//         for(var n =0; n< interestArray.length; n++){
//             if (n == interestArray.length-2) {
//                 outputString += interestArray[n] + ", and ";
//             }
//             else if (n == interestArray.length-1) {
//                 outputString += interestArray[n] + ".\n";
//             }
//             else {
//                 outputString += interestArray[n] + ", ";
//             }
//     }
//     outputString +="\n";
//     }
//     return outputString;
// }
            
//             results = userLanguages(users);
//             console.log("888888888888888888888888888888888888888888888888");
//             console.log(results);
