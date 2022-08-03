import React from 'react'
import styles from './arrow-up--motion.module.css'

const ArrowUpMotion = () => {
    return (
        <svg className={styles.ArrowUpMotion} viewBox="0 0 32 32"> 
            <g className={styles.ArrowUpTip}>
                <polyline points="25.28 14.7 16 5.42 6.72 14.7" stroke="#000" fill="none" strokeMiterlimit="10" strokeWidth="2"/>
            </g>
            <g className={styles.ArrowUpShaft}>
                <line x1="16" y1="5.31" x2="16" y2="27.98" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
            </g>
            <rect fill="none" x="0" y="0" width="32" height="32"></rect>
        </svg>
    );
}

export default ArrowUpMotion