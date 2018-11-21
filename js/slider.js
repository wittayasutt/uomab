$(document).ready(function() {
	$.getJSON('./json/articles.json', function(data) {
		// init
		var center = 0
		var slideCenter = 1
		var show = setData(data, center)
		setSilde(show)

		$('#arrow-prev').click(function() {
			var val = parseInt($('input[name=slider]:checked').val())
			if (val === 1) $('#s3').prop('checked', true)
			else if (val === 2) $('#s1').prop('checked', true)
			else if (val === 3) $('#s2').prop('checked', true)

			center = center - 1
			if (center < 0) center = data.length - 1
			slideCenter = slideCenter - 1
			if (slideCenter === 0) slideCenter = 3
			clickLeft(data, center, slideCenter)
		})

		$('#arrow-next').click(function() {
			var val = parseInt($('input[name=slider]:checked').val())
			if (val === 1) $('#s2').prop('checked', true)
			else if (val === 2) $('#s3').prop('checked', true)
			else if (val === 3) $('#s1').prop('checked', true)

			center = center + 1
			if (center > data.length - 1) center = 0
			slideCenter = slideCenter + 1
			if (slideCenter === 4) slideCenter = 1
			clickRight(data, center, slideCenter)
		})
	})
})

function setData(data, center) {
	var next = center + 1
	if (center + 1 > data.length) next = data[0]
	var prev = center - 1
	if (center - 1 < 0) prev = data.length - 1
	var show = []
	show.push(data[center])
	show.push(data[next])
	show.push(data[prev])

	return show
}

function setSilde(show) {
	for (var i = 0; i < 3; i++) {
		$('#slide' + (i + 1))
			.find('.image')
			.css('background', "url('.." + show[i].image + "')")
		$('#slide' + (i + 1))
			.find('h3')
			.text(show[i].title)
		$('#slide' + (i + 1))
			.find('p')
			.text(show[i].content)
		$('#slide' + (i + 1))
			.find('a')
			.attr('href', show[i].link)
			.attr('target', show[i].target)
	}
}

function clickLeft(data, center, slideCenter) {
	var prev = center - 1
	if (prev < 0) prev = data.length - 1
	var slidePrev = slideCenter - 1
	if (slidePrev === 0) slidePrev = 3

	$('#slide' + slidePrev)
		.find('.image')
		.css('background', "url('.." + data[prev].image + "')")
	$('#slide' + slidePrev)
		.find('h3')
		.text(data[prev].title)
	$('#slide' + slidePrev)
		.find('p')
		.text(data[prev].content)
	$('#slide' + slidePrev)
		.find('a')
		.attr('href', data[prev].link)
		.attr('target', data[prev].target)
}

function clickRight(data, center, slideCenter) {
	var next = center + 1
	if (next > data.length - 1) next = 0
	var slideNext = slideCenter + 1
	if (slideNext === 4) slideNext = 1

	$('#slide' + slideNext)
		.find('.image')
		.css('background', "url('.." + data[next].image + "')")
	$('#slide' + slideNext)
		.find('h3')
		.text(data[next].title)
	$('#slide' + slideNext)
		.find('p')
		.text(data[next].content)
	$('#slide' + slideNext)
		.find('a')
		.attr('href', data[next].link)
		.attr('target', data[next].target)
}
