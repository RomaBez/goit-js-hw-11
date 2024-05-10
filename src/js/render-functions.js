export const galleryMarkup = images => {
  return images
    .map(
      ({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
      </a>
      <div class="image-info">
        <span class="info-item">Likes: ${likes}</span>
        <span class="info-item">Views: ${views}</span>
        <span class="info-item">Comments: ${comments}</span>
        <span class="info-item">Downloads: ${downloads}</span>
      </div>
    </li>`)
    .join('');
};

