import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import SearchedVideoPage from './pages/SearchedVideoPage'
import VideoPage from './pages/VideoPage'
import NavigationBar from './Components/NavigationBar'
import SideBar from './Components/SideBar'

const Layout=()=>{
  return(
    <>
    <NavigationBar/>
    <SideBar/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}></Route>
          <Route path='/result/:input' element={<SearchedVideoPage/>}></Route>
          <Route path='/video/:videoId' element={<VideoPage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
