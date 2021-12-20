import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import Sidebar from './Sidebar';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');

  const search = (e) => {
    // if (inputSearch === '') {
    //   return;
    // }

    setInputSearch(e);
  };

  return (
    <div className='bg-white bg-opacity-95'>
      <div className='flex justify-between items-center h-14 mx-4 ml-20 '>
        <div>
          <Link to={`/`}>
            <img
              className='w-20 h-22'
              src={`https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg`}
              alt='youtubelogo'
            />
          </Link>
        </div>
        <div className='flex justify-center items-center flex-grow'>
          <input
            onChange={(e) => search(e.target.value)}
            value={inputSearch}
            className='border border-gray-400 h-8 px-1 py-2 focus:outline-none focus:border-blue-600 w-4/12'
            type='text'
            placeholder='Search'
          />
          <Link to={`/search/${inputSearch}`}>
            <button
              onClick={() => search()}
              className='bg-gray-200 flex items-center justify-center h-8  w-16 border border-gray-400 border-1-0 hover:bg-gray-300'
            >
              <i className='material-icons'>search</i>
            </button>
          </Link>
        </div>
        <div className='flex justify-center items-center space-x-4'>
          <button className='flex justify-cente items-center'>
            <i className='material-icons'>video_call</i>
          </button>
          <button className='flex justify-cente items-center'>
            <i className='material-icons'>apps</i>
          </button>
          <button className='flex justify-cente items-center'>
            <i className='material-icons'>notifications</i>
          </button>
          <div className='w-8 h-8 rounded-full bg-blue-300'></div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Header;
