import React, { useContext, useReducer, useState } from "react";
import { TOGGLE_FLEX, TOGGLE_FLEX_MANIPULATION_APP } from './actions'
import reducer from "./reducer";

import { flowData, flexPropData, flexWrapData, appsLinksData, JustifyFlexData, alignItemsData } from "./data";

/**Flexbox-grid-sass-and-animations app version 13 -
 * context js file - Features:
 * 
 *      --> Building and providing 'justify' state 
 *          value and 'handleJustify' feature.
 * 
 *      --> Importing and Providing 'JustifyData'.
 * 
 *      --> Building and providing 'align' state value 
 *          and 'handleJustify' feature.
 * 
 *      --> Importing and Providing 'alignItemsData'.
 * 
 * Note: i build the state for 'padding' and 'setPadding' 
 * this is for the user to select and visualize what 
 * 'baseline' prop does
 * 
 * 'baseline' affetcs the align for one selected child 
 * element ( by this version using pseudo elements )
 * i select and apply baseline on it. 
 * 
 * reference: 
 *  
 * https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
 * 
 * keywords: 'baseline', 'first baseline', 'last baselin'
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

  /**here i build the justify-content*/
  const [ justify, setJustify ] = useState({
    flexstart:'flex-start',
    flexend:'flex-end',
    center:'center',
    spacebetween:'space-between',
    spacearound:'space-around',
    spaceevenly:'space-evenly'
  })

  /**here i build the satte for align */
  const [ align, setAlign ] = useState({
    stretch:'stretch',
    flexstart:'flex-start',
    flexend:'flex-end',
    center:'center',
    baseline:'baseline'
  })

  /**here i build the state for 'padding' and 'setPadding' 
   * this is for the user to select and visualize what 
   * baseline prop does*/
  const [ padding, setPadding ] = useState('20px')
  const [ childpadding, setChildpadding ] = useState('20px')

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

/**here i build the handler for justify */
const handleJustify = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('justify => name selected ==>', name, 'value selected ==>', value)

    setJustify({ ...justify, [name]:value })
}

/**here i build the handler for align */
const handleAlign = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('align => name selected ==>', name, 'value selected ==>', value)

    setAlign({ ...align, [name]:value })
}

/**here i build the handler for 'padding' */
const handlePadding = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('container padding => name selected ==>', name, 'value selected ==>', value)

    setPadding({ ...padding, [name]:value})
}

/**here i buil the handler for 'childpadding' */
const handleChildpadding = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('child padding padding => name selected ==>', name, 'value selected ==>', value)

    setChildpadding({ ...childpadding, [name]:value})
}

   const toggleFlex = () => {
    dispatch({ type: TOGGLE_FLEX, payload: state.flex})
   }
   
   const toggleFlexManApp = () => {
    dispatch({ type: TOGGLE_FLEX_MANIPULATION_APP, payload: state.flexmanapp})
   }


    /**i spread/copy the 'state' to test the context
     * by this version i reorder the props state values
     * and the handlers
     */
    return(
        <AppContext.Provider 
            value={{
                ...state,
                toggleFlex,
                toggleFlexManApp,
                handleChange,
                handleJustify,
                handleAlign,
                handlePadding,
                handleChildpadding,
                handleWrap,
                handleFlow,
                direction,
                wrap,
                flow, 
                justify,
                align,
                padding,
                childpadding,
                flowData,
                flexPropData,
                flexWrapData,
                appsLinksData,
                JustifyFlexData,
                alignItemsData
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