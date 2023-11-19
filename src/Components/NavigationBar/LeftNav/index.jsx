import React, { useContext } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import imgUrl from '../../../assets/logo.png';
import { SideBarContext } from '../../../context/SideBarContext';

const LeftNav = () => {
  const {handleToggleSideBar}=useContext(SideBarContext)
  
  return (
    <div className='menu-logo'>
      <button  onClick={handleToggleSideBar} className='icon-container burgerMenu'>
        <IoMenu size={25}/>
      </button>

      <div className='logo-container'>
        <Link to='/'>
          <img src={imgUrl} alt='youtube'/>
        </Link>
      </div>
    </div>
  )
}

export default LeftNav
