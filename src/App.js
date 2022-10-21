import React from 'react'

import { 
         HomePage,
         FlexBoxApp,
         FlexBoxManipulationApp,
         FlexPropApp,
         FlexFlow,
         AppPage,
         JustifyContentApp,
         FlexAlignItemsApp ,
         FlexAlignContentApp,
         OrderPropertyApp,
         FlexGrowPropertyApp,
         FlexShrinkPropertyApp,
         FlexBasisPropertyApp,
         FlexAlignSelfPropertyApp,
         WebDesingFundamentalsApp
        } from './setup-app/flexbox-apps-list/index-apps.list'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UIWhiteSpaceApp from './setup-app/web-fundamentals-apps-list/ui.white.space-app';

/**Flexbox-grid-sass-and-animations app version 26 -
 * App js file - Features:
 *
 *      --> Adding 'UIWhiteSpaceApp' and building a 
 *          route for it.
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
        <Route path='/apps/flex-justify-content-app' element={<JustifyContentApp />}/>
        <Route path='/apps/flex-align-items-app' element={<FlexAlignItemsApp />}/>
        <Route path='/apps/flex-align-content-app' element={<FlexAlignContentApp />}/>  
        <Route path='/apps/order-property-app' element={<OrderPropertyApp />}/>
        <Route path='/apps/flex-grow-property-app' element={<FlexGrowPropertyApp />}/>
        <Route path='/apps/flex-shrink-property-app' element={<FlexShrinkPropertyApp />}/>
        <Route path='/apps/flex-basis-property-app' element={<FlexBasisPropertyApp />}/>
        <Route path='/apps/flex-align-self-property-app' element={<FlexAlignSelfPropertyApp />}/>
        <Route path='/apps/web-design-fundamentals-app/' element={<WebDesingFundamentalsApp />} />
        <Route path='/apps/web-design-fundamentals-app/ui-white-space' element={<UIWhiteSpaceApp />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;