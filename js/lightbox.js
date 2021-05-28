const images = document.querySelectorAll('.img-gallery')
const imagesLight = document.querySelector('.added-image')
const contentLight = document.querySelector('.image-light')
const hamburguer1 = document.querySelector('.hamburguer')

images.forEach(image =>{
	image.addEventListener('click', () => {
		showImage(image.getAttribute('src'))
	});
});

contentLight.addEventListener('click', (e) => {
	if(e.target != imagesLight){
		contentLight.classList.toggle('show')
		imagesLight.classList.toggle('showImage')
		hamburguer1.style.opacity = '1'
	}	
});

const showImage = (image) => {
	imagesLight.src = image
	contentLight.classList.toggle('show')
	imagesLight.classList.toggle('showImage')
	hamburguer1.style.opacity = '0'
}
