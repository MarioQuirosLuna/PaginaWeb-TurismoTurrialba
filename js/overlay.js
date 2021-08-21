const overlay = document.getElementById('overlay');
const overlayImg = document.querySelector('#overlay img');
const overlayDescription = document.querySelector('#overlay .description');
const img = document.querySelectorAll('.cont img');
const img2 = document.querySelectorAll('.more-cont img');
const closePopup = document.querySelector('#btn-close-popup');

function eventClickOverlay(element){
	element.addEventListener('click', function() {
		const route = element.getAttribute('src');
		const description = element.parentNode.parentNode.dataset.description;

		overlay.classList.add('active');
		overlayImg.src = route;
		overlayDescription.innerHTML = description;
	})
}

window.addEventListener('load', function(){

	img.forEach(element => eventClickOverlay(element));
	img2.forEach(element => eventClickOverlay(element));

	overlay.addEventListener('click', function(event){
		event.target.id === 'overlay' ? overlay.classList.remove('active') : '';
	});

});