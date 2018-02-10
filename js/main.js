$(document).ready(function(){
    $('.parallax').parallax();
    $('.carousel').carousel();

    $('#galleryBtn').click(function() {
        $('html, body').animate({
            scrollTop: $("#gallery").offset().top
         }, 2000);
    });
    
});