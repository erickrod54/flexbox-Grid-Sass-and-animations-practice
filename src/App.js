import React from 'react'
import FlexBoxApp from './setup-app/flexbox-app/flexbox-app';
import FlexBoxManipulationApp from './setup-app/flexbox-app/flexbox.manipulation-app';
import FlexPropApp from './setup-app/flexbox-app/flex.direction.property-app';
import { useState } from 'react';
import { useAppContext } from './context'

/**Flexbox-grid-sass-and-animations app version 8 -
 * App js file - Features:
 * 
 *      --> Destructuring 'data' from 
 *         'useAppContext()' to test 
 *          the context. 
 * 
 * Note: by this version is starting the
 * context arquitecture implementation.
 */
function App() {

  const data = useAppContext()

  console.log('provided from AppProvider ==> ', data)
  /**here i build the wrap state */
  const [ wrap, setWrap ] = useState({
    nowrap: 'nowrap',
    wrap:'wrap',
    wrapreverse:'wrap-reverse'
  })

  /**here i build the direction state */
  const [ direction, setDirection ] = useState({
    row: 'row',
    column:'column',
    rowreverse: 'row-reverse',
    columnreverse:'column-reverse'
})

/**here i build the 'handleWrap' feature*/
const handleWrap = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  /**here i test the selection using the event object*/
  console.log('wrap => name selected ==>', name, ', value in it ==>', value)

  setWrap({...wrap, [name]:value })
}

/**here i build the 'handleChange' feature
 * should be 'handleDirection'
*/
const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    /**here i test the selection using the event object*/
    console.log('direction => name selected ==>', name, ', value in it ==>', value)

    setDirection({...direction, [name]:value})
}

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
