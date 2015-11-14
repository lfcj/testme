var answer=$('#the_answer').val(); 
var not_picked_yet = true; 

function check_answer(self){
    var option_chosen = self.innerText;
    if(answer!==option_chosen){
        $(self).css('background-color', '#FF4136'); // red
        $('#the_answer').css('background-color', '#FF4136'); // red
    }else{
        $(self).css('background-color', '#2ECC40'); // green
    } 
    $(self).css('color', '#fff');
    not_picked_yet = false; 
};

function next_question(){
    console.log('requ');
    $.ajax({
        type: "GET",
        url: '/',
        success: function (res){
            if(res.redirect){
                window.location.href = res.redirect;
            }else {
                document.open();
                document.write(res);
                document.close();
            }
        }
    });
}

function answer_action(self){
    if(not_picked_yet){
        check_answer(self);
        setTimeout(next_question, 1800);
    }
}

$('#choose_option1').click(function(e){
    answer_action(this);
});
$('#choose_option2').click(function(e){
    answer_action(this);
});
$('#choose_option3').click(function(e){
    answer_action(this);
});
$('#choose_option4').click(function(e){
    answer_action(this);
});
