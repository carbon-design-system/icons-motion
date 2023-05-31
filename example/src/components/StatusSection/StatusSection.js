import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'
import styles from "./status-section.module.scss";

const StatusSection = () => {
const [saveStatus, setSaveStatus] = useState(null);

	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Status update</h2>
        </div>
  			<ul className='bx--row'>
  				<li className='icon-tile'>
            <h3>Saving</h3>
            <icons.SavingMotion 
              status={saveStatus} 
              size={32}
              fillColor="000000"
            />
          </li> 
          <div className={styles.ButtonContainer}>
              <button className={styles.StatusButton} onClick={() => setSaveStatus("inProgress")}>In progress</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatus("error")}>Error</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatus("success")}>Success</button>
          </div>                   
  		  </ul>
		  </div>
		</section>
	)
}

export default StatusSection
