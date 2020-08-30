$(document).ready(function(){ 
    $("#back").click(function(){
        $("html,head").animate({
            scrollTop:0
        },900);
    });
});