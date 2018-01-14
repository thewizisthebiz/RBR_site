$(document).ready(function() {

	$('.c-topNav__toggle').click(function(){
		$('.c-topNav').toggleClass('open');

		if($('c-topNav__toggle').hasClass('open') == false){
			var scrollSpot = $(window).scrollTop();
		}
	});

	$(window).scroll(function () {
		var imgHeight = $('.c-homeTopImage').height();
		var scrollTop = $(window).scrollTop();
		var navTop = imgHeight - scrollTop;

		if (scrollTop < imgHeight) {
		  $('.c-topNav').removeClass('topLocked');
		  $('main').removeClass('topLocked');
		}
		if (scrollTop > imgHeight) {
		  $('.c-topNav').addClass('topLocked');
		  $('main').addClass('topLocked');
		}
	});
});