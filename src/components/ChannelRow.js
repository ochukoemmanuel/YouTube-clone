import React from 'react';
import './ChannelRow.css';

const ChannelRow = ({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) => {
  return (
    <div className='channelRow'>
      <img
        className='w-14 h-14 rounded-full channelRow__logo'
        src={image}
        alt={channel}
      />
      <div className='channelRow__text'>
        <h4>
          {channel}{' '}
          {verified && (
            <div>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          )}
        </h4>
        <p>
          {subs} subcribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
