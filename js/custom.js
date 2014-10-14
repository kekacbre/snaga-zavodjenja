document.createElement('header');
document.createElement('nav');
document.createElement('menu');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('footer');

// textarea count characters
function countChar(val) {
	var len = val.value.length;
	if (len >= 401) {
	  val.value = val.value.substring(0, 400);
	} else {
	  $('#charNum').text(400 - len + " characters left.");
	}
};


// scroll to top
$(document).ready(function(){ 
$('.gore').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
});
$('.gore1').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 600);
	return false;
});


// smooth scroling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-83
        }, 1000);
        return false;
      }
    }
  });
});

// input placeholder
$(function(){
  $('input, textarea').each(function(){
	 $(this).val($(this).attr('holder'));
  });
  
  $('input, textarea').focus(function(){
	if($(this).attr('holder')==$(this).val()){
	  $(this).val('');
	}
  });
  
  $('input, textarea').focusout(function(){
	 if($.trim($(this).val())==''){
	   var holder = $(this).attr('holder');
			$(this).val(holder);
	 }
  });
});

// mobile menu
$('#menu-button').click(function() {
		$('#menu1').animate({left: 0}, 'slow');
});
$('#menu-button-close').click(function() {
		$('#menu1').animate({ left: '-100%' }, 'slow');
});


$('#log-overlay, .close').click(function(){
	$('#log-overlay').fadeOut();
	$('#reg-box').fadeOut();
	$('#login-box').fadeOut();
});
$('.reg-form').click(function(){
	$('#log-overlay').fadeIn();
	$('#reg-box').fadeIn();
	$('#login-box').fadeOut();
});
$('.login-form').click(function(){
	$('#log-overlay').fadeIn();
	$('#reg-box').fadeOut();
	$('#login-box').fadeIn();
});

}); // ready
