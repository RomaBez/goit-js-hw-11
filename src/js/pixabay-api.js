

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43803068-e4e7e851cef47a5cf0e066a7d';

 export const fetchPhoto = (queryString = "flower") => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 5,
    q: queryString,
  });

  return fetch(
    `${BASE_URL}?${searchParams}`
  ).then(response => {
      if (!response.ok) {
          throw new Error(response.statusText);
    }
    return response.json();
  });
}
