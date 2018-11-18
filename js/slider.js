$(document).ready(function() {
	$('#arrow-prev').click(function() {
		var val = parseInt($('input[name=slider]:checked').val())
		if (val === 1) $('#s3').prop('checked', true)
		else if (val === 2) $('#s1').prop('checked', true)
		else if (val === 3) $('#s2').prop('checked', true)
	})

	$('#arrow-next').click(function() {
		var val = parseInt($('input[name=slider]:checked').val())
		if (val === 1) $('#s2').prop('checked', true)
		else if (val === 2) $('#s3').prop('checked', true)
		else if (val === 3) $('#s1').prop('checked', true)
	})
})
