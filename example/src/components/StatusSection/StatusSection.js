import React, { useState } from 'react'
import * as icons from '@carbon/icons-motion'
import '@carbon/icons-motion/dist/index.css'
import styles from "./status-section.module.scss";

const StatusSection = () => {
  const [saveStatus, setSaveStatus] = useState(null);
  const [saveStatusTwo, setSaveStatusTwo] = useState("success");
  const [saveStatusThree, setSaveStatusThree] = useState("notRun");
  const [saveStatusFour, setSaveStatusFour] = useState("warning");

  // TODO Button containers should be inside <li>
	return (
		<section className="icon-section">	
			<div className='bx--grid'>
        <div className='bx--row'>
          <h2>Status update</h2>
        </div>
  			<ul className='bx--row'>
          <div className={styles.RowContainer}>
            <li className='toggle-icon-tile--one'>
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
              <h3>Document tasks + badge</h3>
              <div className={styles.DemoBadgeContainer}>
                <icons.BadgeIconContainer 
                  numErrors={1}
                  svg={<icons.DocumentTasksMotion />}
                  status={ saveStatusTwo } 
                  badge={ <icons.BadgeIcon numErrors={8} status={saveStatusTwo} /> }
              />
              </div>
            </li> 
            <div className={styles.ButtonContainer}>
              <button className={styles.StatusButton} onClick={() => setSaveStatusTwo("error")}>Ran - has errors</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusTwo("success")}>Ran - success</button>
            </div> 
            <li className='toggle-icon-tile'>
              <h3>Rule + badge</h3>
              <div className={styles.DemoBadgeContainer}>
                <icons.BadgeIconContainer
                  numErrors={8}
                  svg={ <icons.RuleMotion /> }
                  status={saveStatusThree} 
                  // fillColor="000000"
                  badge={ <icons.BadgeIcon numErrors={8} status={saveStatusThree} /> }
                />
              </div>
            </li>   
            <div className={styles.ButtonContainer}>
              <button className={styles.StatusButton} onClick={() => setSaveStatusThree("notRun")}>Hasn't run yet</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusThree("error")}>Ran - has errors</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusThree("success")}>Ran - success</button> 
            </div> 
            <li className='toggle-icon-tile'>
              <h3>Badge only</h3>
              <div className={styles.DemoBadgeContainer}> 
                <icons.BadgeIcon status={saveStatusFour} numErrors={2} />
              </div> 
            </li>  
            <div className={styles.ButtonContainer}>
              <button className={styles.StatusButton} onClick={() => setSaveStatusFour("error")}>Error</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusFour("success")}>Success</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusFour("warning")}>Warning</button> 
              <button className={styles.StatusButton} onClick={() => setSaveStatusFour("errorFilled")}>Error filled</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusFour("undefinedFilled")}>Undefined filled</button>
              <button className={styles.StatusButton} onClick={() => setSaveStatusFour("warningAltFilled")}>Warning alt filled</button>
            </div>
          </div> 
  		  </ul>
		  </div>
		</section>
	)
}

export default StatusSection
