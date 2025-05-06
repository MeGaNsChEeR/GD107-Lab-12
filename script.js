$(function() {
  var btn = $(".btn");
  
  btn.on("click", function() {
    
    $(this).addClass('btn-progress');
    setTimeout(function() {
      btn.addClass('btn-fill')
    }, 500);
    
    setTimeout(function() {
      btn.removeClass('btn-fill')
    }, 4100);
    
    setTimeout(function() {
      btn.addClass('btn-complete')
    }, 4100);
  
  });
})

//Make sure the user has scrolled at least double the height of the browser
var toggleHeight = $(window).outerHeight() * 2;

$(window).scroll(function() {
	if ($(window).scrollTop() > toggleHeight) {
		//Adds active class to make button visible
		$(".m-backtotop").addClass("active");
		
		//Just some cool text changes
		$('h1 span').text('TA-DA! Now hover it and hit dat!')
		
	} else {
		//Removes active class to make button visible
		$(".m-backtotop").removeClass("active");
		
		//Just some cool text changes
		$('h1 span').text('(start scrolling)')
	}
});


//Scrolls the user to the top of the page again
$(".m-backtotop").click(function() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
	return false;
});
