jQuery(document).ready(function($) {
	$('.sidebar .has-submenu').append('<button class="btn-clr submenu-toggle"><i class="fas fa-plus"></i></button>');

	$('.submenu-toggle').click(function() {
		$(this).children('i').toggleClass('fa-plus fa-minus');
		$(this).siblings('.submenu').stop().slideToggle(400);
	});
});
