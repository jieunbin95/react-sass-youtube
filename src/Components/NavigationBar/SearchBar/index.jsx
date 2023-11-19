/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import useWindowSize from '../../../helpers/useWindowSize';
import { SearchContext } from '../../../context/SearchContext';


const SearchBar = ({handleChange,handleSubmit}) => {
  const {width}=useWindowSize()
  const {setShowSpecialSearchBar}=useContext(SearchContext)

  return (
    <div className={`SearchBar ${width<=640 ? 'smallSearch':''}`}>
      {width > 640 ? (
        <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' name='search' placeholder='Search'/>
        <button type='submit'>
          <ImSearch size={20}/>
        </button>
      </form> )
      :
      <button onClick={()=>setShowSpecialSearchBar(true)} className='icon-container searchIcon' type='submit'>
          <ImSearch size={20}/>
      </button>
      }
      
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25}/>
      </button>
    </div>
  )
}

export default SearchBar

