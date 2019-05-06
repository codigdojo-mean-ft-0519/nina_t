function bracesValid(str){
    var arr = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == "{" || str[i] == "(" || str[i] == "["){
            arr.push(str[i]);
        }
        else if (str[i] == ")"){
            if (arr[arr.length-1] == "("){
                arr.pop()
            }
            else{
                return false;
            }
        }
        else if (str[i] == "}"){
            if (arr[arr.length-1] == "{"){
                arr.pop()
            }
            else{
                return false;
            }
        }
        else if (str[i] == "]"){
            if (arr[arr.length-1] == "["){
            }
            else{
                return false;
            }
        }
    }
    return true;
}

// console.log(bracesValid("{{()}}[]"));
console.log(bracesValid("{(})"));