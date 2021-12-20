import React from 'react';

const Category = () => {
  return (
    <div className='bg-white bg-opacity-95 '>
      <hr />
      <div className='flex items-center px-2 py-3 text-sm space-x-4 ml-20'>
        <span className=' bg-black border-none rounded-full px-4 py-2 text-sm text-white'>
          All recommendation
        </span>
        <span className='shadow-sm bg-gray-200 border-gray-800 rounded-full px-4 py-2 text-sm'>
          Sports
        </span>
        {/* <span className='shadow-sm bg-gray-200 border-gray-800 rounded-full px-4 py-2 text-sm'>
          Programming
        </span>
        <span className='shadow-sm bg-gray-200 border-gray-800 rounded-full px-4 py-2 text-sm'>
          Reactjs
        </span> */}
      </div>
      <hr />
    </div>
  );
};

export default Category;
