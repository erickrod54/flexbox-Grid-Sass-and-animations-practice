import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

/**Flexbox-grid-sass-and-animations app version 8 -
 * context js file - Features:
 * 
 *      -->Building 'AppContext' for the whole app.
 * 
 *      -->Building 'AppProvider' for the whole app.
 * 
 *      -->Building 'useAppContext' hook 
 * 
 *      -->Building 'initialState' to provide a test
 *         message
 * 
 *      -->Building state to use the reducer and start
 *         to build the actions.       
 * 
 * Note: now is pending to migrate all the data and
 * features and provide it througt the provider.
 */

/**here i build the initialState */
const initialState = {
    testMsg: 'success test context for flexbox-app',
}

/**here i build the AppContext */
const AppContext = React.createContext();

/**here i build the AppProvider */
const AppProvider = ({ children }) => {

    /**here i build the state to dispatch the actions */
    const [ state, dispatch ] = useReducer( reducer, initialState)

    /**i spread/copy the 'state' to test the context */
    return(
        <AppContext.Provider 
            value={{...state}}
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