import React from 'react'
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { MdOutlineExplore, MdOutlineSubscriptions } from 'react-icons/md';

const SmallSideBar = () => {
  return (
    <aside className='small_sidebar'>
      <div className='small_sidebar_container'>
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
    </aside>
  )
}

export default SmallSideBar
