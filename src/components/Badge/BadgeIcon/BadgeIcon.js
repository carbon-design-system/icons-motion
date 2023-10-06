import React, { useRef, useState, useEffect, cloneElement } from "react";
import styles from "./badge-icon.module.scss";

const BadgeIcon = (props) => {
	 	
	const iconRef = useRef(null)
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
	   	setStatus(props.status)
	}, [props.status])

	const success = () => {
 		return (
 			<div className={styles.BadgeSuccess}>
 				<svg  className={styles.BadgeSuccessSvg} viewBox="0 0 12.11 8.38">
    				<polyline  stroke-miterlimit="10" points="0.35 3.59 4.44 7.67 11.76 0.35" />
				</svg>
			</div>
		)
 	}


 	const warning = () => {
 		return (
 			<div className={styles.BadgeWarning}>
 				<svg viewBox="0 0 32 32" className={styles.BadgeWarningSvg}>
    				  <path d="M16 8 16 19" />
  					<circle cx="15.9" cy="23.5" r=".6" />
				</svg>
			</div>
		)
 	}

 	const badgeToDisplay = () => {
 		switch(status) {
		  case "notRun":
		    return <div className={styles.BadgeNotRun}></div>
		   break;
		  case "error":
		    return ( <div className={styles.BadgeError}>{props.numErrors}</div> );
		   break;
		   case "success":
		    return success();
		   break;
		  case "warning":
		  	return warning();
		  default:
		   return success();
		}
 	}

	return (
		 <div>
			 { badgeToDisplay() }
		 </div>
	)
}

export default BadgeIcon;
