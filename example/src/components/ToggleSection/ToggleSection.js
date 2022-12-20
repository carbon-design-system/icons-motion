import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const ToggleSection = () => {

  const [notificationAnimating, setNotificationAnimating] = useState(false)
  const [thumbsDownAnimating, setThumbsDownAnimating] = useState(false)
  const [thumbsDownFilledAnimating, setThumbsDownFilledAnimating] = useState(false)
 

	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Toggle</h2>
        </div>
  			<ul className='bx--row'>
          <li
            className='icon-tile'
            onMouseEnter={() => setNotificationAnimating(true)}
            onMouseLeave={() => setNotificationAnimating(false)}
          >
            <h3>Notification</h3>
            <icons.NotificationMotion 
              isAnimating={notificationAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setThumbsDownAnimating(true)}
            onMouseLeave={() => setThumbsDownAnimating(false)}
          >
            <h3>Thumbs down</h3>
            <icons.ThumbsDownMotion 
              isAnimating={thumbsDownAnimating} 
              size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setThumbsDownFilledAnimating(true)}
            onMouseLeave={() => setThumbsDownFilledAnimating(false)}
          >
            <h3>Thumbs down filled</h3>
            <icons.ThumbsDownFilledMotion 
              isAnimating={thumbsDownFilledAnimating} 
              size={32} />
          </li>
  		  </ul>
		  </div>
		</section>
	)
}

export default ToggleSection
