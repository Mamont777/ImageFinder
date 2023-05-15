import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';

const notifyOptions = {
  position: 'top-center',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      return toast.info('Please enter key words for search', notifyOptions);
    }
    onSubmit(inputValue);
    clearForm();
  };
  const clearForm = () => {
    setInputValue('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <FcSearch size="32" />
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and fotos"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
