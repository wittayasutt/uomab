// $(document).ready(function() {
window.addEventListener('scroll', function(e) {
	var s1 = $('#section-1').prop('scrollHeight')
	var s2 = $('#section-2').prop('scrollHeight')
	var s3 = $('#section-3').prop('scrollHeight')
	var s4 = $('#section-4').prop('scrollHeight')
	var s5 = $('#section-5').prop('scrollHeight')
	var s6 = $('#section-6').prop('scrollHeight')

	if (window.scrollY > s1 - 500) {
		$('#section-2 .animated-fadeIn').addClass('animated fadeIn')
		$('#section-2 .animated-fadeInLeft').addClass('animated fadeInLeft')
	}

	if (window.scrollY > s1 + s2 + s3 - 500) {
		$('#section-4 .animated-fadeIn').addClass('animated fadeIn')
		$('#section-4 .animated-fadeInRight').addClass('animated fadeInRight')
	}

	if (window.scrollY > s1 + s2 + s3 + s4 + s5 + s6 - 800) {
		$('#section-7 .animated-fadeInUp').addClass('animated fadeInUp')
	}
})

// })
