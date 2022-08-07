import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';

/**Flexbox-grid-sass-and-animations app version 8 -
 * index js file - Features:
 * 
 *      -->Importing and Wrapping the whole app
 *         using 'AppProvider'        
 * 
 * Note: This way the 'AppProvider' will provide
 * data and features to the app.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);


