import React, { useRef, useState, useEffect } from "react";
import styles from "./document-tasks--motion.module.scss";
// import PropTypes from 'prop-types';
import getSvgTitle from '../../../helpers/getSvgTitle';

const DocumentTasksMotion = (props) => {

	const iconRef = useRef(null)
	const [saveStatus, setSaveStatus] = useState(props.status);

	useEffect(() => {
	   setSaveStatus(props.status)
	 }, [props.status])

		let fillColor = "#" + props.fillColor
	 	
	 	const SaveInProgress = () => {
		 	return (
		 		<svg 
		 			width={props.size}
		 			height={props.size}  
		 			viewBox="0 0 32 32"
		 		>
		 			{ ((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "Save in progress")}</title> : null}
		 			  <path fill={ fillColor }  d="M15,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v6h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h7ZM18,4.4,23.6,10H18Z"/>
					<circle stroke={ fillColor } fill="none" className={styles.SaveCircle} cx="23" cy="23" r="5"/>
				</svg>
			)
 	}
 	
	const SaveSuccess = () => {
 		return (
	 		<svg 
		 		width={props.size} 
		 		height={props.size}  
		 		viewBox="0 0 32 32"
	 		> 	
	 			{((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "Save successful")}</title> : null}
	 				 			  <path fill={ fillColor }  d="M15,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v6h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h7ZM18,4.4,23.6,10H18Z"/>
 				<polyline className={styles.SaveCheckmark} stroke={ fillColor} fill="none" stroke-miterlimit="10" stroke-width="2" points="17.7,23.4 21,26.6 28.3,19.4"/>
			</svg>
		)
 	}

 	const SaveError = () => {
 		return (
 			<svg  
 				width={props.size} 
 				height={props.size} 
 				viewBox="0 0 32 32"
 			>
 				{ ((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "Save error")}</title> : null}
 					<path fill={ fillColor }  d="M15,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v6h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h7ZM18,4.4,23.6,10H18Z"/>
				 <g className={ styles.ErrorX } stroke={fillColor} fill="none">
						 <line fill="none" stroke={ fillColor } id="x_x5F_line_x5F_02" x1="18.7" x2="27.3" y1="18.7" y2="27.3" class="st1"/>
			  			<line fill="none" stroke={ fillColor } id="x_x5F_line_x5F_01" x1="27.3" x2="18.7" y1="18.7" y2="27.3" class="st1"/>
			  	</g>
			</svg> 
		)
 	}

 	const SvgToShow = () => {
 		switch(saveStatus) {
		  case "inProgress":
		     return SaveInProgress();
		   break;
		  case "success":
		    return SaveSuccess();
		   break;
		   case "error":
		    return SaveError();
		   break;
		  default:
		   return SaveSuccess();
		}
 	}

	return (
		<div ref={iconRef}>	
			{ SvgToShow() }	
		</div>
	);


	return (
		<div ref={iconRef}>	
			{ SvgToShow() }	
		</div>
	);
};

export default DocumentTasksMotion;
