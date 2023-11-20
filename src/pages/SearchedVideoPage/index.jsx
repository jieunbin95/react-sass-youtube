import React, { useCallback, useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../context/SearchContext'
import { getVideoInfo } from '../../helpers/fetchingData'
import VideoCard from '../../Components/VideoCard'

const SearchedVideoPage = () => {
  const [searchedVideos,setSearchVideos]=useState([])
  const {searchQuery}=useContext(SearchContext)

  const loadVideoInfo=useCallback(async() => {
    const videos=await getVideoInfo(searchQuery.videos)
    setSearchVideos(videos)
  },[searchQuery.videos])

  useEffect(()=>{
    loadVideoInfo()
  },[loadVideoInfo])

  const searchVideoMarkup=searchedVideos?.map(
    item => (
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
    <section className='searchedVideos'>
      {searchVideoMarkup}
    </section>
  )
}

export default SearchedVideoPage
