import React from 'react'

import { 
         HomePage,
         FlexBoxApp,
         FlexBoxManipulationApp,
         FlexPropApp,
         FlexFlow,
         AppPage
        } from './setup-app/flexbox-apps-list/index-apps.list'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/**Flexbox-grid-sass-and-animations app version 12 -
 * App js file - Features:
 * 
 *      --> Building routing to take for every
 *          'AppElement' build
 * 
 *      --> Importing and Placing 'AppPage' as
 *          a shared layout for all the apps
 * 
 * Note: This routing will help to get into every
 * app separately.
 * 
 * in order to set the shared layout i have to 
 * change the previous routes from '/' to '/apps'
 * so it won't create a conflict 
 */


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        
        <Route path='/apps' element={<AppPage />}>
        <Route path='/apps/flexbox-app' element={<FlexBoxApp />}/>
        <Route path='/apps/flexbox-manipulation-app' element={<FlexBoxManipulationApp />}/>
        <Route path='/apps/flexbox-prop-app' element={<FlexPropApp />}/>
        <Route path='/apps/flexbox-flow-app' element={<FlexFlow />}/> 

        </Route>
      </Routes>
    </Router>
  )
}

export default App;