import React, { useState, useEffect } from 'react';
import { ToastContainer, Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import * as API from '../services/api.js';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async (page, query) => {
      try {
        setIsLoading(true);
        const { images, totalHits } = await API.loadImage(query, page);

        if (images.length === 0) {
          return toast.warning(
            "Sorry, we can't find anything for your request. Please, enter another request"
          );
        }
        setItems(prevItems => [...prevItems, ...images]);
        setTotalHits(totalHits);
        if (totalHits && page === 1) {
          toast.success(`Found ${totalHits} images`);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages(page, query);
  }, [page, query]);

  const toggleModal = (url = '') => {
    setLargeImageURL(url);
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setItems([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} isLoading={isLoading} />
      {error && <p>{error}</p>}
      {items.length > 0 && <ImageGallery items={items} onClick={toggleModal} />}
      {page < Math.ceil(totalHits / 12) && (
        <Button onLoadMore={handleLoadMore} isLoading={isLoading} />
      )}
      <ToastContainer transition={Slide} />
      {isLoading && <Loader />}
      {isModalOpen && <Modal onClose={toggleModal} url={largeImageURL} />}
    </Container>
  );
}
