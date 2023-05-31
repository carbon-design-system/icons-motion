import React, { useRef, useState, useEffect } from 'react'
import styles from './idea--motion.module.scss'
import PropTypes from 'prop-types';
import getSvgTitle from '../../../helpers/getSvgTitle'

const IdeaMotion = (props) => {

  const iconRef = useRef(null);
  let fillColor = "#" + props.fillColor

  return (
    <div ref={iconRef} className={props.isAnimating ? styles.isAnimating : null} >
      <svg
        height={props.size}
        width={props.size}
        viewBox='0 0 32 32'
        className={styles.IdeaMotion}
      >
      { ((props.title == true ) || (typeof props.title === 'string')) ? <title>{getSvgTitle(props.title, "idea")}</title> : null}
        <path
          className={styles.IdeaBulb}
          d="M19,32h-6v-2h6V32z M21,27H11v2h10V27z M16,5C10.5,5,6,9.5,6,15c0,4.4,2,6.3,3.5,7.6c1,0.9,1.5,1.5,1.5,2.4h2
    c0-1.8-1.1-2.9-2.2-3.9C9.4,19.9,8,18.5,8,15c0-4.4,3.6-8,8-8s8,3.6,8,8c0,3.5-1.4,4.9-2.8,6.1c-1.1,1-2.2,2-2.2,3.9h2
    c0-0.9,0.5-1.5,1.5-2.4C24,21.3,26,19.4,26,15C26,9.5,21.5,5,16,5z" fill={ fillColor }
        />
        <g stroke={ fillColor } strokeWidth="2" fill="none">
          <line className={styles.IdeaFilament} x1="16" y1="25" x2="16" y2="19"/>
          <line className={styles.IdeaTop} x1="16" y1="4" x2="16" y2="0"/>      
          <line className={styles.IdeaRight} x1="27" y1="15" x2="31" y2="15"/>
          <line className={styles.IdeaLeft} x1="5" y1="15" x2="1" y2="15"/>
          <line className={styles.IdeaTopRight} x1="24.1" y1="7.2" x2="28.4" y2="2.9"/>
          <line className={styles.IdeaTopLeft} x1="8.2" y1="7.2" x2="3.9" y2="2.9"/>
          <line className={styles.IdeaBottomRight} x1="28.4" y1="26.7" x2="24.2" y2="22.4"/>
          <line className={styles.IdeaBottomLeft} x1="3.5" y1="26.7" x2="7.8" y2="22.4"/>
        </g>
      </svg>
    </div>
  );
};


IdeaMotion.propTypes = {

//  set this to true when you want the animation to play
isAnimating: PropTypes.bool,

// specify the icon size in px 
size: PropTypes.number,


// By default, an SVG title is provided, which is the name of the icon.  If you want to set a custom title, pass it as a string value. If you'd like to omit the title because you plan on specifying one by other means, pass false as a boolean. 

title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),



// the color for fill/strokes, MUST be a string which is a 6-digit hex code WITHOUT the #
// Note: this prop is called fillColor to be consistent with Carbon's naming scheme - in this implementation, fillColor may be applied to stroke and/or fill
fillColor: PropTypes.string

}

 IdeaMotion.defaultProps = {
    isAnimating: false,
    size: 32,
    title: true,
    fillColor: "161616",
  }

export default IdeaMotion;