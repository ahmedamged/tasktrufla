$(document).ready(function(){

  $(window).on("resize", function(e) {
      if(!$('.navbar').hasClass('d-none')){
        $('.navbar').addClass('d-none');
        $('.quote-btn').removeClass('d-none');
        $('.phone-icon').removeClass('d-none');
      }
      if ($(window).width() <= 768){
        $('.quote-btn').html("QUOTE");
        $('.navbar-item:first-child .navbar-link').addClass('dropdown-toggle');
        $('#phone').addClass('d-none');
      }
      else{
        $('.quote-btn').html("GET A QUOTE");
        $('#phone').removeClass('d-none');
      }
    }).trigger('resize');

    $('#navbarDropdown').on('click', function functionName() {
      $('.products-links').toggleClass('d-none');
    });

    $('#hamburger').on('click', function functionName() {
      $('.navbar').toggleClass('d-none');
      if ($('.navbar').hasClass('d-none')) {
        $('#hamburger').attr("aria-expanded","false");
      }
      else {
        $('#hamburger').attr("aria-expanded","true");
      }
      if ($(window).width() <= 768){
        $('.quote-btn').toggleClass('d-none');
        $('.phone-icon').toggleClass('d-none');
      }
    });

    $('.phone-icon').on('click', function(){
      if ($(window).width() <= 768){
        $('#phone').toggleClass('d-none');
      }
    });
});
