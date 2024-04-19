const gallery = document.getElementById('gallery');


const carousel = (direction) => {

    const options = {
        root: document.querySelector('.gallery__carousel-slides'),
        rootMargin: '0px',
        threshold: 0.9,
    }

    const observer = new IntersectionObserver((entries) => {
        const visibleSlides = entries.filter((entry) => {
            if(entry.isIntersecting === true) {
                return entry;
            }
        })


        if (direction === 'previous') {
            const firstVisibleSlide = visibleSlides[0];
            const firstVisibleSlideIndex = entries.indexOf(firstVisibleSlide);

            if(firstVisibleSlideIndex >= 1) {
                entries[firstVisibleSlideIndex -1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
                })
            }
            
        } else if(direction === 'next') {
            const lastVisibleSlide = visibleSlides[visibleSlides.length - 1];
            const lastVisibleSlideIndex = entries.indexOf(lastVisibleSlide);
            
            if(entries.length - 1 > lastVisibleSlideIndex) {
               entries[lastVisibleSlideIndex + 1].target.scrollIntoView({
                behavior: 'smooth',
                inline: 'start'
                }); 
            }
            
        }

        const slides = gallery.querySelectorAll('.gallery__carousel-slide');
        slides.forEach((slide) => {
            observer.unobserve(slide);
        })
    }, options);

    const slides = gallery.querySelectorAll('.gallery__carousel-slide');
    slides.forEach((slide) => {
        observer.observe(slide);
    })
}

export default carousel;