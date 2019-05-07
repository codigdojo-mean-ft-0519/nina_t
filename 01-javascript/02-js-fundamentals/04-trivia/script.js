var points= 0;
$('.point_tally').append(points);

//Parsing out the needed results from the Anime category
$.getJSON("https://opentdb.com/api.php?amount=3&category=31",function(data){
    //Parsing out the needed results from category1
    var category_name = data.results[0].category;

    //Category 1, Question 1 data
    var q1_data = data.results[0];
    var q1_answer_choices = [q1_data.correct_answer,q1_data.incorrect_answers[0],q1_data.incorrect_answers[1],q1_data.incorrect_answers[2]];
    $('.category1').append(category_name);
    $('#c1q1').append(q1_data.question);
    if (q1_data.difficulty == "easy"){
        $('#c1q1').append("100");
    }
    else if (q1_data.difficulty == "medium"){
        $('#c1q1').append("200");
    }
    else if (q1_data.difficulty =="hard"){
        $('#c1q1').append("300");
    }
    //Category 1, Question 2 data
    var q2_data = data.results[1];
    var q2_answer_choices = [q2_data.correct_answer,q2_data.incorrect_answers[0],q2_data.incorrect_answers[1],q2_data.incorrect_answers[2]];
    $('#c1q2').append(q2_data.question);
    if (q2_data.difficulty == "easy"){
        $('#c1q2').append("100");
    }
    else if (q2_data.difficulty == "medium"){
        $('#c1q2').append("200");
    }
    else if (q2_data.difficulty =="hard"){
        $('#c1q2').append("300");
    }
    //Category 1, Question 3 data
    var q3_data = data.results[2];
    var q3_answer_choices = [q3_data.correct_answer,q3_data.incorrect_answers[0],q3_data.incorrect_answers[1],q3_data.incorrect_answers[2]];
    $('#c1q3').append(q3_data.question);
    if (q3_data.difficulty == "easy"){
        $('#c1q3').append("100");
    }
    else if (q3_data.difficulty == "medium"){
        $('#c1q3').append("200");
    }
    else if (q3_data.difficulty =="hard"){
        $('#c1q3').append("300");
    }
});

//Parsing out the needed data from the Science and Nature category
$.getJSON("https://opentdb.com/api.php?amount=3&category=17",function(data){
    var category_name = data.results[0].category;
    $('.category2').append(category_name);
    //Category 2, Question 1 data
    var q1_data = data.results[0];
    var q1_answer_choices = [q1_data.correct_answer,q1_data.incorrect_answers[0],q1_data.incorrect_answers[1],q1_data.incorrect_answers[2]];
    $('#c2q1').append(q1_data.question);
    if (q1_data.difficulty == "easy"){
        $('#c2q1').append("100");
    }
    else if (q1_data.difficulty == "medium"){
        $('#c2q1').append("200");
    }
    else if (q1_data.difficulty =="hard"){
        $('#c2q1').append("300");
    }
    //Category 2, Question 2 data
    var q2_data = data.results[1];
    var q2_answer_choices = [q2_data.correct_answer,q2_data.incorrect_answers[0],q2_data.incorrect_answers[1],q2_data.incorrect_answers[2]];
    $('#c2q2').append(q2_data.question);
    if (q2_data.difficulty == "easy"){
        $('#c2q2').append("100");
    }
    else if (q2_data.difficulty == "medium"){
        $('#c2q2').append("200");
    }
    else if (q2_data.difficulty =="hard"){
        $('#c2q2').append("300");
    }
    //Category 3, Question 3 data
    var q3_data = data.results[2];
    var q3_answer_choices = [q3_data.correct_answer,q3_data.incorrect_answers[0],q3_data.incorrect_answers[1],q3_data.incorrect_answers[2]];
    $('#c2q3').append(q3_data.question);
    if (q3_data.difficulty == "easy"){
        $('#c2q3').append("100");
    }
    else if (q3_data.difficulty == "medium"){
        $('#c2q3').append("200");
    }
    else if (q3_data.difficulty =="hard"){
        $('#c2q3').append("300");
    }
});

//Parsing out the needed data from the Sports category
$.getJSON("https://opentdb.com/api.php?amount=3&category=21",function(data){
    var category_name = data.results[0].category;

    //Category 3, Question 1 data
    var q1_data = data.results[0];
    var q1_answer_choices = [q1_data.correct_answer,q1_data.incorrect_answers[0],q1_data.incorrect_answers[1],q1_data.incorrect_answers[2]];
    $('.category3').append(category_name);
    $('#c3q1').append(q1_data.question);
    if (q1_data.difficulty == "easy"){
        $('#c3q1').append("100");
    }
    else if (q1_data.difficulty == "medium"){
        $('#c3q1').append("200");
    }
    else if (q1_data.difficulty =="hard"){
        $('#c3q1').append("300");
    }
    //Category 3, Question 2 data
    var q2_data = data.results[1];
    var q2_answer_choices = [q2_data.correct_answer,q2_data.incorrect_answers[0],q2_data.incorrect_answers[1],q2_data.incorrect_answers[2]];
    $('#c3q2').append(q2_data.question);
    if (q2_data.difficulty == "easy"){
        $('#c3q2').append("100");
    }
    else if (q2_data.difficulty == "medium"){
        $('#c3q2').append("200");
    }
    else if (q2_data.difficulty =="hard"){
        $('#c3q2').append("300");
    }
    //Category 3, Question 3 data
    var q3_data = data.results[2];
    var q3_answer_choices = [q3_data.correct_answer,q3_data.incorrect_answers[0],q3_data.incorrect_answers[1],q3_data.incorrect_answers[2]];
    $('#c3q3').append(q3_data.question);
    if (q3_data.difficulty == "easy"){
        $('#c3q3').append("100");
    }
    else if (q3_data.difficulty == "medium"){
        $('#c3q3').append("200");
    }
    else if (q3_data.difficulty =="hard"){
        $('#c3q3').append("300");
    }
});

//Things still to do:
//How do I create a link to refresh the page if we don't have our code on a server?
//Create different layouts (.html?) based on if the question is a boolean or multiple choice
//Figure out how to display the question value first, then on click display the question and answer options
//Figure out how to register what was selected and identify if it was right or wrong
//Figure out how to display the points and add points if the right answer is selected
//Figure out how to turn the div grey so that it can't be interacted with