import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const NavigationSection = () => {
  const [addAnimating, setAddAnimating] = useState(false)
  const [addAltAnimating, setAddAltAnimating] = useState(false)
  const [addLargeAnimating, setAddLargeAnimating] = useState(false)
  const [addFilledAnimating, setAddFilledAnimating] = useState(false)
  const [appsAnimating, setAppsAnimating] = useState(false)
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
  const [subtractLargeAnimating, setSubtractLargeAnimating] = useState(false)
  const [downToBottomAnimating, setDownToBottomAnimating] = useState(false)
  const [draggableAnimating, setDraggableAnimating] = useState(false)
  const [fitToScreenAnimating, setFitToScreenAnimating] = useState(false)
  const [homeAnimating, setHomeAnimating] = useState(false)
  const [menuAnimating, setMenuAnimating] = useState(false)
  const [overflowMenuHorizontalAnimating, setOverflowMenuHorizontalAnimating] =
    useState(false)
  const [overflowMenuVerticalAnimating, setOverflowMenuVerticalAnimating] =
    useState(false)
  const [pageFirstAnimating, setPageFirstAnimating] = useState(false)
  const [pageLastAnimating, setPageLastAnimating] = useState(false)
  const [selectWindowAnimating, setSelectWindowAnimating] = useState(false)
  const [switcherAnimating, setSwitcherAnimating] = useState(false)
  const [upToTopAnimating, setUpToTopAnimating] = useState(false)
  const [zoomInAreaAnimating, setZoomInAreaAnimating] = useState(false)
  const [zoomAreaAnimating, setZoomAreaAnimating] = useState(false)
  const [zoomOutAreaAnimating, setZoomOutAreaAnimating] = useState(false)
  const [zoomFitAnimating, setZoomFitAnimating] = useState(false)
  const [zoomInAnimating, setZoomInAnimating] = useState(false)
  const [zoomOutAnimating, setZoomOutAnimating] = useState(false)
  const [zoomResetAnimating, setZoomResetAnimating] = useState(false)

  return (
    <section className='icon-section'>
      <div className='bx--grid'>
        <div className='bx--row'>
          <h2>Navigation</h2>
        </div>
        <ul className='bx--row icon-tiles-grid'>
          <li
            className='icon-tile'
            onMouseEnter={() => setAddAnimating(true)}
            onMouseLeave={() => setAddAnimating(false)}
          >
            <h3>Add</h3>
            <icons.AddMotion isAnimating={addAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setAddAltAnimating(true)}
            onMouseLeave={() => setAddAltAnimating(false)}
          >
            <h3>Add alt</h3>
            <icons.AddAltMotion isAnimating={addAltAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setAddFilledAnimating(true)}
            onMouseLeave={() => setAddFilledAnimating(false)}
          >
            <h3>Add filled</h3>
            <icons.AddFilledMotion isAnimating={addFilledAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setAddLargeAnimating(true)}
            onMouseLeave={() => setAddLargeAnimating(false)}
          >
            <h3>Add large</h3>
            <icons.AddLargeMotion isAnimating={addLargeAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setAppsAnimating(true)}
            onMouseLeave={() => setAppsAnimating(false)}
          >
            <h3>Apps</h3>
            <icons.AppsMotion isAnimating={appsAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowDownAnimating(true)}
            onMouseLeave={() => setArrowDownAnimating(false)}
          >
            <h3>Arrow down</h3>
            <icons.ArrowDownMotion isAnimating={arrowDownAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowDownLeftAnimating(true)}
            onMouseLeave={() => setArrowDownLeftAnimating(false)}
          >
            <h3>Arrow down left</h3>
            <icons.ArrowDownLeftMotion
              isAnimating={arrowDownLeftAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowDownRightAnimating(true)}
            onMouseLeave={() => setArrowDownRightAnimating(false)}
          >
            <h3>Arrow down right</h3>
            <icons.ArrowDownRightMotion
              isAnimating={arrowDownRightAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowLeftAnimating(true)}
            onMouseLeave={() => setArrowLeftAnimating(false)}
          >
            <h3>Arrow left</h3>
            <icons.ArrowLeftMotion isAnimating={arrowLeftAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowRightAnimating(true)}
            onMouseLeave={() => setArrowRightAnimating(false)}
          >
            <h3>Arrow right</h3>
            <icons.ArrowRightMotion
              isAnimating={arrowRightAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowUpAnimating(true)}
            onMouseLeave={() => setArrowUpAnimating(false)}
          >
            <h3>Arrow up</h3>
            <icons.ArrowUpMotion isAnimating={arrowUpAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowUpLeftAnimating(true)}
            onMouseLeave={() => setArrowUpLeftAnimating(false)}
          >
            <h3>Arrow up left</h3>
            <icons.ArrowUpLeftMotion
              isAnimating={arrowUpLeftAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowUpRightAnimating(true)}
            onMouseLeave={() => setArrowUpRightAnimating(false)}
          >
            <h3>Arrow up right</h3>
            <icons.ArrowUpRightMotion
              isAnimating={arrowUpRightAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronDownAnimating(true)}
            onMouseLeave={() => setChevronDownAnimating(false)}
          >
            <h3>Chevron down</h3>
            <icons.ChevronDownMotion
              isAnimating={chevronDownAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronUpAnimating(true)}
            onMouseLeave={() => setChevronUpAnimating(false)}
          >
            <h3>Chevron up</h3>
            <icons.ChevronUpMotion isAnimating={chevronUpAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronLeftAnimating(true)}
            onMouseLeave={() => setChevronLeftAnimating(false)}
          >
            <h3>Chevron left</h3>
            <icons.ChevronLeftMotion
              isAnimating={chevronLeftAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronRightAnimating(true)}
            onMouseLeave={() => setChevronRightAnimating(false)}
          >
            <h3>Chevron right</h3>
            <icons.ChevronRightMotion
              isAnimating={chevronRightAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretDownAnimating(true)}
            onMouseLeave={() => setCaretDownAnimating(false)}
          >
            <h3>Caret down</h3>
            <icons.CaretDownMotion isAnimating={caretDownAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretUpAnimating(true)}
            onMouseLeave={() => setCaretUpAnimating(false)}
          >
            <h3>Caret up</h3>
            <icons.CaretUpMotion isAnimating={caretUpAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretLeftAnimating(true)}
            onMouseLeave={() => setCaretLeftAnimating(false)}
          >
            <h3>Caret left</h3>
            <icons.CaretLeftMotion isAnimating={caretLeftAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretRightAnimating(true)}
            onMouseLeave={() => setCaretRightAnimating(false)}
          >
            <h3>Caret right</h3>
            <icons.CaretRightMotion
              isAnimating={caretRightAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCloseAnimating(true)}
            onMouseLeave={() => setCloseAnimating(false)}
          >
            <h3>Close</h3>
            <icons.CloseMotion isAnimating={closeAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCloseOutlineAnimating(true)}
            onMouseLeave={() => setCloseOutlineAnimating(false)}
          >
            <h3>Close outline</h3>
            <icons.CloseOutlineMotion
              isAnimating={closeOutlineAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCloseFilledAnimating(true)}
            onMouseLeave={() => setCloseFilledAnimating(false)}
          >
            <h3>Close filled</h3>
            <icons.CloseFilledMotion
              isAnimating={closeFilledAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDownToBottomAnimating(true)}
            onMouseLeave={() => setDownToBottomAnimating(false)}
          >
            <h3>Down to bottom</h3>
            <icons.DownToBottomMotion
              isAnimating={downToBottomAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDraggableAnimating(true)}
            onMouseLeave={() => setDraggableAnimating(false)}
          >
            <h3>Draggable</h3>
            <icons.DraggableMotion isAnimating={draggableAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFitToScreenAnimating(true)}
            onMouseLeave={() => setFitToScreenAnimating(false)}
          >
            <h3>Fit to screen</h3>
            <icons.FitToScreenMotion isAnimating={fitToScreenAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setHomeAnimating(true)}
            onMouseLeave={() => setHomeAnimating(false)}
          >
            <h3>Home</h3>
            <icons.HomeMotion isAnimating={homeAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setMenuAnimating(true)}
            onMouseLeave={() => setMenuAnimating(false)}
          >
            <h3>Menu</h3>
            <icons.MenuMotion isAnimating={menuAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setOverflowMenuHorizontalAnimating(true)}
            onMouseLeave={() => setOverflowMenuHorizontalAnimating(false)}
          >
            <h3>Overflow menu horizontal</h3>
            <icons.OverflowMenuHorizontalMotion
              isAnimating={overflowMenuHorizontalAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setOverflowMenuVerticalAnimating(true)}
            onMouseLeave={() => setOverflowMenuVerticalAnimating(false)}
          >
            <h3>Overflow menu vertical</h3>
            <icons.OverflowMenuVerticalMotion
              isAnimating={overflowMenuVerticalAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setPageFirstAnimating(true)}
            onMouseLeave={() => setPageFirstAnimating(false)}
          >
            <h3>Page first</h3>
            <icons.PageFirstMotion isAnimating={pageFirstAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setPageLastAnimating(true)}
            onMouseLeave={() => setPageLastAnimating(false)}
          >
            <h3>Page last</h3>
            <icons.PageLastMotion isAnimating={pageLastAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSubtractAnimating(true)}
            onMouseLeave={() => setSubtractAnimating(false)}
          >
            <h3>Subtract</h3>
            <icons.SubtractMotion isAnimating={subtractAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSubtractAltAnimating(true)}
            onMouseLeave={() => setSubtractAltAnimating(false)}
          >
            <h3>Subtract alt</h3>
            <icons.SubtractAltMotion
              isAnimating={subtractAltAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSubtractLargeAnimating(true)}
            onMouseLeave={() => setSubtractLargeAnimating(false)}
          >
            <h3>Subtract large</h3>
            <icons.SubtractLargeMotion isAnimating={subtractLargeAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSelectWindowAnimating(true)}
            onMouseLeave={() => setSelectWindowAnimating(false)}
          >
            <h3>Select window</h3>
            <icons.SelectWindowMotion
              isAnimating={selectWindowAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setSwitcherAnimating(true)}
            onMouseLeave={() => setSwitcherAnimating(false)}
          >
            <h3>Switcher</h3>
            <icons.SwitcherMotion isAnimating={switcherAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setUpToTopAnimating(true)}
            onMouseLeave={() => setUpToTopAnimating(false)}
          >
            <h3>Up to top</h3>
            <icons.UpToTopMotion isAnimating={upToTopAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZoomInAreaAnimating(true)}
            onMouseLeave={() => setZoomInAreaAnimating(false)}
          >
            <h3>Zoom in area</h3>
            <icons.ZoomInAreaMotion
              isAnimating={zoomInAreaAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZoomAreaAnimating(true)}
            onMouseLeave={() => setZoomAreaAnimating(false)}
          >
            <h3>Zoom area</h3>
            <icons.ZoomAreaMotion isAnimating={zoomAreaAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZoomOutAreaAnimating(true)}
            onMouseLeave={() => setZoomOutAreaAnimating(false)}
          >
            <h3>Zoom out area</h3>
            <icons.ZoomOutAreaMotion
              isAnimating={zoomOutAreaAnimating}
              size={32}
            />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZoomFitAnimating(true)}
            onMouseLeave={() => setZoomFitAnimating(false)}
          >
            <h3>Zoom fit</h3>
            <icons.ZoomFitMotion isAnimating={zoomFitAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZoomInAnimating(true)}
            onMouseLeave={() => setZoomInAnimating(false)}
          >
            <h3>Zoom in</h3>
            <icons.ZoomInMotion isAnimating={zoomInAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZoomOutAnimating(true)}
            onMouseLeave={() => setZoomOutAnimating(false)}
          >
            <h3>Zoom out</h3>
            <icons.ZoomOutMotion isAnimating={zoomOutAnimating} size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setZoomResetAnimating(true)}
            onMouseLeave={() => setZoomResetAnimating(false)}
          >
            <h3>Zoom reset</h3>
            <icons.ZoomResetMotion isAnimating={zoomResetAnimating} size={32} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default NavigationSection
