import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const ToggleSection = () => {
  const [favoriteAnimating, setFavoriteAnimating] = useState(false)
  const [favoriteHalfAnimating, setFavoriteHalfAnimating] = useState(false)
  const [notificationAnimating, setNotificationAnimating] = useState(false)
  const [notificationFilledAnimating, setNotificationFilledAnimating] = useState(false)
  const [starAnimating, setStarAnimating] = useState(false)

	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Toggle</h2>
        </div>
  			<ul className='bx--row'>
          <li
            className='icon-tile'
            onMouseEnter={() => setFavoriteAnimating(true)}
            onMouseLeave={() => setFavoriteAnimating(false)}
          >
          <h3>Favorite</h3>
          <icons.FavoriteMotion 
            isAnimating={favoriteAnimating} 
            size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setFavoriteHalfAnimating(true)}
            onMouseLeave={() => setFavoriteHalfAnimating(false)}
          >
          <h3>Favorite half</h3>
          <icons.FavoriteHalfMotion 
            isAnimating={favoriteHalfAnimating} 
            size={32} />
          </li>
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
            onMouseEnter={() => setNotificationFilledAnimating(true)}
            onMouseLeave={() => setNotificationFilledAnimating(false)}
          >
          <h3>Notification filled</h3>
          <icons.NotificationFilledMotion 
            isAnimating={notificationFilledAnimating} 
            size={32} />
          </li>
          <li
            className='icon-tile'
            onMouseEnter={() => setStarAnimating(true)}
            onMouseLeave={() => setStarAnimating(false)}
          >
          <h3>Star</h3>
          <icons.StarMotion 
            isAnimating={starAnimating} 
            size={32} />
          </li>
  		  </ul>
		  </div>
		</section>
	)
}

export default ToggleSection
