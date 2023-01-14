import React, { useContext, useReducer, useState } from "react";
import { TOGGLE_FLEX, TOGGLE_FLEX_MANIPULATION_APP } from '../actions'
import { alignItemsData, FlexAlignContentData, FlexJustifyData, flexPropData, flexWrapData, flowData, JustifyFlexData } from "../data";

import reducer from "../reducer";

/**Flexbox-grid-sass-and-animations app version 60.19 -
 * 'flexbox.context.js' - Features:
 * 
 *      --> Importing and Providing 'FlexAlignContentData'.
 * 
 * Note: By this version everything is done in
 * this component.
 */

const FlexboxContext = React.createContext();

/**here i build the initialState */
const initialState = {
    /**Props for flexbox-app and flex-box manipulation */
    
    /**by spreading the state i get all the prop values */
    flex: true,
    flexmanapp:true
}

const FlexboxtProvider = ({ children }) => {
    
    /**here i build the states and handler for 'flexbox-app' - use a redux
     * state management*/
    
    /**here i build the state to dispatch the actions */
    const [ state, dispatch ] = useReducer( reducer, initialState)
    
    /**handlers for 'flexbox-app'*/
    const toggleFlex = () => {
        dispatch({ type: TOGGLE_FLEX, payload: state.flex})
    }
    
    const toggleFlexManApp = () => {
        dispatch({ type: TOGGLE_FLEX_MANIPULATION_APP, payload: state.flexmanapp})
    }
    
    /**here ends 'flexbox-app' - use a redux  state management*/
    
    
    /**states and handler for flexalign-app */
    const [ direction, setDirection ] = useState({
        row: 'row',
        column:'column',
        rowreverse: 'row-reverse',
        columnreverse:'column-reverse'
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
    
    const handleDirection = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        /**here i test the selection using the event object*/
        console.log('direction( made on context)=> name selected ==>', name, ', value in it ==>', value)
        
        setDirection({...direction, [name]:value})
    }
    
    const handleAlignContent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('align content => name selected ==>', name, 'value selected ==>', value)
        
        setAligncontent({...aligncontent, [name]:value })
    }
    
    /**here i build state and handler for flexwrap */
    /**here i build the wrap state */
    const [ wrap, setWrap ] = useState({
        nowrap: 'nowrap',
        wrap:'wrap',
        wrapreverse:'wrap-reverse'
    })
    
    /**here i build the 'handleWrap' feature*/
    const handleWrap = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        /**here i test the selection using the event object*/
        console.log('wrap => name selected ==>', name, ', value in it ==>', value)
        
        setWrap({...wrap, [name]:value })
    }
    
    /**here i buils 'flex-flow' app states and handlers */
    
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
    
    /**here i build handle flow*/
    const handleFlow = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('flow => name selected ==>', name, ', value in it ==>', value)
        
        setFlow({...flow, [name]:value })
    }
    
    /**here i build the justify-content*/
    const [ justify, setJustify ] = useState({
        flexstart:'flex-start',
        flexend:'flex-end',
        center:'center',
        spacebetween:'space-between',
        spacearound:'space-around',
        spaceevenly:'space-evenly'
    })
    
    /**here i build the handler for justify */
    const handleJustify = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('justify => name selected ==>', name, 'value selected ==>', value)
        
        setJustify({ ...justify, [name]:value })
    }
    
    /**here i build states and handlers for 'align-items' app */
    
    /**'padding' and 'setPadding' this is for the user to select 
     * and visualize what baseline prop does*/
    
    const [ padding, setPadding ] = useState('20px');
    const [ childpadding, setChildpadding ] = useState('20px');
    
    /**here i build the satte for align */
    const [ align, setAlign ] = useState({
        stretch:'stretch',
       flexstart:'flex-start',
       flexend:'flex-end',
       center:'center',
       baseline:'baseline'
    })
    
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

    /**here i build states and handlers for orderPropertyApp */
    
    /**here i build the state for orderProperty */
    const [ order, setOrder ] = useState(0)
    const [ item, setItem ] = useState(0)

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

    /**here i build the states and handlers for FlexGrowPropertyApp */
     /**here i build the grow property state */
    const [ grow, setGrow ] = useState(0)
    const [ itemGrow, setItemGrow ] = useState(0)

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

      /**here i build states and handlers for FlexShrinkPropertyApp */
      /**here i build 'shrink' prop and 'itemShrink'*/
        const [ shrink, setShrink ]  = useState(1)
        const [ itemShrink, setItemShrink ] = useState({
            itemone:1,
            itemtwo:2,
            itemthree:3,
            itemfour:4,
            itemfive:5
        })

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

        /**here i build states and handlers 'FlexBasisPropertyApp' */
        
        /**here i build 'basis' prop and 'itemBasis' prop*/
        const [ basis, setBasis ] = useState({ auto: 'auto' })
        const [ itemBasis, setItemBasis ] = useState({
            itemone:1,
            itemtwo:2,
            itemthree:3,
            itemfour:4,
            itemfive:5
        })
    
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


        /**here i build states and handlers for FlexAlignSelfPropertyApp */
        
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

        /**Boxsizing states and handlers -- start*/

        const [ boxpadding, setBoxpadding ] = useState(false)
        const [ paddingbox, setPaddingbox ] = useState(false)
        const [ paddingboxcont, setPaddingboxcont] = useState(false)

        const handleBoxpadding = () => {
            setPadding(!padding)
        }

        const handlePaddingbox = () => {
            setPaddingbox(!paddingbox)
        }

        const handlePaddingboxcont = () => {
            setPaddingboxcont(!paddingboxcont)
        }

        /**Boxsizing states and handlers -- end*/

    return(
        <FlexboxContext.Provider value={{
            ...state,
            direction,
            boxpadding,
           paddingbox,
           paddingboxcont,
           handlePaddingbox,
           handleBoxpadding,
           handlePaddingboxcont, 
            aligncontent,
            wrap,
            flow,
            justify,
            padding,
            childpadding,
            align,
            order,
            item,
            grow,
            itemGrow,
            shrink,
            itemShrink,
            basis,
            itemBasis,
            alignself,
            itemAlignself,

            toggleFlex,
            toggleFlexManApp,
            handleAlignContent,
            handleDirection,
            handleWrap,
            handleFlow,
            handleJustify,
            handleAlign,
            handlePadding,
            handleChildpadding, 
            handleOrder,
            handleItemOrder,
            handleGrow,
            handleItemGrow,
            handleShrink,
            handleItemShrink,
            handleBasis,
            handleItemBasis,       
            handleAlignself,
            handleItemAlignself,
            flexWrapData,
            flexPropData,
            flowData,
            JustifyFlexData,
            alignItemsData,
            FlexJustifyData,
            FlexAlignContentData
        }}>
            {children}
        </FlexboxContext.Provider>
    )
}

const useFlexboxContext = () => {
    return useContext(FlexboxContext)
}

export { FlexboxContext, useFlexboxContext, FlexboxtProvider }