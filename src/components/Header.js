import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [inputSearch, setInputSearch] = useState('');

  const search = (e) => {
    setInputSearch(e);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <i className='fas fa-bars'></i>
        <Link to={`/`}>
          <img
            className='header__logo'
            src={`https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg`}
            alt='youtubelogo'
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          onChange={(e) => search(e.target.value)}
          value={inputSearch}
          placeholder='Search...'
          type='text'
        />
        <Link to={`/search/${inputSearch}`}>
          <button
            onClick={() => console.log(inputSearch)}
            className='header__inputButton'
          >
            <i className='fas fa-search' />
          </button>
        </Link>
      </div>
      <div className='header__icons'>
        <svg
          className='header__icon w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
        </svg>
        <svg
          className='header__icon w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
        </svg>
        <svg
          className='header__icon w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
        </svg>
        <svg
          className='header__icon w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
