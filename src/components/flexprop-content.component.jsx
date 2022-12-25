import React from "react";
import { useFlexboxContext } from "../apps-context/flexbox.context";

/**Flexbox-grid-sass-and-animations app version 60.01 -
 * 'FlexPropContent' Component - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits 
 * 
 * Note: So far by this version i build the data for this three last
 * apps.
 */

const FlexPropContent = () => {

    const { direction, flexPropData } = useFlexboxContext()
    
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