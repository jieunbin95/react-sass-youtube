import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import { SideBarContext } from '../../context/SideBarContext'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiFlagLine } from "react-icons/ri";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import formatNumber from '../../helpers/formatNumber';
import formatViews from '../../helpers/formatViews';
import formatText from '../../helpers/formatText';
import axios from '../../api/axios'
import RelatedVideo from './RelatedVideo';

const VideoPage = () => {
  dayjs.extend(relativeTime)
  const {videoId}=useParams()
  let location=useLocation()
  const {state:currentVideo}=location
  const {setIsToggled}=useContext(SideBarContext)
  console.log(currentVideo)

  const viewCount=formatNumber(currentVideo.extraInfo.viewCount)
  const comments=formatNumber(currentVideo.extraInfo.commentCount)

  const likes=formatViews(currentVideo.extraInfo.likeCount)
  const dislikes=formatViews(currentVideo.extraInfo.likeCount)
  const subscribers=formatViews(currentVideo.channelInfo.subscriberCount)

  const videoDescription=formatText(currentVideo.snippet.description)
  const [videoComments,setVideoComments]=useState([])

  const loadComments=useCallback(async()=>{
    setIsToggled(false)
    const response=await axios.get(`/commentThreads?part=snippet&videoId=${videoId}`)
    setVideoComments(response.data.items)
  },[videoId,setIsToggled])

  useEffect(()=>{
    loadComments()
  },[loadComments])

  const opts={
    width:'640',
    height:'390',
    playerVars:{
      autoplay:1
    }
  }

  const onPlayerReady=e=>{
    e.target.playVideo()
    // 자동재생
  }

  const videoHeaderMarkup=(
    <div className='video_main_info'>
      <div className='tags'>
        {currentVideo?.snippet?.tags?.map((item,index) => (
          <p className='tag' key={index}>#{item}</p>
        ))}
      </div>

      <h1>{currentVideo.snippet.title}</h1>
      <div className='videoplayer_metadata'>
        <span>
          {viewCount} views
        </span> 
        <span className='dot_separator'>&#183;</span>
        <span>{dayjs(currentVideo.snippet.publishedAt).format('MMM D,YYYY')}</span>
      </div>
    </div>

  )

  const videoCommentsMarkup=videoComments.map(item=>{
    const {id,snippet}=item.snippet.topLevelComment
    return(
      <div className='comment_container' key={id}>
        <div className='comment_avatar_container'>
          <img src={snippet.authorProfileImageUrl}/>
        </div>

        <div className='comment_text_container'>
          <div className='comment_author'>
            {snippet.authorDisplayName}
          </div>

          <span>
            {dayjs(snippet.publishedAt).fromNow()}
          </span>
        

          <div className='comment_text'>
           {snippet.textOriginal}
          </div>

         <div className='comment_buttons'>
           <div>
             <BiLike size={16}/>
             <span className='muted'>{snippet.likeCount}</span>
           </div>

           <div>
            <BiDislike size={16}/>
           </div>

           <span className='muted'>REPLY</span>
         </div>

        </div>
      </div>
    )

  })

  return (
    <section className='videoPage'>
      <div className='columns_container'>
        <div className='column column_1'>
           <div className='youtube_player_container'>
             <YouTube 
              className='youtube_player' 
              videoId={videoId}
              onPlay={onPlayerReady} 
              opts={opts}
              />
           </div>

           <div className='videoPlayer_info'>
             {videoHeaderMarkup}
             <div className='main_header_buttons'>
              <div className='likes_container'>
                <div className='likes'>
                  <BiLike size={25}/>
                  <span>{likes}</span>
                </div>

                <div className='dislikes'> 
                  <BiDislike size={25}/>
                  <span>{dislikes}</span>
                </div>
              </div>

              <div className='share'>
                <RiShareForwardLine size={25}/>
                <span>SHARE</span>
              </div>

              <div className='save'>
                <MdOutlinePlaylistAdd size={25}/>
                <span>SAVE</span>
              </div>

              <div className='report'>
                <RiFlagLine size={25}/>
              </div>

              </div>
           </div>


          <div className='channel_video_info'>
            <div className='channel_data'>
              <div className='channel_avatar'>
                <img src={currentVideo.channelInfo.thumbnails.default.url} alt='avatar'/>
              </div>

              <div className='channel_title'>
                <a href='/'>
                  {currentVideo.channelInfo.title}
                </a>
                <span>
                  {subscribers} subscribers
                </span>
              </div>

              <div className='channel_subscribe'>
                <button>
                  SUBSCRIBED
                </button>
              </div>
            </div>

            <div className='video_description'>
              {videoDescription}
            </div>
          </div>

          <div className='video_comments_container'>
            <div className='video_comments_count'>
              {comments} Comments
            </div>

            <div className='video_comments'>
              {videoCommentsMarkup}
            </div>
          </div>
         </div>


          <div className='column column_2'>
            <RelatedVideo currentVideo={videoId}/>
          </div>
     </div>
      
    </section>
  )
}

export default VideoPage
