import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <i className='fas fa-bars' />
        <img
          className='logo'
          src={`https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg`}
          alt='youtubelogo'
        />
        {/* <i class='fab fa-youtube logo' /> */}
      </div>
      <div className='header-center'>
        <div className='search'>
          <input type='text' placeholder='Search' className='search-box' />
          <button className='search-btn'>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </div>
      <div className='header-right'>
        <div className='user-info'>
          <i className='far fa-comment-alt'></i>
          <i className='far fa-bell'></i>
          <i className='fas fa-user-circle'></i>
        </div>
        <div className='upload'>
          <button className='upload-btn'>
            <i className='fas fa-long-arrow-alt-up'></i>{' '}Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
