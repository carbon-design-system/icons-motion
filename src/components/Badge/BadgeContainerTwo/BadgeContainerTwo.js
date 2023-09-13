import React, { useRef, useState, useEffect, cloneElement } from "react";
import styles from "./badge-container-two.module.scss";
// import PropTypes from 'prop-types';

const BadgeContainerTwo = (props) => {
	
	const iconRef = useRef(null)
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
	   	setStatus(props.status)
	}, [props.status])

	let fillColor = "#" + props.fillColor
	 	
	const notRun = () => { 
		return (
			<div className={styles.BadgeNotRun}></div>
		)
 	}
 	
	const success = () => {
 		return (
 			<div className={styles.BadgeSuccess}>
 				<svg  className={styles.BadgeSuccessSvg} viewBox="0 0 12.11 8.38">
    				<polyline  stroke-miterlimit="10" points="0.35 3.59 4.44 7.67 11.76 0.35" />
				</svg>
			</div>
		)
 	}

 	const error = () => {
 		return (
 			<div className={styles.Badge}>{props.numErrors}</div>

 		)
 	}

 	const badgeToDisplay = () => {
 		// should the states be more generic like statusOne, statusTwo, etc to allow for broader use cases ie different statuses? Should the badge itself be a prop so devs can create their own badges?


 		// TODO return badge object directly within switch statement instead of in separate functions 
 		
 		switch(status) {
		  case "notRun":
		    return notRun();
		   break;
		  case "success":
		    return success();
		   break;
		   case "error":
		    return error();
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

export default BadgeContainerTwo;
