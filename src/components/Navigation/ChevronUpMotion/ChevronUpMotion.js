import React from 'react'
import styles from './chevron-up--motion.module.css'

const ChevronUpMotion = () => {
    return (
        <svg className={styles.ChevronUpMotion} x="0px" y="0px" viewBox="0 0 32 32">
            <polygon className={styles.ChevronUp} points="16,10 26,20 24.6,21.4 16,12.8 7.4,21.4 6,20 "/>
            <rect fill="none" x="0" y="0" width="32" height="32"></rect>
        </svg>
    );
}

export default ChevronUpMotion