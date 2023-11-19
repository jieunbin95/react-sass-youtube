/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { HiDotsVertical } from "react-icons/hi";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import formatViews from '../../helpers/formatViews';
import formatTimeVideo from '../../helpers/formatTimeVideo';

const VideoCard = ({id,video,img,info,eInfo,channelInfo}) => {
  dayjs.extend(relativeTime)
  const time=dayjs(info.publishedAt).fromNow()
  const views=formatViews(eInfo.viewCount)
  const duration=formatTimeVideo(eInfo.duration)

  return (
    <div className='videoCard'>
      <Link to={`/video/${id}`} state={{...video}}>
         <div className='video_preview'>
           <img src={img} alt={info.channelTitle}/>
           {duration ? <div className='duration'>{duration}</div> : null}
         </div>

         <div className='video_info_container'>
            <div className='avatar_container'>
              <img src={img} alt={info.channelTitle} className='avatar'/>
            </div>
        
           <div className='video_text_container'>
              <h3>{info.title.length >60 ? (info.title.substring(0,60)+'...') : info.title}</h3>
             <div className='video_info'>
               <Link to={`/channel/${channelInfo.customUrl}`}>
                 <div className='channelName'>
                 {info.channelTitle}
                 </div>
               </Link>
               <div className='video_metadata'>
                 <span>{views}</span>&nbsp;
                 <span className='dot_separator'>&#183;</span>&nbsp;
                 <span>{time}</span>
               </div>
             </div>
            </div>

              <div className='dots_container'>
               <HiDotsVertical size={25} className='dots'/>
              </div>
         </div>

         
      </Link>
    </div>
  )
}

export default VideoCard
