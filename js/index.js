var counter = 0;

$('.logo').click(function(e) {
   
   counter += 1; 
   $(e).toggleClass("clicked");
    $('.right').toggleClass('clicked');
    console.log(counter);
});