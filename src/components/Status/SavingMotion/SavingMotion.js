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
			  	<path fill={ fillColor } d="M16,26h-4v-8h4v-2h-4c-1.1,0-2,0.9-2,2v8H6V6h4v4c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V6.4l4,4V16	h2v-6c0-0.3-0.1-0.5-0.3-0.7l-5-5C22.5,4.1,22.3,4,22,4H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h10V26z M12,6h8v4h-8V6z"/>
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