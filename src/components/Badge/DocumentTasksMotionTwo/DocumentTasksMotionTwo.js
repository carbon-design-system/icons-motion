import React, { useRef, useState, useEffect } from "react";
import styles from "./document--tasks--motion-two.module.scss";
// import PropTypes from 'prop-types';
import getSvgTitle from '../../../helpers/getSvgTitle';

const DocumentTasksMotionTwo = (props) => {

	const iconRef = useRef(null)
	const [saveStatus, setSaveStatus] = useState(props.status);

	useEffect(() => {
	   setSaveStatus(props.status)
	 }, [props.status])

	let fillColor = "#" + props.fillColor
	 	
	return (
		<div ref={iconRef}>
			<svg 
		 		width={props.size} 
		 		height={props.size}  
		 		viewBox="0 0 32 32"
	 		> 	
	 			{((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "Save successful")}</title> : null}
	 				 			  <path fill={ fillColor }  d="M15,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v6h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h7ZM18,4.4,23.6,10H18Z"/>
 				<polyline className={styles.SaveCheckmark} stroke={ fillColor} fill="none" stroke-miterlimit="10" stroke-width="2" points="17.7,23.4 21,26.6 28.3,19.4"/>
			</svg>
		</div>
	);
};

export default DocumentTasksMotionTwo;
