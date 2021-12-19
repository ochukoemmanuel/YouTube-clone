import React from 'react'
import Video from './Video'
import './VideoRow.css'

const VideoRow = ({ type, label, videos, channel }) => {

  const renderRowLabel = () => {
    if(type === 'normal') {
      return <h3 className='videos-row-label'>{label}</h3>
    }

    if(type === 'channel') {
      return (
        <div className='videos-row-label-channel'>
          <div className='left'>            
            <img src={channel.image} alt="avater" className='avatar' />
            <h3 className='video-row-label'>{channel.name}</h3>
            <span className='small-text'>Recommended channel for you</span>
          </div>
          <div className='right'>
            <button className='subscribe-btn'>
              Subscribe
            </button>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='videos-row-container'>
      <div className='row'>
        <div className='video-label-container'>
          {renderRowLabel()}
        </div>
        <div className='videos-row-item'>
          {videos.map((video, index) => {
          return (<Video key={index} video={video}/>)
           })}
        </div>
      </div>
    </div>
  )
}

export default VideoRow