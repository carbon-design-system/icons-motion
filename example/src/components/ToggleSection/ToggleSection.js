import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'
import styles from "./toggle-section.module.scss";

const ToggleSection = () => {
  const [notificationAnimating, setNotificationAnimating] = useState(false)
  const [notificationFilledAnimating, setNotificationFilledAnimating] = useState(false)
  const [ starFilled, setStarFilled ] = useState(false)


  const toggleStar = () => { setStarFilled(!starFilled); console.log(starFilled) };
  // const toggleStarClass = starFilled ? styles.StarFilled : styles.Unfilled 

	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Toggle</h2>
        </div>
  			<ul className='bx--row'>
          <div className={styles.RowContainer}>
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
            >
              <h3>Star</h3>
              <div onClick = { () => toggleStar() }> 
                <icons.StarMotion
                  fillStatus = { starFilled }
                  size={32} />
                </div> 
            </li>
            </div>
    		  </ul>
		  </div>
		</section>
	)
}

export default ToggleSection
