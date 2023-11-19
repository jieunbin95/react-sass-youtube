import React, { useContext } from 'react'
import LeftNav from './LeftNav'
import SearchBar from './SearchBar'
import RightNav from './RightNav'
import { GoArrowLeft } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import useWindowSize from '../../helpers/useWindowSize';
import { SearchContext } from '../../context/SearchContext';
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom';


const NavigationBar = () => {
  const {width}=useWindowSize()
  const {searchQuery,setSearchQuery,
    showSpecialSearchBar,setShowSpecialSearchBar}=useContext(SearchContext)
  const navigate=useNavigate()


  const handleChange=(e)=>{
    setSearchQuery({
      ...searchQuery,
      input:e.target.value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(searchQuery.input !== ''){
      const response=await axios.get(`/search?part=snippet&maxResults=10&q=${searchQuery.input}`)
      setSearchQuery({
        ...searchQuery,
        videos:response.data.items
      })
      navigate(`/result/${searchQuery.input}`)
    }
    }

  const specialSearchBar=(
    <div className='special_searchbar'>
      <button onClick={()=>setShowSpecialSearchBar(false)}>
       <GoArrowLeft size={25} />
      </button>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' name='search' placeholder='Search'/>
        <button type='submit'>
          <ImSearch size={20}/>
        </button>
      </form>

      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25}/>
      </button>
    </div>
  )

  return (
    <nav className='Navbar'>
      {width <= 640 && showSpecialSearchBar ? 
        specialSearchBar
      :
      <>
        <LeftNav/>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
        <RightNav/>
      </>
      }
    </nav>
  )
}

export default NavigationBar
