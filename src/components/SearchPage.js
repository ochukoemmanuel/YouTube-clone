import React from 'react';
import ChannelRow from './ChannelRow';
import './Search.css';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='flex flex-col items-center ml-28 mt-32 mx-auto'>
      <div className='searchPage__filter'>
        <svg
          className='w-6 h-6 fa-rotate-45'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' />
        </svg>
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/300/150`}
        channel='Cleaver Programmer'
        subs='660k'
        noOfVideos={382}
        description='You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..'
        verified={true}
      />
      <hr />

      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a FREE one hour training...'
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title="🔴 Let's Build a REACT JS website"
        image={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/300/150`}
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a FREE one hour training...'
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title="🔴 Let's Build a REACT JS website"
        image={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/300/150`}
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a FREE one hour training...'
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title="🔴 Let's Build a REACT JS website"
        image={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/300/150`}
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a FREE one hour training...'
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title="🔴 Let's Build a REACT JS website"
        image={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/300/150`}
      />
      <VideoRow
        views='1.4M'
        subs='659k'
        description='Do you want a FREE one hour training...'
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title="🔴 Let's Build a REACT JS website"
        image={`https://picsum.photos/id/${Math.floor(
          Math.random() * 100
        )}/300/150`}
      />
    </div>
  );
};

export default SearchPage;
