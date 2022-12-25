import React from "react";
import { useFlexboxContext } from "../apps-context/flexbox.context";


/**Flexbox-grid-sass-and-animations app version 60.01 -
 * 'FlexWrapContent' Component - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits
 * 
 * Note: So far by this version i build the data for this three last
 * apps.
 */

const FlexWrapContent = () => {

    const { wrap, flexWrapData } = useFlexboxContext()

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
 