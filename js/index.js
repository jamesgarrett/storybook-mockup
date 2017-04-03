var counter = 0;

$('.wrap').click(function(e) {
   
   counter += 1; 
   $(e).toggleClass("clicked");
    $('.right').toggleClass('clicked');
	$('#one, #two').toggleClass('hidden');
	$('#four, #five').toggleClass('hidden');
    console.log(counter);
});