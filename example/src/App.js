import React, { useRef, useState, useEffect } from 'react'
import './app.scss';
import 'carbon-10-icon-animations/dist/index.css'


import { AddToSubtractMotion, ArrowUpMotion, ChevronDownMotion, ChevronUpMotion, DownToBottomMotion, DraggableMotion, HomeMotion, MenuToCloseMotion, OverflowMenuHorizontalMotion, SelectWindowMotion, PageFirstMotion, PageLastMotion, SwitcherToCloseMotion,UpToTopMotion, ZoomInAreaMotion } from 'carbon-10-icon-animations'

const App = () => {

   const [iconOnePlaying, setIconOnePlaying] = useState(false)


  return (
    <div>
    <div className="icon-tile"
        onMouseEnter={() => setIconOnePlaying(true)}
        onMouseLeave={() => setIconOnePlaying(false)}>

      <AddToSubtractMotion 
        isPlaying={iconOnePlaying}    
        width={48}
        height={48} />
    </div>


    <ArrowUpMotion />
    <ChevronDownMotion />
    <ChevronUpMotion />
    <DownToBottomMotion />
    <DraggableMotion />
    <HomeMotion />
    <MenuToCloseMotion />
    <OverflowMenuHorizontalMotion />
    <SelectWindowMotion />
    <PageFirstMotion />
    <PageLastMotion />
    <SwitcherToCloseMotion />
    <UpToTopMotion />
    <ZoomInAreaMotion />
    <ChevronDownMotion />
    </div>
    )
}

export default App
