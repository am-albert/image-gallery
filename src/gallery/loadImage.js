import data from './../data/photos';

const gallery = document.getElementById('gallery');
const loadImage = (id, name, path, description) => {
    gallery.querySelector('.gallery__image').src = path;
    gallery.querySelector('.gallery__image').dataset.imageId = id;
    gallery.querySelector('.gallery__title').innerText = name;
    gallery.querySelector('.gallery__active-image-description').innerText = description;

    const currentCategory = gallery.dataset.category;
    const photos = data.photos[currentCategory];
    let currentImageIndex;


    photos.forEach((photo, index) => {
        if(photo.id === id) {
            currentImageIndex = index;
        }
    })

    // Checking the active image
    if(gallery.querySelectorAll('.gallery__carousel-slide').length > 0) {
         //Removing active class from non active images
        gallery.querySelector('.gallery__carousel-slide--active').classList.remove('gallery__carousel-slide--active');
        gallery.querySelectorAll('.gallery__carousel-slide')[currentImageIndex].classList.add('gallery__carousel-slide--active');
    }   
};

const loadPreviousNext = (direction) => {
    const currentCategory = gallery.dataset.category;
    const photos = data.photos[currentCategory];
    const currentIdImage = parseInt(gallery.querySelector('.gallery__image').dataset.imageId);

    let currentImageIndex;
    photos.forEach((photo, index) => {
        if (photo.id === currentIdImage) {
            currentImageIndex = index;
        }
    })

    if (direction === 'next') {
        if(photos[currentImageIndex + 1]){
        const {id, name, path, description} = photos[currentImageIndex + 1];
        loadImage(id, name, path, description);
        }
    } else if (direction === 'previous') {
        if(photos[currentImageIndex - 1]){
            const {id, name, path, description} = photos[currentImageIndex - 1];
            loadImage(id, name, path, description);
        }
    }
}

export { loadImage, loadPreviousNext };