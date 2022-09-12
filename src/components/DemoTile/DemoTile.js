import React, { useRef, useState, useEffect } from 'react'

const DemoTile = (props) => {
  const tileRef = useRef(null)
  const [iconIsplaying, setIconIsplaying] = useState(false)

  return (
    <div
      ref={tileRef}
      className={styles.DemoTile}
      onMouseEnter={() => setIconIsplaying(true)}
      onMouseLeave={() => setIconIsplaying(false)}
    ></div>
  )
}

export default DemoTile
