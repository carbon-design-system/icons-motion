import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import TriggerDemoPage from './pages/TriggerDemoPage'
import ApicDemoPage from './pages/ApicDemoPage'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={CollectionPage} />
      <Route path='/collection' component={CollectionPage} />
      <Route path='/trigger-demo' component={TriggerDemoPage} />
      <Route path='/apic-demo' component={ApicDemoPage} />
    </Switch>
  )
}

export default App
