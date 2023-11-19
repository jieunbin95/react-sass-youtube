import React from 'react';

const formatText= text =>{
  const formattedText=text.split(' ').map((item,index)=>
    item.startsWith('http') 
    ? 
    <a key={index} href={item}>{item}</a> 
    : 
    <span key={index}>{item}</span>
  )

  return formattedText
}

export default formatText