import React, { useContext } from "react";
import { cssGridlayoutData, gridIntroData } from "../data";

/**Flexbox-grid-sass-and-animations app version 59 -
 * 'GridContext' - Features:
 * 
 *      --> Building a context for all grid states 
 *          and features.
 * 
 * Note: By this version everything is done in
 * this component.
 */

const GridContext = React.createContext()

const GridProvider = ({ children }) => {
    
    return(
        <GridContext.Provider value={{ 
            gridIntroData,
            cssGridlayoutData
        }}>
            {children}
        </GridContext.Provider>
    )
}

const useGridContext = () => {
    return useContext(GridContext)
}

export { useGridContext, GridProvider }