<<<<<<< HEAD
import React, { useState } from 'react'
import './app.scss'
import 'carbon-10-icon-animations/dist/index.css'

import {
  AddMotion,
  AddAltMotion,
  AddFilledMotion,
  AddToSubtractMotion,
  ArrowDownMotion,
  ArrowDownLeftMotion,
  ArrowDownRightMotion,
  ArrowLeftMotion,
  ArrowRightMotion,
  ArrowUpMotion,
  ArrowUpLeftMotion,
  ArrowUpRightMotion,
  ChevronDownMotion,
  ChevronUpMotion,
  ChevronLeftMotion,
  ChevronRightMotion,
  CaretDownMotion,
  CaretUpMotion,
  CaretLeftMotion,
  CaretRightMotion,
  CloseMotion,
  CloseOutlineMotion,
  CloseFilledMotion,
  SubtractMotion,
  SubtractAltMotion,
  DownToBottomMotion,
  DraggableMotion,
  HomeMotion,
  MenuToCloseMotion,
  OverflowMenuHorizontalMotion,
  OverflowMenuVerticalMotion,
  PageFirstMotion,
  PageLastMotion,
  SelectWindowMotion,
  SwitcherToCloseMotion,
  UpToTopMotion,
  ZoomInAreaMotion,
  ZoomAreaMotion,
  ZoomOutAreaMotion,
  ZoomFitMotion,
  ZoomInMotion,
  ZoomOutMotion,
  ZoomResetMotion,
  SwitcherMotion,
  AppsMotion,
  MenuMotion
} from 'carbon-10-icon-animations'

