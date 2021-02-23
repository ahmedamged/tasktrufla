$(document).ready(function(){

  $(window).on("resize", function(e) {
      if ($(window).width() <= 768){
        $('.quote-btn').html("QUOTE");
      }
      else{
        $('.quote-btn').html("GET A QUOTE");
      }
    }).trigger('resize');
});
