import React from 'react'
import FlexBoxApp from './setup-app/flexbox-app/flexbox-app';

/**Flexbox-grid-sass-and-animations app version 1 -
 * App js file - Features:
 * 
 *      -->Setting up 'FlexBoxApp' Compoment.
 * 
 * Note:This is the first Component for Flexbox-grid-
 * sass-and-animations practice.
 */
function App() {
  return (
    <>
      <h2>The Modern Flexbox, Grid, Styles and Animations</h2>
      <div style={{ padding: '2rem'}}>
        <FlexBoxApp />
      </div>
    </>
  );
}

export default App;
