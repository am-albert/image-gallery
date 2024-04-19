// Close gallery event
const gallery = document.getElementById('gallery');
const closeGallery = () => {
    gallery.classList.remove('gallery--active');
    document.body.style.overflow = '';
};

export default closeGallery;