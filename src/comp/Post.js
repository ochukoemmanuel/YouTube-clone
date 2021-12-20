import React from 'react';

const Post = ({ title, views, timestamp, channelImage, channel, image }) => {
  return (
    <div className='m-9'>
      <h3 className='text-xl font-bold mb-6'>Latest YouTube posts</h3>
      <div>
        <div className='w-94 bg-white flex flex-col px-4 py-3'>
          <div className='flex items-center'>
            <div className='w-6 h-6 bg-blue-300 rounded-full'></div>
            <div className='text-sm text-gray-600 ml-2'>
              <p>Build Mearn stack Apps · 1 hour ago</p>
            </div>
          </div>

          <div className='flex mt-3'>
            <p>
              In this video we build out a modern landing page using the utility
              first css framework, Tailwind CSS.
            </p>
            <img
              className='w-32 h-32 bg-gray-100 flex-shrink-0'
              src={channelImage}
              atl='img'
            />
          </div>
          <div className='flex items-center justify-between text-sm text-gray-400 mt-3'>
            <div className='flex items-center'>
              <button>
                <i className='material-icons'>thumb_up</i>
              </button>
              <div className='ml-2.5'>179</div>
              <button className='ml-4'>
                <i className='material-icons small'>thumb_down</i>
              </button>
            </div>
            <div className='flex items-start'>
              <button>
                <i className='material-icons small'>comment</i>
              </button>
              <div className='ml-2.5'>179</div>
              <button className='ml-4'>
                <i className='material-icons small'>more_vert</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
