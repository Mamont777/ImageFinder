import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onClick }) => {
  const { webformatURL, tags, largeImageURL } = item;
  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(largeImageURL)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  items: PropTypes.exact({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),

  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
