$(function() {
    $('.gallery1').mouseenter(function(event){
    	
        $('.seeit1').slideDown(200);
        
    });


    

});


$(function() {
    $('.gallery1').mouseleave(function(event){
        
        $('.seeit1').slideUp(200);
        
    });


    

});



$(function() {
    $('.gallery2').mouseenter(function(event){
        
        $('.seeit2').slideDown(200);
        
    });


    

});


$(function() {
    $('.gallery2').mouseleave(function(event){
        
        $('.seeit2').slideUp(200);
        
    });


    

});



 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 500);
        
      }
    }
  });
});



$(function() {
    $('.subnav').children().click(function(event){

        $('.subnav').children().removeClass('selected');
        $(this).addClass('selected');

        
        
        
    });


    

});







var elementPosition = $('.subnav').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('.subnav').css('position','fixed').css('top','0');
        } else {
            $('.subnav').css('position','static');
        }    
});



$(function() {
    $('.justphotos').click(function(){

        $('p').slideUp(500);
        $('.justphotos').hide(0);
        $('.showtext').show(0);

        
        
        
    });


    

});


$(function() {
    $('.showtext').click(function(){

        $('p').slideDown(500);
        $('.justphotos').show(0);
        $('.showtext').hide(0);
        

        
        
        
    });


    

});



var lastId,
    topMenu = $(".subnav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("selected")
         .end().filter("[href=#"+id+"]").parent().addClass("selected");
   }                   
});


$(window).scroll(function(e){ 
  $el = $('.mhead'); 
  if ($(this).scrollTop() > 200 && $el.css('position') != 'fixed'){ 
    $('.mhead').css({'position': 'fixed', 'top': '0px'}); 
  } 
});


$(function() {
    $('.menuToggle').unbind('click').click(function(){

        $('.msubnav').slideToggle(500);
   
    });


});


$(function() {
    $('.msubnav').children().click(function(){

        $('.msubnav').slideUp(500);
   
    });
});

