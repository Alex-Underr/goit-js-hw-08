// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line


const containerImg = document.querySelector('.gallery');
const createdPic = createImageEl(galleryItems);

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


containerImg.insertAdjacentHTML('afterBegin', createdPic);
containerImg.addEventListener('click', event => {
    event.preventDefault();

    let gallery = new SimpleLightbox('.gallery a',
        {
            captionsData: 'alt',
            captionDelay: 300,
        }
    );
})