const App = () => {
  const [addAnimating, setAddAnimating] = useState(false)
  const [addAltAnimating, setAddAltAnimating] = useState(false)
  const [addFilledAnimating, setAddFilledAnimating] = useState(false)
  const [addToSubtractAnimating, setAddToSubtractAnimating] = useState(false)
  const [arrowUpAnimating, setArrowUpAnimating] = useState(false)
  const [arrowDownAnimating, setArrowDownAnimating] = useState(false)
  const [arrowDownLeftAnimating, setArrowDownLeftAnimating] = useState(false)
  const [arrowDownRightAnimating, setArrowDownRightAnimating] = useState(false)
  const [arrowLeftAnimating, setArrowLeftAnimating] = useState(false)
  const [arrowRightAnimating, setArrowRightAnimating] = useState(false)
  const [arrowUpLeftAnimating, setArrowUpLeftAnimating] = useState(false)
  const [arrowUpRightAnimating, setArrowUpRightAnimating] = useState(false)
  const [chevronDownAnimating, setChevronDownAnimating] = useState(false)
  const [chevronUpAnimating, setChevronUpAnimating] = useState(false)
  const [chevronLeftAnimating, setChevronLeftAnimating] = useState(false)
  const [chevronRightAnimating, setChevronRightAnimating] = useState(false)
  const [caretDownAnimating, setCaretDownAnimating] = useState(false)
  const [caretUpAnimating, setCaretUpAnimating] = useState(false)
  const [caretLeftAnimating, setCaretLeftAnimating] = useState(false)
  const [caretRightAnimating, setCaretRightAnimating] = useState(false)
  const [closeAnimating, setCloseAnimating] = useState(false)
  const [closeOutlineAnimating, setCloseOutlineAnimating] = useState(false)
  const [closeFilledAnimating, setCloseFilledAnimating] = useState(false)
  const [subtractAnimating, setSubtractAnimating] = useState(false)
  const [subtractAltAnimating, setSubtractAltAnimating] = useState(false)
  const [downToBottomAnimating, setDownToBottomAnimating] = useState(false)
  const [draggableAnimating, setDraggableAnimating] = useState(false)
  const [homeAnimating, setHomeAnimating] = useState(false)
  const [menuToCloseAnimating, setMenuToCloseAnimating] = useState(false)
  const [overflowMenuHorizontalAnimating, setOverflowMenuHorizontalAnimating] = useState(false)
  const [overflowMenuVerticalAnimating, setOverflowMenuVerticalAnimating] = useState(false)
  const [pageFirstAnimating, setPageFirstAnimating] = useState(false)
  const [pageLastAnimating, setPageLastAnimating] = useState(false)
  const [selectWindowAnimating, setSelectWindowAnimating] = useState(false)
  const [switcherToCloseAnimating, setSwitcherToCloseAnimating] = useState(false)
  const [upToTopAnimating, setUpToTopAnimating] = useState(false)
  const [zoomInAreaAnimating, setZoomInAreaAnimating] = useState(false)
  const [zoomAreaAnimating, setZoomAreaAnimating] = useState(false)
  const [zoomOutAreaAnimating, setZoomOutAreaAnimating] = useState(false)
  const [zoomFitAnimating, setZoomFitAnimating] = useState(false)
  const [zoomInAnimating, setZoomInAnimating] = useState(false)
  const [zoomOutAnimating, setZoomOutAnimating] = useState(false)
  const [zoomResetAnimating, setZoomResetAnimating] = useState(false)
  const [switcherAnimating, setSwitcherAnimating] = useState(false)
  const [appsAnimating, setAppsAnimating] = useState(false)
  const [menuAnimating, setMenuAnimating] = useState(false)

  return (
    <div className="app">
    <h1 className="page-title">Carbon Animated Icons</h1>
    <ul className='tiles-container'>
    <li
        className='icon-tile'
        onMouseEnter={() => setAddAnimating(true)}
        onMouseLeave={() => setAddAnimating(false)}
      >
        <h3>Add</h3>
        <AddMotion 
          isAnimating={addAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setAddAltAnimating(true)}
        onMouseLeave={() => setAddAltAnimating(false)}
      >
        <h3>Add alt</h3>
        <AddAltMotion 
          isAnimating={addAltAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setAddFilledAnimating(true)}
        onMouseLeave={() => setAddFilledAnimating(false)}
      >
        <h3>Add filled</h3>
        <AddFilledMotion 
          isAnimating={addFilledAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setArrowDownAnimating(true)}
        onMouseLeave={() => setArrowDownAnimating(false)}
      >
        <h3>Arrow down</h3>
        <ArrowDownMotion 
          isAnimating={arrowDownAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setArrowDownLeftAnimating(true)}
        onMouseLeave={() => setArrowDownLeftAnimating(false)}
      >
        <h3>Arrow down left</h3>
        <ArrowDownLeftMotion 
          isAnimating={arrowDownLeftAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setArrowDownRightAnimating(true)}
        onMouseLeave={() => setArrowDownRightAnimating(false)}
      >
        <h3>Arrow down right</h3>
        <ArrowDownRightMotion 
          isAnimating={arrowDownRightAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setArrowLeftAnimating(true)}
        onMouseLeave={() => setArrowLeftAnimating(false)}
      >
        <h3>Arrow left</h3>
        <ArrowLeftMotion 
          isAnimating={arrowLeftAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setArrowRightAnimating(true)}
        onMouseLeave={() => setArrowRightAnimating(false)}
      >
        <h3>Arrow right</h3>
        <ArrowRightMotion 
          isAnimating={arrowRightAnimating} 
          width={32} 
          height={32} />
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
        onMouseEnter={() => setArrowUpLeftAnimating(true)}
        onMouseLeave={() => setArrowUpLeftAnimating(false)}
      >
        <h3>Arrow up left</h3>
        <ArrowUpLeftMotion 
          isAnimating={arrowUpLeftAnimating} 
          width={32} 
          height={32} />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setArrowUpRightAnimating(true)}
        onMouseLeave={() => setArrowUpRightAnimating(false)}
      >
        <h3>Arrow up right</h3>
        <ArrowUpRightMotion 
          isAnimating={arrowUpRightAnimating} 
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
        onMouseEnter={() => setChevronLeftAnimating(true)}
        onMouseLeave={() => setChevronLeftAnimating(false)}
      >
        <h3>Chevron left</h3>
        <ChevronLeftMotion
          isAnimating={chevronLeftAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setChevronRightAnimating(true)}
        onMouseLeave={() => setChevronRightAnimating(false)}
      >
        <h3>Chevron right</h3>
        <ChevronRightMotion
          isAnimating={chevronRightAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setCaretDownAnimating(true)}
        onMouseLeave={() => setCaretDownAnimating(false)}
      >
        <h3>Caret down</h3>
        <CaretDownMotion
          isAnimating={caretDownAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setCaretUpAnimating(true)}
        onMouseLeave={() => setCaretUpAnimating(false)}
      >
        <h3>Caret up</h3>
        <CaretUpMotion
          isAnimating={caretUpAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setCaretLeftAnimating(true)}
        onMouseLeave={() => setCaretLeftAnimating(false)}
      >
        <h3>Caret left</h3>
        <CaretLeftMotion
          isAnimating={caretLeftAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setCaretRightAnimating(true)}
        onMouseLeave={() => setCaretRightAnimating(false)}
      >
        <h3>Caret right</h3>
        <CaretRightMotion
          isAnimating={caretRightAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setCloseAnimating(true)}
        onMouseLeave={() => setCloseAnimating(false)}
      >
        <h3>Close</h3>
        <CloseMotion
          isAnimating={closeAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setCloseOutlineAnimating(true)}
        onMouseLeave={() => setCloseOutlineAnimating(false)}
      >
        <h3>Close outline</h3>
        <CloseOutlineMotion
          isAnimating={closeOutlineAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setCloseFilledAnimating(true)}
        onMouseLeave={() => setCloseFilledAnimating(false)}
      >
        <h3>Close filled</h3>
        <CloseFilledMotion
          isAnimating={closeFilledAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setSubtractAnimating(true)}
        onMouseLeave={() => setSubtractAnimating(false)}
      >
        <h3>Subtract</h3>
        <SubtractMotion
          isAnimating={subtractAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setSubtractAltAnimating(true)}
        onMouseLeave={() => setSubtractAltAnimating(false)}
      >
        <h3>Subtract alt</h3>
        <SubtractAltMotion
          isAnimating={subtractAltAnimating}
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
        onMouseEnter={() => setMenuAnimating(true)}
        onMouseLeave={() => setMenuAnimating(false)}
      >
        <h3>Menu</h3>
        <MenuMotion
          isAnimating={menuAnimating}
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
        onMouseEnter={() => setSwitcherAnimating(true)}
        onMouseLeave={() => setSwitcherAnimating(false)}
      >
        <h3>Switcher</h3>
        <SwitcherMotion
          isAnimating={switcherAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setAppsAnimating(true)}
        onMouseLeave={() => setAppsAnimating(false)}
      >
        <h3>Apps</h3>
        <AppsMotion
          isAnimating={appsAnimating}
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
        onMouseEnter={() => setOverflowMenuVerticalAnimating(true)}
        onMouseLeave={() => setOverflowMenuVerticalAnimating(false)}
      >
        <h3>Overflow menu vertical</h3>
        <OverflowMenuVerticalMotion
          isAnimating={overflowMenuVerticalAnimating}
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
      <li
        className='icon-tile'
        onMouseEnter={() => setZoomAreaAnimating(true)}
        onMouseLeave={() => setZoomAreaAnimating(false)}
      >
        <h3>Zoom area</h3>
        <ZoomAreaMotion
          isAnimating={zoomAreaAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setZoomOutAreaAnimating(true)}
        onMouseLeave={() => setZoomOutAreaAnimating(false)}
      >
        <h3>Zoom out area</h3>
        <ZoomOutAreaMotion
          isAnimating={zoomOutAreaAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setZoomFitAnimating(true)}
        onMouseLeave={() => setZoomFitAnimating(false)}
      >
        <h3>Zoom fit</h3>
        <ZoomFitMotion
          isAnimating={zoomFitAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setZoomInAnimating(true)}
        onMouseLeave={() => setZoomInAnimating(false)}
      >
        <h3>Zoom in</h3>
        <ZoomInMotion
          isAnimating={zoomInAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setZoomOutAnimating(true)}
        onMouseLeave={() => setZoomOutAnimating(false)}
      >
        <h3>Zoom out</h3>
        <ZoomOutMotion
          isAnimating={zoomOutAnimating}
          width={32}
          height={32}
        />
      </li>
      <li
        className='icon-tile'
        onMouseEnter={() => setZoomResetAnimating(true)}
        onMouseLeave={() => setZoomResetAnimating(false)}
      >
        <h3>Zoom reset</h3>
        <ZoomResetMotion
          isAnimating={zoomResetAnimating}
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
    </ul>
    </div>
=======
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import TriggerDemoPage from './pages/TriggerDemoPage'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={CollectionPage} />
      <Route path='/collection' component={CollectionPage} />
      <Route path='/trigger-demo' component={TriggerDemoPage} />
    </Switch>
>>>>>>> 81ca42f41dfaacb1012bb58322dd8455e72d91db
  )
}

export default App
