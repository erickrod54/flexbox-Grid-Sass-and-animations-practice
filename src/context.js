import React, { useContext, useReducer, useState } from "react";
import { TOGGLE_FLEX, TOGGLE_FLEX_MANIPULATION_APP } from './actions'
import reducer from "./reducer";

/**Flexbox-grid-sass-and-animations app version 10 -
 * context js file - Features:
 * 
 *      --> Migrating 'handleChange', 'handleWrap'
 *          features, and 'direction', and 'wrap' 
 *          values from App js     
 * 
 * Note: Now these features and states live in
 * the context and are going to be provided from
 * here to the components that need it
 * 
 * pending to build actions for them
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

    const [ direction, setDirection ] = useState({
        row: 'row',
        column:'column',
        rowreverse: 'row-reverse',
        columnreverse:'column-reverse'
    })

    /**here i build the wrap state */
   const [ wrap, setWrap ] = useState({
    nowrap: 'nowrap',
    wrap:'wrap',
    wrapreverse:'wrap-reverse'
  })

    const handleChange = (e) => {
     const name = e.target.name;
     const value = e.target.value;
 
     /**here i test the selection using the event object*/
     console.log('direction( made on context)=> name selected ==>', name, ', value in it ==>', value)
 
     setDirection({...direction, [name]:value})
 }

  /**here i build the direction state */


/**here i build the 'handleWrap' feature*/
  const handleWrap = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  /**here i test the selection using the event object*/
  console.log('wrap => name selected ==>', name, ', value in it ==>', value)

  setWrap({...wrap, [name]:value })
}

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
                toggleFlexManApp,
                handleChange,
                direction,
                handleWrap,
                wrap
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