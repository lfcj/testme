var answer=$('#the_answer').val(); 

function check_answer(self){
    var option_chosen = self.innerText;
    if(answer===option_chosen){
        $(self).css('background-color', '#2ECC40');
    } else {
        $(self).css('background-color', '#FF4136');
    }
    $(self).css('color', '#fff');
};

$('#choose_option1').click(function(e){
    check_answer(this);
});
$('#choose_option2').click(function(e){
    check_answer(this);
});
$('#choose_option3').click(function(e){
    check_answer(this);
});
$('#choose_option4').click(function(e){
    check_answer(this);
});
