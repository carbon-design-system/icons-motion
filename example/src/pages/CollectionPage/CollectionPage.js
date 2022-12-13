import React from 'react'
import NavigationSection from '../../components/NavigationSection'
import OperationsSection from '../../components/OperationsSection'
import ToggleSection from '../../components/ToggleSection'
import '../../app.scss'

const CollectionPage = () => {
  return (
    <div className='bx--grid'>
      <div className='bx--row'>
        <div className='header'>
          <h1>Carbon Animated Icons Collection</h1>
        </div>
      </div>
      <NavigationSection></NavigationSection>
      <OperationsSection></OperationsSection>
      <ToggleSection></ToggleSection>
    </div>
  )
}

export default CollectionPage
