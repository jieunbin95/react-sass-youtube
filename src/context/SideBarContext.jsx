import { createContext, useState} from "react";
import React from "react";

export const SideBarContext=createContext();

export const SideBarContextProvider=(props)=>{
  const [isToggled, setIsToggled]=useState(true)

  const handleToggleSideBar=()=>{
    setIsToggled(!isToggled);
  }

  return(
    <SideBarContext.Provider
      value={{isToggled, setIsToggled, handleToggleSideBar}}
    {...props}/>
  )
}