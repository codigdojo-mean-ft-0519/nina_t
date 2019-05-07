function getQuestions(category_num){
    $.getJSON("https://opentdb.com/api.php?amount=3&category="+category_num,function(data){
        return data;
    });
}

var category1_data = getQuestions(31); //anime questions
console.log(category1_data);
var category2_data= getQuestions(17); //science & nature
var category3_data = getQuestions(22); //geography
    
$('.category1').append(category1_data.results[0].category);
$('.category2').append(category2_data.results[1].category);
$('.category3').append(category3_data.results[2].category);
$('.point_tally').append(point_tally);
$('.question').append(question);

    if (difficulty == "easy"){
        $('.points').append("100");
    }
    else if (difficulty == "medium"){
        $('.points').append("200");

    }
    else if (difficulty =="hard"){
        $('.points').append("300");
    }

    $('.valueblock').click(function(){
        $(this).hide();
        $('.multchoiceblock').show();
    });
