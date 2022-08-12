import React, { useState } from 'react'
import './app.scss'
import 'carbon-10-icon-animations/dist/index.css'

import {
  AddToSubtractMotion,
  ArrowUpMotion,
  ChevronDownMotion,
  ChevronUpMotion,
  DownToBottomMotion,
  DraggableMotion,
  HomeMotion,
  MenuToCloseMotion,
  OverflowMenuHorizontalMotion,
  PageFirstMotion,
  PageLastMotion,
  SelectWindowMotion,
  SwitcherToCloseMotion,
  UpToTopMotion,
  ZoomInAreaMotion
} from 'carbon-10-icon-animations'

const App = () => {
  const [addToSubtractAnimating, setAddToSubtractAnimating] = useState(false)
  const [arrowUpAnimating, setArrowUpAnimating] = useState(false)
  const [chevronDownAnimating, setChevronDownAnimating] = useState(false)
  const [chevronUpAnimating, setChevronUpAnimating] = useState(false)
  const [downToBottomAnimating, setDownToBottomAnimating] = useState(false)
  const [draggableAnimating, setDraggableAnimating] = useState(false)
  const [homeAnimating, setHomeAnimating] = useState(false)
  const [menuToCloseAnimating, setMenuToCloseAnimating] = useState(false)
  const [overflowMenuHorizontalAnimating, setOverflowMenuHorizontalAnimating] = useState(false)
  const [pageFirstAnimating, setPageFirstAnimating] = useState(false)
  const [pageLastAnimating, setPageLastAnimating] = useState(false)
  const [selectWindowAnimating, setSelectWindowAnimating] = useState(false)
  const [switcherToCloseAnimating, setSwitcherToCloseAnimating] = useState(false)
  const [upToTopAnimating, setUpToTopAnimating] = useState(false)
  const [zoomInAreaAnimating, setZoomInAreaAnimating] = useState(false)

  return (
    <div className="app">
    <h1 className="page-title">Carbon Animated Icons</h1>
    <ul className='tiles-container'>
      <li
        className='icon-tile'
        onMouseEnter={() => setAddToSubtractAnimating(true)}
        onMouseLeave={() => setAddToSubtractAnimating(false)}
      >
        <h3>Add to subtract</h3>
        <AddToSubtractMotion
          isAnimating={addToSubtractAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setArrowUpAnimating(true)}
        onMouseLeave={() => setArrowUpAnimating(false)}
      >
        <h3>Arrow up</h3>
        <ArrowUpMotion 
          isAnimating={arrowUpAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setChevronDownAnimating(true)}
        onMouseLeave={() => setChevronDownAnimating(false)}
      >
        <h3>Chevron down</h3>
        <ChevronDownMotion
          isAnimating={chevronDownAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setChevronUpAnimating(true)}
        onMouseLeave={() => setChevronUpAnimating(false)}
      >
        <h3>Chevron up</h3>
        <ChevronUpMotion
          isAnimating={chevronUpAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setDownToBottomAnimating(true)}
        onMouseLeave={() => setDownToBottomAnimating(false)}
      >
        <h3>Down to bottom</h3>
        <DownToBottomMotion
          isAnimating={downToBottomAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setDraggableAnimating(true)}
        onMouseLeave={() => setDraggableAnimating(false)}
      >
        <h3>Draggable</h3>
        <DraggableMotion
          isAnimating={draggableAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setHomeAnimating(true)}
        onMouseLeave={() => setHomeAnimating(false)}
      >
        <h3>Home</h3>
        <HomeMotion 
          isAnimating={homeAnimating} 
          width={32} 
          height={32} 
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setMenuToCloseAnimating(true)}
        onMouseLeave={() => setMenuToCloseAnimating(false)}
      >
        <h3>Menu to close</h3>
        <MenuToCloseMotion
          isAnimating={menuToCloseAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setOverflowMenuHorizontalAnimating(true)}
        onMouseLeave={() => setOverflowMenuHorizontalAnimating(false)}
      >
        <h3>Overflow menu horizontal</h3>
        <OverflowMenuHorizontalMotion
          isAnimating={overflowMenuHorizontalAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setPageFirstAnimating(true)}
        onMouseLeave={() => setPageFirstAnimating(false)}
      >
        <h3>Page first</h3>
        <PageFirstMotion
          isAnimating={pageFirstAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setPageLastAnimating(true)}
        onMouseLeave={() => setPageLastAnimating(false)}
      >
        <h3>Page last</h3>
        <PageLastMotion
          isAnimating={pageLastAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setSelectWindowAnimating(true)}
        onMouseLeave={() => setSelectWindowAnimating(false)}
      >
        <h3>Select window</h3>
        <SelectWindowMotion
          isAnimating={selectWindowAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setSwitcherToCloseAnimating(true)}
        onMouseLeave={() => setSwitcherToCloseAnimating(false)}
      >
        <h3>Switcher to close</h3>
        <SwitcherToCloseMotion
          isAnimating={switcherToCloseAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setUpToTopAnimating(true)}
        onMouseLeave={() => setUpToTopAnimating(false)}
      >
        <h3>Up to top</h3>
        <UpToTopMotion isAnimating={upToTopAnimating} width={32} height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setZoomInAreaAnimating(true)}
        onMouseLeave={() => setZoomInAreaAnimating(false)}
      >
        <h3>Zoom in area</h3>
        <ZoomInAreaMotion
          isAnimating={zoomInAreaAnimating}
          width={32}
          height={32}
        />
      </li>
    </ul>
    </div>
  )
}

export default App
