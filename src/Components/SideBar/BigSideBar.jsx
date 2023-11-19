import React from 'react'
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";

import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa6";

const BigSideBar = () => {
  return (
    <aside className='big_sidebar'>
      <div className='big_sidebar-container'>
        <div className='sidebar_section'>
          <Link to='/'>
            <div className='sidebar_icon_container'>
              <TiHome size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Home</h4>
            </div>
          </Link>

          <Link to='/feed/explore'>
            <div className='sidebar_icon_container'>
              <MdOutlineExplore size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Explore</h4>
            </div>
          </Link>

          <Link to='/feed/subscriptions'>
            <div className='sidebar_icon_container'>
              <MdOutlineSubscriptions size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Subscriptions</h4>
            </div>
          </Link>
        </div>


        <div className='sidebar_section'>
         <Link to='/feed/library'>
            <div className='sidebar_icon_container'>
              <MdOutlineVideoLibrary size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Library</h4>
            </div>
          </Link>

         <Link to='/feed/history'>
            <div className='sidebar_icon_container'>
              <FaHistory size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>History</h4>
            </div>
          </Link>

         <Link to='/feed/watch'>
            <div className='sidebar_icon_container'>
              <MdOutlineWatchLater size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Watch Later</h4>
            </div>
          </Link>
          
         <Link to='/feed/videos'>
            <div className='sidebar_icon_container'>
              <AiOutlineLike size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Liked videos</h4>
            </div>
          </Link>
        </div>

        <div className='sidebar_section'>
         <Link to='/feed/setting'>
            <div className='sidebar_icon_container'>
              <IoSettingsOutline size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Setting</h4>
            </div>
          </Link>

         <Link to='/feed/report'>
            <div className='sidebar_icon_container'>
              <FaRegFlag size={23} className='sidebar_icon'/>
              <h4 className='sidebar_text'>Report history</h4>
            </div>
          </Link>
        </div>

      </div>
    </aside>
  )
}

export default BigSideBar


















