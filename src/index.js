import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import { FlexboxtProvider } from './apps-context/flexbox.context';
import { GridProvider } from './apps-context/grid.context';
import { UIDesignProvider } from './apps-context/ui.web.design.fundamentals.contex';
import { WebResponsiveProvider } from './apps-context/web.responsive.context';

/**Flexbox-grid-sass-and-animations app version 60.02 -
 * index js file - Features:
 * 
 *      -->Importing and Wrapping the whole app
 *         using the providers 'FlexboxtProvider',
 *         'GridProvider', 'UIDesignProvider' and
 *         'WebResponsiveProvider' 
 * 
 *      --> Changing versioning to 2 digits.
 * 
 * Note: This way each provider will provide data, states
 * and handlers for the specific list of apps of each
 * context.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FlexboxtProvider>
        <GridProvider>
          <UIDesignProvider>
            <WebResponsiveProvider>
              <App />
            </WebResponsiveProvider>
          </UIDesignProvider>
        </GridProvider>
      </FlexboxtProvider>
    </AppProvider>
  </React.StrictMode>
);


