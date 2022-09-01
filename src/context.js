import React, { useContext, useReducer, useState } from "react";
import { TOGGLE_FLEX, TOGGLE_FLEX_MANIPULATION_APP } from './actions'
import reducer from "./reducer";

import { flowData, flexPropData, flexWrapData, appsLinksData } from "./data";

/**Flexbox-grid-sass-and-animations app version 12 -
 * context js file - Features:
 * 
 *      --> Importing 'appsLinksData' and 
 *          providing it throught the 
 *          provider.    
 * 
 * Note: Now these features and states live in
 * the context and are going to be provided from
 * here to the components that need it
 * 
 * pending to build actions for them
 * 
 * 'appsLinksData' is going to be use to 
 * build 'AppElement' Component.
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

  /**here i build the flow state */
  const [ flow, setFlow ] = useState({
    rowwrap: "row wrap",
    columnwrap:"column wrap",
    rowreversewrap:"row-reverse wrap",
    columnreversewrap:"column-reverse wrap",
    rownowrap:"row nowrap",
    columnnowrap:"column nowrap",
    rowreversenowrap:"row-reverse nowrap",
    columnreversenowrap:"column-reverse nowrap",
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

const handleFlow = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('flow => name selected ==>', name, ', value in it ==>', value)

    setFlow({...flow, [name]:value })
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
                wrap,
                flow, 
                handleFlow,
                flowData,
                flexPropData,
                flexWrapData,
                appsLinksData
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