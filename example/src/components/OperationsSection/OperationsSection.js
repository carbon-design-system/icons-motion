import React, { useState } from 'react'
import * as icons from 'carbon-motion'
import 'carbon-motion/dist/index.css'

const OperationsSection = () => {

  const [addCommentAnimating, setAddCommentAnimating] = useState(false)
  const [arrowShiftDownAnimating, setArrowShiftDownAnimating] = useState(false)
  const [arrowsHorizontalAnimating, setArrowsHorizontalAnimating] = useState(false)
  const [arrowsVerticalAnimating, setArrowsVerticalAnimating] = useState(false)
  const [bookmarkAnimating, setBookmarkAnimating] = useState(false)
  const [bookmarkAddAnimating, setBookmarkAddAnimating] = useState(false)
  const [bookmarkFilledAnimating, setBookmarkFilledAnimating] = useState(false)
  const [caretSortAnimating, setCaretSortAnimating] = useState(false)  
  const [caretSortDownAnimating, setCaretSortDownAnimating] = useState(false) 
  const [caretSortUpAnimating, setCaretSortUpAnimating] = useState(false)  
  const [chevronMiniAnimating, setChevronMiniAnimating] = useState(false)
  const [chevronSortAnimating, setChevronSortAnimating] = useState(false)
  const [collapseAllAnimating, setCollapseAllAnimating] = useState(false)
  const [connectAnimating, setConnectAnimating] = useState(false)
  const [exploreAnimating, setExploreAnimating] = useState(false)
  const [dragHorizontalAnimating, setDragHorizontalAnimating] = useState(false)
  const [dragVerticalAnimating, setDragVerticalAnimating] = useState(false)
  const [flagAnimating, setFlagAnimating] = useState(false)
  const [flagFilledAnimating, setFlagFilledAnimating] = useState(false)
  const [imageSearchAnimating, setImageSearchAnimating] = useState(false)
  const [jumpLinkAnimating, setJumpLinkAnimating] = useState(false)
  const [launchAnimating, setLaunchAnimating] = useState(false)
  const [layersAnimating, setLayersAnimating] = useState(false)
  
	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Operations</h2>
        </div>
  			<ul className='bx--row'>
          <li
            className='icon-tile'
            onMouseEnter={() => setAddCommentAnimating(true)}
            onMouseLeave={() => setAddCommentAnimating(false)}
          >
            <h3>Add comment</h3>
            <icons.AddCommentMotion 
              isAnimating={addCommentAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowShiftDownAnimating(true)}
            onMouseLeave={() => setArrowShiftDownAnimating(false)}
          >
            <h3>Arrow shift down</h3>
            <icons.ArrowShiftDownMotion
              isAnimating={arrowShiftDownAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowsHorizontalAnimating(true)}
            onMouseLeave={() => setArrowsHorizontalAnimating(false)}
          >
            <h3>Arrows horizontal</h3>
            <icons.ArrowsHorizontalMotion 
              isAnimating={arrowsHorizontalAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setArrowsVerticalAnimating(true)}
            onMouseLeave={() => setArrowsVerticalAnimating(false)}
          >
            <h3>Arrows vertical</h3>
            <icons.ArrowsVerticalMotion 
              isAnimating={arrowsVerticalAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setBookmarkAnimating(true)}
            onMouseLeave={() => setBookmarkAnimating(false)}
          >
            <h3>Bookmark</h3>
            <icons.BookmarkMotion 
              isAnimating={bookmarkAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setBookmarkAddAnimating(true)}
            onMouseLeave={() => setBookmarkAddAnimating(false)}
          >
            <h3>Bookmark Add</h3>
            <icons.BookmarkAddMotion 
              isAnimating={bookmarkAddAnimating} 
              size={32} />
          </li>
  				<li
            className='icon-tile'
            onMouseEnter={() => setBookmarkFilledAnimating(true)}
            onMouseLeave={() => setBookmarkFilledAnimating(false)}
          >
            <h3>Bookmark Filled</h3>
            <icons.BookmarkFilledMotion 
              isAnimating={bookmarkFilledAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronMiniAnimating(true)}
            onMouseLeave={() => setChevronMiniAnimating(false)}
          >
            <h3>Chevron mini</h3>
            <icons.ChevronMiniMotion 
              isAnimating={chevronMiniAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setChevronSortAnimating(true)}
            onMouseLeave={() => setChevronSortAnimating(false)}
          >
            <h3>Chevron sort</h3>
            <icons.ChevronSortMotion 
              isAnimating={chevronSortAnimating} 
              size={32}
          >
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretSortAnimating(true)}
            onMouseLeave={() => setCaretSortAnimating(false)}
          >
            <h3>Caret sort</h3>
            <icons.CaretSortMotion 
              isAnimating={caretSortAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretSortDownAnimating(true)}
            onMouseLeave={() => setCaretSortDownAnimating(false)}
          >
            <h3>Caret sort down</h3>
            <icons.CaretSortDownMotion 
              isAnimating={caretSortDownAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCaretSortUpAnimating(true)}
            onMouseLeave={() => setCaretSortUpAnimating(false)}
          >
            <h3>Caret sort up</h3>
            <icons.CaretSortUpMotion 
              isAnimating={caretSortUpAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setCollapseAllAnimating(true)}
            onMouseLeave={() => setCollapseAllAnimating(false)}
          >
            <h3>Collapse all</h3>
            <icons.CollapseAllMotion 
              isAnimating={collapseAllAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setConnectAnimating(true)}
            onMouseLeave={() => setConnectAnimating(false)}
          >
            <h3>Connect</h3>
            <icons.ConnectMotion 
              isAnimating={connectAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setExploreAnimating(true)}
            onMouseLeave={() => setExploreAnimating(false)}
          >
            <h3>Explore</h3>
            <icons.ExploreMotion 
              isAnimating={exploreAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDragHorizontalAnimating(true)}
            onMouseLeave={() => setDragHorizontalAnimating(false)}
          >
            <h3>Drag horizontal</h3>
            <icons.DragHorizontalMotion 
              isAnimating={dragHorizontalAnimating}
            size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDragVerticalAnimating(true)}
            onMouseLeave={() => setDragVerticalAnimating(false)}
          >
            <h3>Drag vertical</h3>
            <icons.DragVerticalMotion 
              isAnimating={dragVerticalAnimating} 
            size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFlagAnimating(true)}
            onMouseLeave={() => setFlagAnimating(false)}
          >
            <h3>Flag</h3>
            <icons.FlagMotion 
              isAnimating={flagAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFlagFilledAnimating(true)}
            onMouseLeave={() => setFlagFilledAnimating(false)}
          >
            <h3>Flag filled</h3>
            <icons.FlagFilledMotion 
              isAnimating={flagFilledAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setImageSearchAnimating(true)}
            onMouseLeave={() => setImageSearchAnimating(false)}
          >
            <h3>Image search</h3>
            <icons.ImageSearchMotion 
              isAnimating={imageSearchAnimating} 
              size={32} />
          </li>
         <li
            className='icon-tile'
            onMouseEnter={() => setJumpLinkAnimating(true)}
            onMouseLeave={() => setJumpLinkAnimating(false)}
          >
            <h3>Jump Link</h3>
            <icons.JumpLinkMotion
              isAnimating={jumpLinkAnimating}
              size={32}  />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setLaunchAnimating(true)}
            onMouseLeave={() => setLaunchAnimating(false)}
          >
            <h3>Launch</h3>
            <icons.LaunchMotion
              isAnimating={launchAnimating}
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setLayersAnimating(true)}
            onMouseLeave={() => setLayersAnimating(false)}
          >
            <h3>Layers</h3>
            <icons.LayersMotion 
              isAnimating={layersAnimating} 
              size={32} />
          </li>
  		  </ul>
		  </div>
		</section>
	)
}

export default OperationsSection
