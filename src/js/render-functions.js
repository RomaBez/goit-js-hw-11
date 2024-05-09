export const galleryMarkup = images => {
    return images
        .map((image) => {
    `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
        />
      </a>
      <div class="image-info">
        <span class="info-item">Likes: ${image.likes}</span>
        <span class="info-item">Views: ${image.views}</span>
        <span class="info-item">Comments: ${image.comments}</span>
        <span class="info-item">Downloads: ${image.downloads}</span>
      </div>
    </li>`;
  }).join('');
}

gallery.insertAdjacentHTML('beforeend', galleryMarkup);