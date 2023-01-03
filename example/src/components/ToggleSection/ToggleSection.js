import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'

const ToggleSection = () => {
  const [notificationAnimating, setNotificationAnimating] = useState(false)

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
  		  </ul>
		  </div>
		</section>
	)
}

export default ToggleSection
