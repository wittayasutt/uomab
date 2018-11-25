$(document).ready(function() {
	$('#icon-nav').click(function() {
		var nav = $('.content-wrapper').find('.menu-home-list.float-right.open')

		if (nav.hasClass('none')) {
			nav.removeClass('none')
		} else {
			nav.addClass('none')
		}
	})

	$('a.menu-header-list-link.no-link').click(function() {
		var ul = $(this)
			.parent()
			.find('ul')

		if (ul.hasClass('max-height-none')) {
			ul.removeClass('max-height-none')
		} else {
			ul.addClass('max-height-none')
		}
	})
})
