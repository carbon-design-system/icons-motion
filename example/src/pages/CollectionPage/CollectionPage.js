import React from 'react'
import FormattingSection from '../../components/FormattingSection'
import NavigationSection from '../../components/NavigationSection'
import OperationsSection from '../../components/OperationsSection'
// import ToggleSection from '../../components/ToggleSection'
import StatusSection from '../../components/StatusSection'
import LottieSection from '../../components/LottieSection'

import '../../app.scss'

const CollectionPage = () => {
  return (
    <div className='bx--grid'>
      <div className='bx--row'>
        <div className='header'>
          <h1>Carbon Animated Icons Collection</h1>
        </div>
      </div>
      <FormattingSection></FormattingSection>
      <NavigationSection></NavigationSection>
      <OperationsSection></OperationsSection>
      {/*<ToggleSection></ToggleSection>*/}
      <StatusSection></StatusSection>
      <LottieSection></LottieSection>
    </div>
  )
}

export default CollectionPage
