import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'
import styles from "./status-section.module.scss";


const StatusSection = () => {
  const [saveStatus, setSaveStatus] = useState(null);
  const [saveStatusTwo, setSaveStatusTwo] = useState("success");
  const [saveStatusThree, setSaveStatusThree] = useState("notRun");

  const documentTasksIcon = <icons.DocumentTasksMotion />
  const ruleIcon = <icons.RuleMotion />

  // TODO Button containers should be inside <li>
	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Status update</h2>
        </div>
  			<ul className='bx--row'>

        <div className={styles.RowContainer}>
  				
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

          
          <li className='toggle-icon-tile'>
            <h3>Document tasks - badge</h3>
            <div className={styles.DemoBadgeContainer}>
              <icons.BadgeContainer 
                numErrors={1}
                svg={documentTasksIcon}
                status={saveStatusTwo} 
                fillColor="000000"
            />
            </div>
          </li> 
          <div className={styles.ButtonContainer}>
            <button className={styles.StatusButton} onClick={() => setSaveStatusTwo("error")}>Ran - has errors</button>
            <button className={styles.StatusButton} onClick={() => setSaveStatusTwo("success")}>Ran - success</button>
          </div>

          <li className='toggle-icon-tile'>
            <h3>Rule - badge</h3>
            <div className={styles.DemoBadgeContainer}>
              <icons.BadgeContainer
                numErrors={8}
                svg={ruleIcon}
                status={saveStatusThree} 
                fillColor="000000"
              />
            </div>
          </li>       
          <div className={styles.ButtonContainer}>
            <button className={styles.StatusButton} onClick={() => setSaveStatusThree("notRun")}>Hasn't run yet</button>
            <button className={styles.StatusButton} onClick={() => setSaveStatusThree("error")}>Ran - has errors</button>
            <button className={styles.StatusButton} onClick={() => setSaveStatusThree("success")}>Ran - success</button>       
          </div>
        </div> 
  		  </ul>
		  </div>
		</section>
	)
}

export default StatusSection
