import React from 'react';
import Post from './Post';
import VideoCard from './VideoCard';

const Content = () => {
  return (
    <div className='ml-20 pt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-9'>
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <VideoCard
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
      </div>
      <hr className='mb-6' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-9'>
        <Post
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <Post
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
        <Post
          title='Become a web Developer in 10 minutes | 2021/2022'
          views='2.3M views'
          timestamp='3 days'
          channelImage={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
          channel='Sonny'
          image={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/300/150`}
        />
      </div>
    </div>
  );
};

export default Content;
