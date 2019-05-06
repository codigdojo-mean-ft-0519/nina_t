// 30 minutes max
// Challenge 1

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(myObj){
    for (var i = 0; i < students.length; i++){
        console.log("Name: "+students[i].name+", Cohort: "+students[i].cohort);
    }
}

console.log(printStudents(students));

// Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function employeesAndManagers(myObj){
    var employeesList = "EMPLOYEES \n";
    var managersList = "MANAGERS \n";
        for (var i = 0; i < users.employees.length; i++){
            var employeeFname = users.employees[i].first_name;
            var employeeLname = users.employees[i].last_name;
            var nameLength = employeeFname.length + employeeLname.length;
            employeesList += (i+1)+" - "+employeeLname+", "+employeeFname+" - "+ nameLength+"\n";
        }
        for (var j = 0; j < users.managers.length; j++){
            var managerFname = users.managers[j].first_name;
            var managerLname= users.managers[j].last_name;
            var nameLength = managerFname.length + managerLname.length;
            managersList += (j+1)+" - "+managerLname+", "+managerFname+" - "+ nameLength+"\n";
        }
    var finalList = employeesList + managersList;
    return finalList;
}

console.log(employeesAndManagers(users));