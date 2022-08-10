import React, { useContext, useReducer } from "react";
import { TOGGLE_FLEX, TOGGLE_FLEX_MANIPULATION_APP } from './actions'
import reducer from "./reducer";

/**Flexbox-grid-sass-and-animations app version 9 -
 * context js file - Features:
 * 
 *      --> Building props in the initialState for 
 *         'flexbox-app' and 'flex-box manipulation'.
 * 
 *      --> Dispatching 'TOGGLE_FLEX' action.
 * 
 *      --> Dispatching 'TOGGLE_FLEX_MANIPULATION_APP'
 *          action.
 *  
 *      --> Providing 'toggleFlex' and 
 *         'toggleFlexManApp' througt the 
 *          provider.       
 * 
 * Note: now is pending to migrate all the data and
 * features and provide it througt the provider.
 */

/**here i build the initialState */
const initialState = {
    /**Props for flexbox-app and flex-box manipulation */
    flex: true,
    flexmanapp:true
}

/**here i build the AppContext */
const AppContext = React.createContext();

/**here i build the AppProvider */
const AppProvider = ({ children }) => {

    /**here i build the state to dispatch the actions */
    const [ state, dispatch ] = useReducer( reducer, initialState)

   const toggleFlex = () => {
    dispatch({ type: TOGGLE_FLEX, payload: state.flex})
   }
   
   const toggleFlexManApp = () => {
    dispatch({ type: TOGGLE_FLEX_MANIPULATION_APP, payload: state.flexmanapp})
   }

    /**i spread/copy the 'state' to test the context */
    return(
        <AppContext.Provider 
            value={{
                ...state,
                toggleFlex,
                toggleFlexManApp
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