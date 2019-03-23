'use strict';

$(document).ready(function() {

// прелоудер
    $(window).load(function() {
    setTimeout(function() {
      $('#js-preloader').fadeOut('slow', function() {});
    }, 1000);
 
  });


// показ меню 

$('.icon-open').click(function() { 

$(this).animate({  
    left: '210px'});

$(this).addClass('is-active')
    
 $('.menu').animate({ 
    left: '0px'
    }, 400); 

 $('body').animate({
    left: '285px'
 }, 400); 


});

// скрытие меню

$('.is-active').click(function() { //выбираем класс icon-close и метод click

    $(this).animate({ 
        left: '-210px'
    }, 400); 

    $('.menu').animate({ 
        left: '-285px' 
        }, 200); 

    $(this).removeClass("is-active");
        
    $('body').animate({ 
            left: '0px' 
        }, 200);

});


}); 