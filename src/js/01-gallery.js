// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

import 'simplelightbox/dist/simple-lightbox.min.css';

const containerImg = document.querySelector('.gallery');
const createdPic = createImageEl(galleryItems);
containerImg.insertAdjacentHTML('afterBegin', createdPic);

function createImageEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

containerImg.addEventListener('click', event => {
    event.preventDefault();

    let gallery = new SimpleLightbox('.gallery a',
        {
            captionsData: 'alt',
            captionDelay: 300,
        }
    );
})