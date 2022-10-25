import React, { useState } from 'react'
import * as icons from 'carbon-motion'
import 'carbon-motion/dist/index.css'

const OperationsSection = () => {
  const [bookmarkAnimating, setBookmarkAnimating] = useState(false)
  const [bookmarkAddAnimating, setBookmarkAddAnimating] = useState(false)
  const [bookmarkFilledAnimating, setBookmarkFilledAnimating] = useState(false)
  const [exploreAnimating, setExploreAnimating] = useState(false)
  const [dragHorizontalAnimating, setDragHorizontalAnimating] = useState(false)
  const [dragVerticalAnimating, setDragVerticalAnimating] = useState(false)
  
 
	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Operations</h2>
        </div>
  			<ul className='bx--row'>
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
            <icons.DragHorizontal 
              isAnimating={dragHorizontalAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setDragVerticalAnimating(true)}
            onMouseLeave={() => setDragVerticalAnimating(false)}
          >
            <h3>Drag vertical</h3>
            <icons.DragVertical 
              isAnimating={dragVerticalAnimating} 
              size={32} />
          </li>
  		  </ul>
		  </div>
		</section>
	)
}

export default OperationsSection
