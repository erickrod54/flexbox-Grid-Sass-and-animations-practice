import React from 'react'
import FlexBoxApp from './setup-app/flexbox-app/flexbox-app';
import FlexBoxManipulationApp from './setup-app/flexbox-app/flexbox.manipulation-app';
import FlexPropApp from './setup-app/flexbox-app/flex.direction.property-app';
import { useAppContext } from './context'

/**Flexbox-grid-sass-and-animations app version 10 -
 * App js file - Features:
 * 
 *      --> Destructuring 'handleChange', 'direction', 
 *          'handleWrap' and 'wrap' from 
 *           'useAppContext()'   
 * 
 * Note: Migrating handleChange, handleWrap and their
 * states to the context  
 * 
 * pending to build actions for them.
 */
function App() {

  const { handleChange, direction, handleWrap, wrap } = useAppContext()

  return (
    <>
      <h2>The Modern Flexbox, Grid, Styles and Animations</h2>
      <div style={{ padding: '2rem'}}>
        <FlexBoxApp />
        <FlexBoxManipulationApp />
        {/**here i drilled states and features*/}
        <FlexPropApp 
              wrap={ wrap } 
              direction={direction} 
              handleChange={handleChange} 
              handleWrap={handleWrap}/>

        {console.log('the value app js ==>', direction.selection)}
      </div>
    </>
  );
}

export default App;
