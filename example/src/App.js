import React from 'react'
import './app.scss'
import 'carbon-10-icon-animations/dist/index.css'

import NavigationSection from './components/NavigationSection'

const App = () => {
  return (
    <div className='bx--grid'>
      <div className='bx--row'>
        <div className='header'>
          <h1>Carbon Animated Icons Collection</h1>
        </div>
      </div>
      <NavigationSection></NavigationSection>
    </div>
  )
}

export default App
