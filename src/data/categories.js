import data from './photos';
const {photos} = data;
export default {
    categories: [
        {id: 'america', name: 'America', photosNumber: photos['america'].length, coverImage: './img/america.jpg'},
        {id: 'europe', name: 'Europe', photosNumber: photos['europe'].length, coverImage: './img/europe.jpg'},
        {id: 'africa', name: 'Africa', photosNumber: photos['africa'].length, coverImage: './img/africa.jpg'},
        {id: 'asia', name: 'Asia', photosNumber: photos['asia'].length, coverImage: './img/asia.jpg'},
        {id: 'oceania', name: 'Oceania', photosNumber: photos['oceania'].length, coverImage: './img/oceania.jpg'},
        {id: 'antartica', name: 'Antartica', photosNumber: photos['antartica'].length, coverImage: './img/antartica.jpg'}
    ]
}