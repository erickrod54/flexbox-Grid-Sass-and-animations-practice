import React from "react";
import { useAppContext } from '../context';

/**Flexbox-grid-sass-and-animations app version 13 -
 * 'FlexFlowContent' Component - Features:
 * 
 *      --> Destructuring flow value and 'flowData' 
 *          data from 'useAppContext()'.
 * 
 *      --> Filtering and Mapping to render conditionally the 
 *          content data.
 * 
 * Note: So far by this version i build the data for this three last
 * apps.
 */

const FlexFlowContent = () => {

    const { flow, flowData } = useAppContext()

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

 
 