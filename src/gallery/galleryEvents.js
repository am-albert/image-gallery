import closeGallery from "./closeGallery";
import slideClick from "./slideClick";
import { loadPreviousNext } from "./loadImage";
import carousel from "./carousel";

const gallery = document.getElementById('gallery');
gallery.addEventListener('click', (e) => {
    const button = e.target.closest('button');

    if(button?.dataset?.action === 'close-gallery'){
        closeGallery();
    }

    // Carousel slide click event
    if (e.target.dataset.id) {
        slideClick(e);
    }

    // Next image button

    if (button?.dataset?.action === 'next-image') {
        loadPreviousNext('next');
    }

    // Previous image button
    if (button?.dataset?.action === 'previous-image') {
        loadPreviousNext('previous');
    }

    // Carousel next
    if (button?.dataset?.action === 'next-slide') {
        carousel('next');
    }
    
    // Carousel previous
    if (button?.dataset?.action === 'previous-slide') {
        carousel('previous');
    }
});