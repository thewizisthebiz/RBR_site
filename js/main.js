$(document).ready(function() {

	$('[data-nav]').on('click', (event) => {
	  $(event.target).siblings('[data-dropdown]')
	    .toggleClass('show');
	});

	$(document).click(function(e) {
	  $('[data-nav]')
	    .not($('[data-nav]').has($(e.target)))
	    .children('[data-dropdown]')
	    .removeClass('show');
	});
});


