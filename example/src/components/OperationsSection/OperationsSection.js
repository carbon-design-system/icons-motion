import React, { useState } from 'react'
import * as icons from 'carbon-motion'
import 'carbon-motion/dist/index.css'

const OperationsSection = () => {
  const [arrowShiftDownAnimating, setArrowShiftDownAnimating] = useState(false)
  const [arrowsHorizontalAnimating, setArrowsHorizontalAnimating] = useState(false)
  const [arrowsVerticalAnimating, setArrowsVerticalAnimating] = useState(false)
  const [bookmarkAnimating, setBookmarkAnimating] = useState(false)
  const [bookmarkAddAnimating, setBookmarkAddAnimating] = useState(false)
  const [bookmarkFilledAnimating, setBookmarkFilledAnimating] = useState(false)
  const [collapseAllAnimating, setCollapseAllAnimating] = useState(false)
  const [exploreAnimating, setExploreAnimating] = useState(false)
  const [flagAnimating, setFlagAnimating] = useState(false)
  const [flagFilledAnimating, setFlagFilledAnimating] = useState(false)
  const [jumpLinkAnimating, setJumpLinkAnimating] = useState(false)
  
 
	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Operations</h2>
        </div>
  			<ul className='bx--row'>
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
            onMouseEnter={() => setJumpLinkAnimating(true)}
            onMouseLeave={() => setJumpLinkAnimating(false)}
          >
            <h3>Jump Link</h3>
            <icons.JumpLinkMotion
              isAnimating={jumpLinkAnimating}
              size={32}
            />
          </li>
  		  </ul>
		  </div>
		</section>
	)
}

export default OperationsSection
