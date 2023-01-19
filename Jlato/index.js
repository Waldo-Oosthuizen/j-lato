$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn(500);
});

$('#mainListDiv').click(function () {
  $("#mainListDiv").hide();
  $('.navTrigger').trigger('click');
});



$(document).ready(function() {
  $('.go-top').hide(0)
  
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.go-top').fadeIn(2000);      
    } else {
      $('.go-top').fadeOut(1000);
    }
  });
  $('.go-top').click(function(event) {
    event.preventDefault();
    
    $('html , body').animate({scrollTop: 0}, 50);
  });
});
