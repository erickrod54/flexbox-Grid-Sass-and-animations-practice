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

        } from './setup-app/flexbox-apps-list/index-apps.list'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { UIWhiteSpaceApp,
         WebDesingFundamentalsApp,
         UIAlignmentApp,
         UIWhitespaceAndAlignmentApp, 
         UIContrastAndScaleApp,
         UITypographyApp,
         UIColorApp,
         UIFormApp, 
         UIVisualHierarchyApp,
         UIDesignChallenge} from './setup-app/web-fundamentals-apps-list/index.web.fundamentals-apps' 

import { ResponsiveWebDesignApp, UnitsAndProps } from './setup-app/web-responsive-design-apps-list/index.responsive.web.fundamentals';

/**Flexbox-grid-sass-and-animations app version 46 -
 * App js file - Features:
 * 
 *       --> Adding 'UnitsAndProps' and 
 *           building a route for it. 
 * 
 * Note: starting to build the ui color 
 * fundamental app
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
        <Route path='/apps/web-design-fundamentals-app/ui-alignment' element={<UIAlignmentApp />}/>
        <Route path='/apps/web-design-fundamentals-app/ui-Whitespace-and-alignment-combined' element={<UIWhitespaceAndAlignmentApp />}/>
        <Route path='/apps/web-design-fundamentals-app/ui-contrast-and-scale' element={<UIContrastAndScaleApp />}/>
        <Route path='/apps/web-design-fundamentals-app/ui-typography' element={<UITypographyApp />}/>
        <Route path='/apps/web-design-fundamentals-app/ui-color' element={<UIColorApp />}/>
        <Route path='/apps/web-design-fundamentals-app/ui-web-fundamental-challenge-2' element={<UIFormApp />}/>
        <Route path='/apps/web-design-fundamentals-app/ui-visual-hierarchy-design' element={<UIVisualHierarchyApp />}/>
        <Route path='/apps/web-design-fundamentals-app/ui-design-challenge' element={<UIDesignChallenge />}/>
        <Route path='/apps/web-responsive-design-fundamentals-app' element={<ResponsiveWebDesignApp />}/>
        <Route path='/apps/web-responsive-design-fundamentals-app/units-and-props' element={<UnitsAndProps />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;