import React from "react";
import { useAppContext } from '../context'

/**Flexbox-grid-sass-and-animations app version 11 -
 * 'FlexWrapContent' Component - Features:
 * 
 *      --> Destructuring 'wrap' value and 'flexWrapData' 
 *          data from 'useAppContext()'.
 * 
 *      --> Filtering and Mapping to render conditionally the 
 *          content data. 
 * 
 * Note: So far by this version i build the data for this three last
 * apps.
 */

const FlexWrapContent = () => {

    const { wrap, flexWrapData } = useAppContext()

    return(
        <div>

            {/**i have to 'filter' first to get the id that matches with
             * the 'flow.selection' and then i map to render the resulting 
             * array*/}

            {flexWrapData
            .filter((item) => item.id === wrap.selection).map((itemwrap) => {
                
                const { id, text } = itemwrap;
                
                return(
                    <section key={id}>
                        <h4> You selected '{id}'</h4>
                        <p>{text}</p>
                    </section>
                )
            })}
        </div>
    )
}

export default FlexWrapContent;
 