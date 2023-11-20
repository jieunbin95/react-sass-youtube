const formatTimeVideo=str=>{
  if(!str.startsWith('PT')){
    return null
  }

  const time=str.substring(2)
  let duration=''
  for(let i=0; i<time.length; i++){
    if(!Number(time[i])){
      //0이거나 텍스트인 경우
      duration += ':'
    } else if(i>0 && !Number(time[i-1]) && !Number(time[i+1])){
      //0보다 크고 앞,뒤에 0또는 텍스트가 있는경우
      duration += '0' + time[i]
    } else {
      duration += time[i]
    }
  }

  if (time.indexOf('H') === -1 
  && time.indexOf('M') === -1 
  && time.endsWith('S')){
    //'H'와 'M'이 없고 's가 있는경우
    const [min]=duration.slice(0,-1)

    return `00:${min}`
  }
  else if(duration.endsWith('::')){
    return duration.slice(0,-2)
  } else{
    const result=duration.replace('::',':')
    return result.slice(0,-1)
  }
}

export default formatTimeVideo