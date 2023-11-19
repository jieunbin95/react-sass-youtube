import React, { useCallback, useContext, useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getVideoInfo } from '../../helpers/fetchingData'
import VideoCard from '../../Components/VideoCard'
import { SideBarContext } from '../../context/SideBarContext'

const MainPage = () => {
  const storeVideos=JSON.parse(localStorage.getItem('mainVideos'))
  const [mainVideos,setMainVideos]=useState(storeVideos || [])
  const {setIsToggled}=useContext(SideBarContext)

  const getMainVideos=useCallback(async()=>{
    try{
      if(!storeVideos){
        const response=await axios.get('/search?part=snippet&maxResults=10&q=travel')
        let videoArray=await response.data.items
        videoArray=await getVideoInfo(videoArray)
        setMainVideos(videoArray)
        localStorage.setItem('mainVideos', JSON.stringify(videoArray))
      }
      
    }catch(e){
      console.log(e.message)
    }
    
  },[])

  useEffect(()=>{
    getMainVideos()
    setIsToggled(true)
  },[getMainVideos])

  return (
    <section className='mainGallery'>
      {mainVideos.map(item=>(
        <VideoCard
          key={item.id.videoId}
          id={item.id.videoId}
          video={item}
          img={item.snippet.thumbnails.medium.url}
          info={item.snippet}
          eInfo={item.extraInfo}
          channelInfo={item.channelInfo}
        />
      ))}
    </section>
  )
}

export default MainPage
