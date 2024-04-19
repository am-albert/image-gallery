import categoriesData from './data/categories';
const {categories} = categoriesData; //destructuring object
const categoriesContainer = document.getElementById('categories');

//creating categories
categories.forEach((category) => {
    const newCategory = document.createElement('a');
    const template = `
    <img class="category__img" src="${category.coverImage}" alt="" />
    <div class="category__data">
        <p class="category__name">${category.name}</p>
        <p class="category__photos-number">${category.photosNumber} Photos</p>
    </div>
    `;

    newCategory.innerHTML = template;
    newCategory.classList.add('category');
    newCategory.href = '#';
    newCategory.dataset.category = category.id;

    categoriesContainer.append(newCategory);
});