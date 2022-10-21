import React, { useContext, useReducer, useState } from "react";
import { TOGGLE_FLEX, TOGGLE_FLEX_MANIPULATION_APP } from './actions'
import reducer from "./reducer";

import { flowData, flexPropData, flexWrapData, appsLinksData, JustifyFlexData, alignItemsData, alignContentData, orderPropertyData, flexGrowPropertyData, appWebFundamentalsData } from "./data";


/**Flexbox-grid-sass-and-animations app version 26 -
 * context js file - Features:
 * 
 *      -->Importing and providing 
 *        'appWebFundamentalsData'
 * 
 * Note: This features added due to the last app
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

  /**here i build the 'aligncontent' state*/
  const [ aligncontent, setAligncontent ] = useState({
    stretch:'stretch',
    flexstart:'flex-start',
    flexend:'flex-end',
    center:'center',
    spacebetween:'space-between',
    spacearound:'space-around',
    spaceevenly: 'space-evenly'
  })

  /**here i build the state for orderProperty */
  const [ order, setOrder ] = useState(0)
  const [ item, setItem ] = useState(0)


  /**here i build the grow property state */
  const [ grow, setGrow ] = useState(0)
  const [ itemGrow, setItemGrow ] = useState(0)

  /**here i build 'shrink' prop and 'itemShrink'*/
  const [ shrink, setShrink ]  = useState(1)
  const [ itemShrink, setItemShrink ] = useState({
    itemone:1,
    itemtwo:2,
    itemthree:3,
    itemfour:4,
    itemfive:5
  })

  /**here i build 'basis' prop and 'itemBasis' prop*/
  const [ basis, setBasis ] = useState({ auto: 'auto' })
  const [ itemBasis, setItemBasis ] = useState({
    itemone:1,
    itemtwo:2,
    itemthree:3,
    itemfour:4,
    itemfive:5
  })

  /**here build 'alignself' and 'itemAlignself' props */
  const [ alignself, setAlignself ] = useState({
    auto:'auto',
    flexend:'flex-end',
    center:'center',
    stretch:'stretch',
    baseline:'baseline'
  })

  const [ itemAlignself, setItemAlignself ] = useState({
    itemone:1,
    itemtwo:2,
    itemthree:3,
    itemfour:4,
    itemfive:5,
    six:6,
    seven:7,
    eight:8
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

const handleAlignContent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('align content => name selected ==>', name, 'value selected ==>', value)

    setAligncontent({...aligncontent, [name]:value })
}

/**functionality for 'handlerder' */
const handleOrder = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  /**here i test the selection using the event object*/
  console.log('order => name selected ==>', name, ', value in it ==>', value)

  setOrder({...order, [name]:value })
}

/**functionality for handleItemOrder */
const handleItemOrder = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    /**here i test the selection using the event object*/
    console.log('order => name selected ==>', name, ', value in it ==>', value)
  
    setItem({...item, [name]:value })
  }

  const handleGrow = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    /**here i test the selection */
    console.log('grow => name selected ==>', name, ', value in it ==>', value)
  
      setGrow({ ...grow,[name]:value })

  }

  const handleItemGrow = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    /**here i test the selection */
    console.log('grow => name selected ==>', name, ', value in it ==>', value)
  
      setItemGrow({ ...itemGrow,[name]:value })

  }

  /**here i build 'handleShrink' */
  const handleShrink = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log('shrink => name selected ==>', name, ', value in it ==>', value)

    setShrink({ ...shrink, [name]:value})
  }

  /**here i build 'handleItemShrink' */
  const handleItemShrink = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(' # itemShrink => name selected ==>', name, ', value in it ==>', value)

    setItemShrink({ ...itemShrink, [name]: value})
  }

  /**here i build 'handleBasis' */
  const handleBasis = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(' flex-basis => name selected ==>', name, ', value in it ==>', value)

    setBasis({ ...basis, [name]: value })

  }

  /**here i build 'handleItemBasis'*/
  const handleItemBasis = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(' # itemBasis => name selected ==>', name, ', value in it ==>', value)

    setItemBasis({ ...itemBasis, [name]:value })
  }

  /**here i build 'handleAlignself', and 'handleItemAlignself' */

   const handleAlignself = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      console.log(' alignself prop => name selected ==>', name, ', value in it ==>', value)
     
      setAlignself({...alignself, [name]:value })
   }

   const handleItemAlignself = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(' # ItemAlignself => name selected ==>', name, ', value in it ==>', value)

    setItemAlignself({...itemAlignself, [name]: value })
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
                handleAlignContent,
                handleItemOrder,
                handleOrder,
                handleGrow,
                handleItemGrow,
                handleShrink,
                handleItemShrink,
                handleBasis,
                handleItemBasis,
                handleAlignself,
                handleItemAlignself,
                direction,
                wrap,
                flow, 
                justify,
                align,
                padding,
                childpadding,
                aligncontent,
                order,
                item,
                grow,
                shrink,
                itemShrink,
                itemGrow,
                basis,
                itemBasis,
                alignself,
                itemAlignself,
                flowData,
                flexPropData,
                flexWrapData,
                appsLinksData,
                JustifyFlexData,
                alignItemsData,
                alignContentData,
                orderPropertyData,
                flexGrowPropertyData,
                appWebFundamentalsData
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