import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchPhoto } from "./js/pixabay-api.js"
import { galleryMarkup } from "./js/render-functions.js"

const galleryEl = document.querySelector('.gallery');
const searchFormEl = document.querySelector('.myForm');
const loaderEl = document.querySelector('.loader');

console.log(galleryEl, searchFormEl,loaderEl)

fetchPhoto().then(imgasData => {
    const markup = console.log(imgasData.hits)
    console.log(markup)
})