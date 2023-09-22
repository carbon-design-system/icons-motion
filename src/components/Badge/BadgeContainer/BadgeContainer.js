import React, { useRef, useState, useEffect, cloneElement } from "react";
import styles from "./badge-container.module.scss";

const BadgeContainer = (props) => {
	// should the states be more generic like statusOne, statusTwo, etc to allow for broader use cases ie different statuses? Should the badge itself be a prop so devs can create their own badges?
	// should you be able to pass in whatever badge you want as props?
	 	
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
		  default:
		   return success();
		}
 	}

	const clonedSvg = React.cloneElement(  props.svg, { size: 20, ... props}, null )

	return (
		<div className={styles.BadgeContainer}>
			<div className={styles.BadgeSvg}> { clonedSvg }</div>
			{ badgeToDisplay() }
		</div>
	)
}

export default BadgeContainer;
