import data from './../data/photos';
import { loadImage } from './loadImage';

const slideClick = (e) => {
    let name, description, path;
    const id = parseInt(e.target.dataset.id);
    const gallery = document.getElementById('gallery');
    const activeCategory = gallery.dataset.category;
    
    data.photos[activeCategory].forEach((photo) => {
        if (photo.id === id) {
            name = photo.name;
            description = photo.description;
            path = photo.path;
        }
    })

    loadImage(id, name, path, description);
};

export default slideClick;