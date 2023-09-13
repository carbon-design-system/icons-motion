import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'
import styles from "./status-section.module.scss";


const StatusSection = () => {
  const [saveStatus, setSaveStatus] = useState(null);
  const [saveStatusTwo, setSaveStatusTwo] = useState(null);
  const [saveStatusThree, setSaveStatusThree] = useState(null);
  const [statusFour, setStatusFour] = useState("success");
  const [statusFive, setStatusFive] = useState("notRun");

  const saveIcon = <icons.DocumentTasksMotion />
  const documentTasksTwoIcon = <icons.DocumentTasksMotionTwo />
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
              <icons.BadgeContainerTwo 
                numErrors={1}
                //svg = < DocumentTasksMotionTwo /> ???
                svg={documentTasksTwoIcon}
                status={statusFour} 
                // fillColor="a834eb"
                fillColor="000000"
            />
            </div>
          </li> 
          <div className={styles.ButtonContainer}>
            <button className={styles.StatusButton} onClick={() => setStatusFour("error")}>Ran - has errors</button>
            <button className={styles.StatusButton} onClick={() => setStatusFour("success")}>Ran - success</button>
          </div>

          <li className='toggle-icon-tile'>
            <h3>Rule - badge</h3>
            <div className={styles.DemoBadgeContainer}>
              <icons.BadgeContainerTwo 
                numErrors={8}
                svg={ruleIcon}
                status={statusFive} 
                // fillColor="a834eb"
              />
            </div>
          </li> 
          
          <div className={styles.ButtonContainer}>
            <button className={styles.StatusButton} onClick={() => setStatusFive("notRun")}>Hasn't run yet</button>
            <button className={styles.StatusButton} onClick={() => setStatusFive("error")}>Ran - has errors</button>
            <button className={styles.StatusButton} onClick={() => setStatusFive("success")}>Ran - success</button>       
          </div>

          <li className='toggle-icon-tile'>
            <h3>Badge Container OLD</h3>
            <div className={styles.DemoBadgeContainer}>
              <icons.BadgeContainer 
                number={1}
                svg={saveIcon}
                status={saveStatusThree} 
                fillColor="a834eb"
            />
            </div>
          </li>        
          <div className={styles.ButtonContainer}>
              <button className={styles.StatusButton} onClick={() => setSaveStatusThree("inProgress")}>In progress</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusThree("error")}>Error</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusThree("success")}>Success</button>
          </div>


          </div>                  
  		  </ul>
		  </div>
		</section>
	)
}

export default StatusSection
