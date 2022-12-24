import React, { useContext, useState } from "react";
import { appWebResponsiveData, viewPortData, weatherAppIcons } from "../data";

/**Flexbox-grid-sass-and-animations app version 59 -
 * 'WebResponsiveContext' - Features:
 * 
 *      --> Relocating all features and states
 *          related with web responsive 
 *          fundamentals.
 * 
 * Note: By this version everything is done in
 * this component.
 */

const WebResponsiveContext = React.createContext();


const WebResponsiveProvider = ({ children }) => {

    /**here i build 'UnitsAndProps' states and handlers */
    const [ height, setHeight ] = useState('')
    const [ width, setWidth ] = useState('')
    const [ maxheight, setMaxheight ] = useState('')
    const [ maxwidth, setMaxwidth ] = useState('') 
    
    
    const handleWidth = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('width => name selected ==>', name, 'value selected ==>', value)
        
        setWidth({ ...width, [name]:value})
    }
    
    const handleHeight = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('height => name selected ==>', name, 'value selected ==>', value)
        
        setHeight({ ...height, [name]:value})
    }
    
    const handleMaxwidth = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('max width => name selected ==>', name, 'value selected ==>', value)
        
        setMaxwidth({ ...maxwidth, [name]:value})
    }
    
    const handleMaxheight = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('max height => name selected ==>', name, 'value selected ==>', value)
        
        setMaxheight({ ...maxheight, [name]:value})
    }


    return(
        <WebResponsiveContext.Provider  
        value={{ 
            height,
            width,
            maxheight,
            maxwidth,
            handleWidth,
            handleHeight,
            handleMaxwidth,
            handleMaxheight,
            appWebResponsiveData,
            viewPortData,
            weatherAppIcons
         }}>
                {children}
            </WebResponsiveContext.Provider>
    )
}

const useWebResponsiveContext = () => {
    return useContext(WebResponsiveContext)
}

export { WebResponsiveProvider, useWebResponsiveContext }