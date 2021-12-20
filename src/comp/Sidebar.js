import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <div className='w-20 fixed top-0 h-screen bg-white flex items-center flex-col pt-4 mb-4 space-y-6 text-gray-900'>
        <button>
          <i className='material-icons'>menu</i>
        </button>
        <div className='mt-6 w-full'>
          <button className='flex flex-col text-center items-center justify-center py-4 hover:bg-gray-100 w-full text-red-600'>
            <i className='material-icons'>home</i>
            <span className='text-xs mt-3'>Home</span>
          </button>
          <button className='flex flex-col text-center items-center justify-center py-4 hover:bg-gray-100 w-full'>
            <i className='material-icons'>explore</i>
            <span className='text-xs mt-3'>Explore</span>
          </button>
          <button className='flex flex-col text-center items-center justify-center py-4 hover:bg-gray-100 w-full'>
            <i className='material-icons'>subscriptions</i>
            <span className='text-xs mt-3'>Subscription</span>
          </button>
          <button className='flex flex-col text-center items-center justify-center py-4 hover:bg-gray-100 w-full'>
            <i className='material-icons'>video_library</i>
            <span className='text-xs mt-3'>Library</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
