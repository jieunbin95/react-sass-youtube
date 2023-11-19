import axios from '../api/axios'

//api로 추가 내용을 가지고 온다
export const getVideoInfo=async(videoArr)=>{
  try{
    for(let video of videoArr){
      const response=await axios.get(`/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${video.id.videoId}`)
      Object.assign(video.snippet, {...response.data.items[0].snippet})
      //Object.assign을 이용해 기존에 가져온 snippet에 추가 내용을 넣어준다(객체+객체를 넣을 때 사용)


      //기존에 없었던 extraInfo를 만들어 그 안에 추가내용을 넣어준다
      video.extraInfo=Object.assign(
        {},
        response.data.items[0].tags,
        response.data.items[0].contentDetails,
        response.data.items[0].statistics,
        response.data.items[0].player
      )

      const channel= await axios.get(`/channels?part=snippet&part=statistics&part=contentDetails&id=${video.snippet.channelId}`)
      const channelInfo=Object.assign(
        {},
        channel?.data?.items[0]?.snippet,
        channel.data.items[0].statistics
      )
      video.channelInfo=channelInfo
    }

    return videoArr

  }catch(e){
    console.log(e.message)
  }
}


export const getRelatedVideos = async (videoId) => {
  try {
    const response = await axios.get(
      `/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`
    )
    return response.data.items
    
    
  } catch (err) {
    console.log(err)
  }
}

