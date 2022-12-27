import React, { useContext } from "react";
import { cssGridlayoutData, gridIntroData, oldGridSyntaxArray } from "../data";

/**Flexbox-grid-sass-and-animations app version 60.04 -
 * 'GridContext' - Features:
 * 
 *      --> Importing and providing 
 *          'oldGridSyntaxArray', cssGridlayoutData,
 *           oldGridSyntaxArray.
 * 
 * Note: 'oldGridSyntaxArray' is going to be use for
 * building grid column and grid row gap old syntax 
 * and new syntax app.
 */

const GridContext = React.createContext()

const GridProvider = ({ children }) => {
    
    return(
        <GridContext.Provider value={{ 
            gridIntroData,
            cssGridlayoutData,
            oldGridSyntaxArray
        }}>
            {children}
        </GridContext.Provider>
    )
}

const useGridContext = () => {
    return useContext(GridContext)
}

export { useGridContext, GridProvider }