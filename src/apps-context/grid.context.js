import React, { useContext, useState } from "react";
import { cssGridlayoutData, gridAlignSelfData, gridAutoColumnsData, gridAutoFlowData, gridAutoRowsData, gridGapData, gridIntroData, gridJustifyContentData, gridJustifySelfData, gridPlaceContentData, gridPlaceSelfData, itemData, itemDatacolumns, itemDataMessed, itemDatarows, itemSelection, maxMinRows, newGridrowSyntaxArray, newGridSyntaxArray, newshorthandGridGapData, oldGridrowSyntaxArray, oldGridSyntaxArray, oldshorthandGridGapData, RepeatFColumnsD, RepeatFRowsD } from "../data";

/**Flexbox-grid-sass-and-animations app version 62.05 -
 * 'GridContext' - Features:
 * 
 *      --> Importing and Providing 'maxMinRows'.
 * 
 * Note: 'oldGridSyntaxArray' is going to be use for
 * building grid column and grid row gap old syntax 
 * and new syntax app.
 */


const GridContext = React.createContext()

const GridProvider = ({ children }) => {
    
    /**start states and handlers for 'grid-column-gap' and 'column-gap'*/
    const [ oldsyntaxvalue, setOldsyntaxvalue ] = useState({
        pixels:'10px',
        rems:'1.5rem',
        vwunits:'7vw',
        percents:'10%',
        percentsless:'5%'
    })
    
    const [ newsyntaxvalue, setNewsyntaxvalue ] = useState({
        pixels:'10px',
        rems:'1.5rem',
        vwunits:'7vw',
        percents:'10%',
        percentsless:'5%'
    })
    
    
    const newGridSyntaxHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('grid-column-gap => name selected ==>', name, ', value in it ==>', value)
        
        setNewsyntaxvalue({...newsyntaxvalue, [name]:value })
    }
    
    const oldGridSyntaxHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('grid-column-gap => name selected ==>', name, ', value in it ==>', value)
        
        setOldsyntaxvalue({...oldsyntaxvalue, [name]:value })
    }
    
    /**end of */
    
    /**start of states and handlers for old 'grid-row-gap' and for new row-gap'*/
    
    const [ newrowsyntaxvalue, setNewrowsyntaxvalue ] = useState({
        pixels:'10px',
        rems:'1.5rem',
        vwunits:'7vw',
        percents:'10%',
        percentsless:'5%'
    })
    
    /**handler for 'newGridrowSyntaxArray'*/
    const newGridrowSyntaxHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('grid-column-gap => name selected ==>', name, ', value in it ==>', value)
        
        setNewrowsyntaxvalue({...newrowsyntaxvalue, [name]:value })
    }
    
    const [ oldrowsyntaxvalue, setOldrowsyntaxvalue ] = useState({
        pixels:'10px',
        rems:'1.5rem',
        vwunits:'7vw',
        percents:'10%',
        percentsless:'5%'
    })
    
    /**handler for 'oldGridrowSyntaxArray'*/
    const oldGridrowSyntaxHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('grid-column-gap => name selected ==>', name, ', value in it ==>', value)
        
        setOldrowsyntaxvalue({...oldrowsyntaxvalue, [name]:value })
    }
    
    /**start of shorthand Grid Gap new and old syntax
     * 
     * this combines row and columns in a single line */
    /**this has also new 'gap' and old 'grid-gap' syntax  */
    
    const [ newshorthandvalue, setNewshorthandvalue ] = useState({
        percents:'10% 15%',
        pixels:'10px 25px',
        vwunits:'15vw 15vh',
        remsandpxels:'25px 10rem',
        each:'50%'
    })
    
    /**handler for 'newGridrowSyntaxArray'*/
    const newshorthandGridGapHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('gap => name selected ==>', name, ', value in it ==>', value)
        
        setNewshorthandvalue({...newshorthandvalue, [name]:value })
    }
    
    const [ oldshorthandvalue, setOldshorthandvalue ] = useState({
        percents:'10% 15%',
        pixels:'10px 25px',
        vwunits:'15vw 15vh',
        remsandpxels:'25px 10rem',
        each:'50%'
    })
    
    /**handler for 'oldGridrowSyntaxArray'*/
    const oldshorthandGridGapHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('grid-gap => name selected ==>', name, ', value in it ==>', value)
        
        setOldshorthandvalue({...oldshorthandvalue, [name]:value })
    }

        /**states and handlers for repeat function */
        const [ repeatrows, setRepeatrows ] = useState({
            pixels:'150px 150px 150px',
            repeatpixels:'repeat(3, 150px)',
            repeatfraction:'repeat(2, 100px) 0.5fr',
        })
    
        
        const [ repeatcolumns, setRepeatcolumns ] = useState({
            pixels:'150px 150px 150px 150px',
            repeatpixels:'repeat(4, 150px)',
            repeatfractions:'1fr 2fr 2fr 1fr',
            pxelsandfr:'repeat(3, 150px) 1fr',
            pxelsandhalffr:'repeat(3, 150px) 0.5fr'
        })
        
        /**handler for 'oldGridrowSyntaxArray'*/
        const RepeatFColumnsHandler = (e) => {
            const name = e.target.name;
            const value = e.target.value;    
            
            console.log('repeat funtion columns=> name selected ==>', name, ', value in it ==>', value)
            
            setRepeatcolumns({...repeatcolumns, [name]:value })
        }
    
        const RepeatFRowsHandler = (e) => {
            const name = e.target.name;
            const value = e.target.value;    
            
            console.log('repeat funtion rows=> name selected ==>', name, ', value in it ==>', value)
            
            setRepeatrows({...repeatrows, [name]:value })
        }
    
    
    return(
        <GridContext.Provider value={{ 
            oldsyntaxvalue,
            newsyntaxvalue,
            newrowsyntaxvalue,
            oldrowsyntaxvalue,
            oldshorthandvalue,
            newshorthandvalue,
            repeatrows,
            repeatcolumns,
            gridIntroData,
            cssGridlayoutData,
            oldGridSyntaxArray,
            newGridSyntaxArray,
            oldGridrowSyntaxArray,
            newGridrowSyntaxArray,
            RepeatFColumnsD,
            RepeatFRowsD,
            gridAutoRowsData,
            gridAutoFlowData,
            gridAutoColumnsData,
            oldshorthandGridGapData,
            newshorthandGridGapData,
            gridJustifyContentData,
            itemSelection,
            gridPlaceSelfData,
            gridJustifySelfData,
            gridAlignSelfData,
            itemDatarows,
            itemDatacolumns,
            gridGapData,
            gridPlaceContentData,
            itemDataMessed,
            itemData,
            maxMinRows,
            newGridSyntaxHandler,
            oldGridSyntaxHandler,
            newGridrowSyntaxHandler,
            oldGridrowSyntaxHandler,
            newshorthandGridGapHandler,
            oldshorthandGridGapHandler,
            RepeatFColumnsHandler,
            RepeatFRowsHandler
        }}>
            {children}
        </GridContext.Provider>
    )
}

const useGridContext = () => {
    return useContext(GridContext)
}

export { useGridContext, GridProvider }