import photosData from './data/photos';
import { loadImage } from './gallery/loadImage';
const categoriesContainer = document.getElementById('categories');
const gallery = document.getElementById('gallery');


// Open gallery event
categoriesContainer.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.closest('a')) {
        gallery.classList.add('gallery--active');
        document.body.style.overflow = 'hidden';


        const activeCategory = e.target.closest('a').dataset.category;
        gallery.dataset.category = activeCategory;

        const photos = photosData.photos[activeCategory];
        const carousel = gallery.querySelector('.gallery__carousel-slides');

        const {id, name, path, description} = photos[0];
        
        loadImage(id, name, path, description);

        carousel.innerHTML = '';
        
        photos.forEach((photo) => {
            const slide = `
            <a href="#" class="gallery__carousel-slide">
				<img class="gallery__carousel-image" src="${photo.path}" data-id=${photo.id} alt="" />
			</a>
            `;
            carousel.innerHTML += slide;
        })
        
        gallery.querySelector('.gallery__carousel-slide').classList.add('gallery__carousel-slide--active');
    }
});