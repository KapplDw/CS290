// Declare doc as 'ready
$(document).ready(function(){

    $(".nav-btn").click(function(){
        $('.nav-links').slideToggle()
    });

    $(window).resize(function(){
        if ($(window).width()>500){
            $(".nav-links").show();
        }else{
            $(".nav-links").hide();
        }
    });
});
