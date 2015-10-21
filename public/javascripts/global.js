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

$('#choose_option1').click(function(e){
    check_answer(this);
    setTimeout(next_question, 1800);
});
$('#choose_option2').click(function(e){
    check_answer(this);
    setTimeout(next_question, 1800);
});
$('#choose_option3').click(function(e){
    check_answer(this);
    setTimeout(next_question, 1800);
});
$('#choose_option4').click(function(e){
    check_answer(this);
    setTimeout(next_question, 1800);
});
