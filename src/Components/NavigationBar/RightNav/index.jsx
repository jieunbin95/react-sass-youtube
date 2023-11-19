import React from 'react'
import { FaVideo } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { Tooltip} from 'react-tooltip';

const RightNav = () => {
  return (
    <div className='buttons'>
      <button className='icon-container'>
        <FaVideo size={25} data-tooltip-content='Create' data-tooltip-id='tooltip' />
      </button>

      <button className='icon-container'>
       <IoApps size={25} data-tooltip-content='Youtube Apps' data-tooltip-id='tooltip'/>
      </button>

      <button className='icon-container'>
       <IoIosNotifications size={25} data-tooltip-content='Notification' data-tooltip-id='tooltip' />
      </button>

     <Tooltip
      id='tooltip'
      backgroundColor='gray'
      place="top"
      arrowColor='transparent'
      />
     
    </div>
  )
}

export default RightNav
