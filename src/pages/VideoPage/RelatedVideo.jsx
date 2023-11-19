/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react'
import { getRelatedVideos, getVideoInfo } from '../../helpers/fetchingData'
import VideoCard from '../../Components/VideoCard'

const RelatedVideo = ({currentVideo}) => {
  const [relatedVideos,setRelatedVideo]=useState([])

  const loadRelativeVideo=useCallback(async()=>{
    const relVideos=await getRelatedVideos(currentVideo)
    const relVideosInfo= await getVideoInfo(relVideos)
    setRelatedVideo(relVideosInfo)
  },[currentVideo])

  useEffect(()=>{
    loadRelativeVideo()
  },[loadRelativeVideo])

  const relatedVideoMarkup= relatedVideos?.map(item=>(
    <VideoCard
          key={item.id.videoId}
          id={item.id.videoId}
          video={item}
          img={item.snippet.thumbnails.medium.url}
          info={item.snippet}
          eInfo={item.extraInfo}
          channelInfo={item.channelInfo}
    />
  ))

  return (
    <div className='related_list'>
      {relatedVideoMarkup}
    </div>
  )
}

export default RelatedVideo
