import React, { useRef, useState, useEffect, cloneElement } from "react";
import styles from "./badge-icon.module.scss";


// Add fill color props for white spaces! 
const BadgeIcon = (props) => {
	// const [status, setStatus] = useState(props.status);

	// useEffect(() => {
	//    	setStatus(props.status)
	// }, [props.status])

	const success = () => {
		console.log("success")
 		return (
 			<div className={styles.BadgeSuccess}>
 				<svg className={styles.BadgeSuccessSvg} viewBox="0 0 12.11 8.38">
    				<polyline strokeMiterlimit="10" points="0.35 3.59 4.44 7.67 11.76 0.35" />
				</svg>
			</div>
		)
 	}

 	const warning = () => {
 		console.log("warning")
 		return (
 			<div className={styles.BadgeWarning}>
 				<svg viewBox="0 0 32 32" className={styles.BadgeWarningSvg}>
    				<path d="M16 8 16 19" />
  					<circle cx="15.9" cy="23.5" r=".6" />
				</svg>
			</div>
		)
 	}

	const warningAltFilled = () => {
		console.log( "warning alt filled")
		return (
		 	<div className={styles.BadgeWarningAlt}>
				<svg viewBox="0 0 32 32">
		  			<path className={styles.BadgeWarningAltSvgOne }  d="M16,6.2L16,6.2L4.6,28l0,0h22.7l0,0L16,6.2z M14.9,12h2.2v9h-2.2V12z M16,26c-0.8,0-1.5-0.7-1.5-1.5S15.2,23,16,23	c0.8,0,1.5,0.7,1.5,1.5S16.8,26,16,26z"/>
		  			<path className={styles.BadgeWarningAltSvgTwo } d="M29,30H3c-0.6,0-1-0.4-1-1c0-0.2,0-0.3,0.1-0.5l13-25C15.4,3,16,2.9,16.5,3.1c0.2,0.1,0.3,0.2,0.4,0.4l13,25	c0.3,0.5,0.1,1.1-0.4,1.3C29.3,30,29.2,30,29,30z M4.7,28h22.7l0,0L16,6.2h0L4.7,28L4.7,28z"/>
		  			 <path className={styles.BadgeWarningAltSvgThree } strokeMiterlimit="10" strokeWidth="3" d="M16 12 16 21"/>
		  			<circle className={styles.BadgeWarningAltSvgFour }  cx="16" cy="24.5" r="1" />
				</svg>
			</div>
		)          
	}

	const undefinedFilled = () => {
		console.log( "undefined filled")
		return (
			<div className={styles.UndefinedFilled}>
				<svg viewBox="0 0 32 32">
					  <path className={styles.UndefinedFilledInner} d="M29.391,14.527L17.473,2.609C17.067,2.203,16.533,2,16,2s-1.067,0.203-1.473,0.609L2.609,14.527C2.203,14.933,2,15.466,2,16	s0.203,1.067,0.609,1.473l11.917,11.917C14.933,29.797,15.467,30,16,30s1.067-0.203,1.473-0.609l11.917-11.917	C29.797,17.067,30,16.534,30,16S29.797,14.933,29.391,14.527z M21,18H11v-4h10V18z"/>
					  <path className={styles.UndefinedFilledBackground} d="M11 14H21V18H11z" />
				</svg>
			</div>
		)
	}

	const errorFilled = () => {
		console.log( "error filled")
		return (
			<div className={styles.ErrorFilledSvg}>
				<svg viewBox="0 0 32 32">
					<circle className={styles.ErrorFilledBackground } cx="16" cy="16" r="15" />
					<path className={styles.ErrorFilledLine }  strokeMiterlimit="10"    d="M8.3 8.3 23.2 23.2"/>
	 			</svg>
			</div>
		)
	}

	const notRun = () => {
		console.log( "not run")
		return (
			<div className={styles.BadgeNotRun}></div>
		)
	}

	const error = () => {
		console.log( "error")
		return (
			<div className={styles.BadgeError}>{props.numErrors}</div>
		)
	}

 	const badgeToDisplay = () => {
 		switch(props.status) {
		  case "notRun":
		  	return notRun();
		    // return { notRun() };
		 	// return <div className={styles.BadgeNotRun}></div>

		  case "error":
		    return error();

		  case "success":
		    return success();	

		  case "warning":		
		  	return warning();

		  case "warningAltFilled":
		  	return warningAltFilled();

		  case "undefinedFilled":
		  	// this is too small - remove space ffom artboard
		  	return undefinedFilled();

		  case "errorFilled":
		  	return errorFilled();

	  	  default:
		   return warning();
		}
 	}

	return (
		<div>
			{ badgeToDisplay() }
		</div>
	)
}


export default BadgeIcon;
