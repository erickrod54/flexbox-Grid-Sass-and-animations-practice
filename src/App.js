import React from 'react'
import FlexBoxApp from './setup-app/flexbox-app/flexbox-app';
import FlexBoxManipulationApp from './setup-app/flexbox-app/flexbox.manipulation-app';
import FlexPropApp from './setup-app/flexbox-app/flex.direction.property-app';
import FlexFlow from './setup-app/flexbox-app/flexbox.flow-app';

/**Flexbox-grid-sass-and-animations app version 11 -
 * App js file - Features:
 * 
 *      --> Taking off the prop drills at 
 *          'FlexPropApp'
 * 
 * Note: With this change will be easier to implement
 * routing to seperate the apps into sections ( this
 * changes is going to be in next versions)
 */


function App() {

  return (
    <>
      <h2>The Modern Flexbox, Grid, Styles and Animations</h2>
      <div style={{ padding: '2rem'}}>
        <FlexBoxApp />
        <FlexBoxManipulationApp />
        <FlexPropApp />
        <FlexFlow />
      </div>
    </>
  );
}

export default App;
