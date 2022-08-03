import React from 'react'
import styles from './chevron-down--motion.module.css'

const ChevronDownMotion = () => {
    return (
        <svg className={styles.ChevronDownMotion} x="0px" y="0px" viewBox="0 0 32 32">
            <polygon className={styles.ChevronDown} points="16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12"/>
            <rect fill="none" x="0" y="0" width="32" height="32"></rect>
        </svg>
    );
}

export default ChevronDownMotion