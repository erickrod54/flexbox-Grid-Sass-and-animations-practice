import React, { useContext } from "react";

import { appsLinksData } from "./data";

  /**Flexbox-grid-sass-and-animations app version 59 -
   * context js file - Features:
   * 
   *      --> Clearing main context to use it for
   *          states and features of the main 
   *          application
   * 
   * Note: This file is going to be refactor en later
   * versions
   */
  
 
  
  /**here i build the AppContext */
  const AppContext = React.createContext();
  
  /**here i build the AppProvider */
  const AppProvider = ({ children }) => {
  
return(
  <AppContext.Provider 
  value={{
    appsLinksData,
  }}
  >{children}
        </AppContext.Provider>
    )
}

/**here i build the 'useContext' hook */
const useAppContext = () => {
    return useContext(AppContext)
}

/**i export all three */
export { AppContext, AppProvider, useAppContext}