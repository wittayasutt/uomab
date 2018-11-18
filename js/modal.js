$(document).ready(function() {
	var modal = document.getElementById('myModal')
	var btn = document.getElementById('myBtn')
	var span = document.getElementsByClassName('close')[0]
	$('.open-video').click(function() {
		modal.style.display = 'block'
	})
	$('#myModal .modal-content span').click(function() {
		modal.style.display = 'none'
	})
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = 'none'
		}
	}
})
