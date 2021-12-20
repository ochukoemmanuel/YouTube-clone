import React from 'react';

const VideoCard = ({
  title,
  views,
  timestamp,
  channelImage,
  channel,
  image,
}) => {
  return (
    <div className='mt-4 px-9'>
      <div className='w-72'>
        <img
          className='h-40 w-full bg-gray-700'
          src={channelImage}
          alt={`img`}
        />
        <div className='flex mt-2'>
          <img
            className='h-10 w-10 bg-blue-300 rounded-full flex-shrink-0'
            src={image}
            alt={`img`}
          />
          <div className='ml-2'>
            <div className='text-base font-medium'>{title}</div>
            <div className='text-sm font-gray-600'>
              <p>{channel}</p>
              <p>
                {views} <span className='font-black'>&middot;</span> {timestamp}{' '}
                ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
