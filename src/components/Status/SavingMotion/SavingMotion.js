import React, { useRef, useState, useEffect } from "react";
import styles from "./saving--motion.module.scss";
import PropTypes from 'prop-types';
import getSvgTitle from '../../../helpers/getSvgTitle';


const SavingMotion = (props) => {
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
				<path fill={ fillColor } d="M16,26h-4v-8h4v-2h-4c-1.1,0-2,0.9-2,2v8H6V6h4v4c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6.4l4,4V16	h2v-6c0-0.3-0.1-0.5-0.3-0.7l-5-5C22.5,4.1,22.3,4,22,4H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h10V26z M12,6h8v4h-8V6z"/>
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
	 			{ ((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "Save successful")}</title> : null}
				 <path fill={fillColor} d="M16,26h-4v-8h4v-2h-4c-1.1,0-2,0.9-2,2v8H6V6h4v4c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6.4l4,4V16	h2v-6c0-0.3-0.1-0.5-0.3-0.7l-5-5C22.5,4.1,22.3,4,22,4H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h10V26z M12,6h8v4h-8V6z"/>
				 <polyline stroke={ fillColor} fill="none" className={styles.SaveCheckmark} points="28.4,20.1 21.9,26.6 19.4,24.1"/>
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
			  	<path fill={ fillColor } d="M16,26h-4v-8h4v-2h-4c-1.1,0-2,0.9-2,2v8H6V6h4v4c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6.4l4,4V16	h2v-6c0-0.3-0.1-0.5-0.3-0.7l-5-5C22.5,4.1,22.3,4,22,4H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h10V26z M12,6h8v4h-8V6z"/>
				 <g className={styles.ErrorSymbol} stroke={fillColor} fill="none">
					<path d="M26.5,26.5C25.6,27.4,24.4,28,23,28s-2.6-0.6-3.5-1.5S18,24.4,18,23s0.6-2.6,1.5-3.5S21.6,18,23,18	s2.6,0.6,3.5,1.5S28,21.6,28,23S27.4,25.6,26.5,26.5" />
					<line x1="19.5" x2="26.5" y1="19.5" y2="26.5" />
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
};

SavingMotion.propTypes = {

	//  saving status
	status: PropTypes.oneOf(['inProgress', 'error', 'success']),

	// specify the icon size in px 
	size: PropTypes.number,


	// By default, an SVG title is provided, which is the name of the icon.  If you want to set a custom title, pass it as a string value. If you'd like to omit the title because you plan on specifying one by other means, pass false as a boolean. 
	title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),


	// the color for fill/strokes, MUST be a string which is a 6-digit hex code WITHOUT the #
	// Note: this prop is called fillColor to be consistent with Carbon's naming scheme - in this implementation, fillColor may be applied to stroke and/or fill
	fillColor: PropTypes.string

}

 SavingMotion.defaultProps = {
    size: 32,
    title: true,
    fillColor: "000000",
    status: "success"
}

export default SavingMotion;