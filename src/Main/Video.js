import React from 'react'
import './Video.css'
const Duration = require('duration')

const Video = ({ video: { thumbnail, title, length, channel, viewCount, uploadedAt  } }) => {
  const getViewString = viewCount => {
    const numberOfChar = viewCount.toString().length
    let unit = ''
    let renderView = ''

    if(numberOfChar >= 10){
      renderView = (viewCount/1000000000).toFixed(1)
      unit = 'B'
    } else if(numberOfChar >= 7) {
      renderView = (viewCount/1000000).toFixed(1)
      unit = 'M'
    }else if(numberOfChar >= 4) {
      renderView = (viewCount/1000).toFixed(1)
      unit = 'K'
    } else {
      renderView = (viewCount)
      unit = ''
    }

    return `${renderView}${unit}`
  }

  const getUploadedString = uploadedAt => {
    const duration = new Duration(new Date(uploadedAt), new Date())
    let unit = ''
    let renderView = ''
    if(duration.years >= 1){
      renderView = duration.years
      unit = 'years'
    } else if(duration.months >= 1){
      renderView = duration.months
      unit = 'months'
    } else if(duration.days >= 1){
      renderView = duration.days
      unit = 'days'
    } else if(duration.hours >= 1){
      renderView = duration.hours
      unit = 'hours'
    } else {
      renderView = ''
      unit = ''
    }

    return `${renderView} ${unit}`
  }

  const getLengthString = () => {
    var sec_num = parseInt(length)
    var hours = Math.floor(sec_num/3600)
    var minutes = Math.floor(sec_num/60) % 60
    var seconds = sec_num % 60

    return ([hours, minutes, seconds].map((v) => v < 10 ? "0" + v : v
    )
    .filter((v, i) => v !== "00" || i > 0)
    .join(":")
      )

  }

  return (
    <div className='video'>
      <div className='thumbnail'>
        <img src={thumbnail} alt={title} />
        <span className='length'>{getLengthString(length)}</span>
      </div>
      <h4 className='title'>{title}</h4>
      <p className='channel'>
        <a href={channel.link}>{channel.name}</a>
      </p>
      <p className='video-info'>
        <span className='view-count'>{getViewString(viewCount)} views</span>
        <span className='point-divider'>.</span>
        <span className='uploaded-at'>{getUploadedString(uploadedAt)} ago</span>
      </p>
    </div>
  )
}

export default Video