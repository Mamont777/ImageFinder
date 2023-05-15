import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '34641575-5b7af07926b499b252d30275f';
const BASE_PARAMS = 'image_type=photo&orientation=horizontal&per_page=12';

export const loadImage = async (query, page) => {
  try {
    const response = await axios.get(
      `?q=${query}&page=${page}&key=${API_KEY}&${BASE_PARAMS}`
    );
    const { hits, totalHits } = response.data;

    const images = hits.map(img => {
      const { id, webformatURL, largeImageURL, tags } = img;
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    });

    return { images, totalHits };
  } catch (error) {
    console.error(error);
  }
};
