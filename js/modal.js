$(document).ready(function() {
	var modal = document.getElementById('myModal')
	var btn = document.getElementById('myBtn')
	var span = document.getElementsByClassName('close')[0]
	var iframe = $('.modal').find('iframe')

	$('.open-video').click(function() {
		modal.style.display = 'block'
		iframe.attr('src', 'https://www.youtube.com/embed/Bhg45PNtsVs')
	})
	$('#myModal .modal-content span').click(function() {
		modal.style.display = 'none'
		iframe.attr('src', '')
	})
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = 'none'
			iframe.attr('src', '')
		}
	}
})
