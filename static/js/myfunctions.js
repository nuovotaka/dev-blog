/**
 * Theme functions file
 *
 * goto page
 *
 */
( function( $ ) {
  var pagetop = $('.gototop');
  pagetop.hide();

  $(window).scroll(function(){
      if($(this).scrollTop() > 650) {
        pagetop.fadeIn();
      }else{
        pagetop.fadeOut();
      }
  });

  pagetop.click(function(){
    $('body, html').animate({scrollTop:0}, 300, 'linear');
    return false;
  })
  
} )( jQuery );
