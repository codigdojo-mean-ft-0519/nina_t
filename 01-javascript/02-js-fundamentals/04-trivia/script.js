var number_of_questions = 3;
var category_num = 31;
var point_tally = 0;

$.getJSON("https://opentdb.com/api.php?amount="+number_of_questions+"&category="+category_num,function(data){
    // $('.multchoiceblock').hide();
    // $('.truefalseblock').hide();
    for (var i = 0; i < data.results.length; i++){
        var category = data.results[i].category;
        var difficulty = data.results[i].difficulty
        var question = data.results[i].question
    }
    
    $('.category1').append(category);
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
        $('multchoiceblock').show();
    });
});