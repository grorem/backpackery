

var woody= "<img id='woody' src='img/woodenUA-01.png' />"

$(function() {
    $('.subnav').children().click(function (event){



    	$('#woody').remove();
        

        $(this).prepend("<img src='img/woodenUA-01.png' />").addClass('woody');

        
         
    });
});

$(function() {
    $('.subnav').children().mouseenter(function (event){

    	$('#woody').remove();

        $(this).prepend(woody);

        
         
    });
});


$(function() {
    $('.subnav').children().mouseleave(function (event){

    	$('#woody').remove();     
         
    });
});


