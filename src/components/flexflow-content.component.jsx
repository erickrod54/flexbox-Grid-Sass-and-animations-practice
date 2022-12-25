import React from "react";
import { useFlexboxContext } from "../apps-context/flexbox.context";

/**Flexbox-grid-sass-and-animations app version 60.01 -
 * 'FlexFlowContent' Component - Features:
 * 
 *       --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits
 * 
 * Note: So far by this version i build the data for this three last
 * apps.
 */

const FlexFlowContent = () => {

    const { flow, flowData } = useFlexboxContext()

    return(
        <section>
            
            {/**i have to 'filter' first to get the id that matches with
             * the 'flow.selection' and then i map to render the resulting 
             * array*/}

            {flowData
            .filter((item) => item.id === flow.selection).map((itemflow) => {
                const { id, text } = itemflow

                return(
                    <article key={id}>
                        <h4>You selected: '{id}'</h4>
                        <p>{text}</p>
                    </article>
                ) 
            })}
          
                
        </section>
    )
}

export default FlexFlowContent;

 
 