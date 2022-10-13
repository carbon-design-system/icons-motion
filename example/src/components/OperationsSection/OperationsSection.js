import React, { useState } from 'react'
import * as icons from 'carbon-motion'
import 'carbon-motion/dist/index.css'

const OperationsSection = () => {
  const [bookmarkAnimating, setBookmarkAnimating] = useState(false)
  const [bookmarkAddAnimating, setBookmarkAddAnimating] = useState(false)
  const [exploreAnimating, setExploreAnimating] = useState(false)
 
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
          <h3>Bookmark add</h3>
          <icons.BookmarkAddMotion 
            isAnimating={bookmarkAddAnimating} 
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
  		  </ul>
		  </div>
		</section>
	)
}

export default OperationsSection
