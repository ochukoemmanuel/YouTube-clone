import React from 'react';
import HomeContent from '../Page/Home/HomeContent';
import './Content.css'
import Sidebar from './Sidebar';

const Content = () => {
  
  return (
    <div className='content'>
      <Sidebar />
      <HomeContent />
    </div>
  );
};

export default Content;
