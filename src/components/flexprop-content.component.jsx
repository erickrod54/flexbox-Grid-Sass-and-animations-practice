import React from "react";
import { useAppContext } from '../context'

/**Flexbox-grid-sass-and-animations app version 11 -
 * 'FlexPropContent' Component - Features:
 * 
 *      --> Destructuring 'direction' value and 'flexPropData' 
 *          data from 'useAppContext()'.
 * 
 *      --> Filtering and Mapping to render conditionally the 
 *          content data. 
 * 
 * Note: So far by this version i build the data for this three last
 * apps.
 */

const FlexPropContent = () => {

    const { direction, flexPropData } = useAppContext()
    
    return(
        <div>
            {/**i have to 'filter' first to get the id that matches with
             * the 'flow.selection' and then i map to render the resulting 
             * array*/}

            {flexPropData
            .filter((item) => item.id === direction.selection).map((itemdirection) => {
                const { id, text } = itemdirection; 

                    return(
                            <section key={id}>
                                <h4>You selected: '{id}'</h4>
                                <p>{text}</p>
                            </section>
                    )
            })}
        </div>
    )
    
}

export default FlexPropContent;