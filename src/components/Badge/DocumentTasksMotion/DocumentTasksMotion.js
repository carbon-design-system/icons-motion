import React, { useRef, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import getSvgTitle from '../../../helpers/getSvgTitle';

const DocumentTasksMotion = (props) => {

	const iconRef = useRef(null)
	const [saveStatus, setSaveStatus] = useState(props.status);

	useEffect(() => {
	   setSaveStatus(props.status)
	 }, [props.status])

	// console.log(props.fillColor)

	// let fillColor = "#" + props.fillColor
	let fillColor = "#000000"
	 	
	return (
		<div ref={iconRef}>
			<svg 
		 		width={props.size} 
		 		height={props.size}  
		 		viewBox="0 0 32 32"
	 		> 	
	 			{((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "Save successful")}</title> : null}
	 				 			  <path fill={ fillColor }  d="M15,28H8V4h8v6a2.0058,2.0058,0,0,0,2,2h6v6h2V10a.9092.9092,0,0,0-.3-.7l-7-7A.9087.9087,0,0,0,18,2H8A2.0058,2.0058,0,0,0,6,4V28a2.0058,2.0058,0,0,0,2,2h7ZM18,4.4,23.6,10H18Z"/>
 				<polyline stroke={ fillColor } fill="none" strokeMiterlimit="10" strokeWidth="2" points="17.7,23.4 21,26.6 28.3,19.4"/>
			</svg>
		</div>
	);

	DocumentTasksMotion.propTypes = {

	// specify the icon size in px 
	size: PropTypes.number,

	// By default, an SVG title is provided, which is the name of the icon.  If you want to set a custom title, pass it as a string value. If you'd like to omit the title because you plan on specifying one by other means, pass false as a boolean. 

	title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

	// the color for fill/strokes, MUST be a string which is a 6-digit hex code WITHOUT the #
	// Note: this prop is called fillColor to be consistent with Carbon's naming scheme - in this implementation, fillColor may be applied to stroke and/or fill
	fillColor: PropTypes.string

	}

	DocumentTasksMotion.defaultProps = {
	    title: true,
	    fillColor: "161616",
	}

};

export default DocumentTasksMotion;
