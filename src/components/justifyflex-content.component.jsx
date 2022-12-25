import React from "react";
import { useFlexboxContext } from "../apps-context/flexbox.context";

/**Flexbox-grid-sass-and-animations app version 60.01 -
 * 'FlexFlowContent' Component - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits 
 * 
 * Note: By this version everything is done in
 * this component.
 */

const JustifyContent = ({ justify }) => {

    const { JustifyFlexData } = useFlexboxContext()

    return(
        <section>
            
            {/**i have to 'filter' first to get the id that matches with
             * the 'flow.selection' and then i map to render the resulting 
             * array*/}

            {JustifyFlexData
            .filter((item) => item.id === justify.selection ).map((itemjustify) => {
                const { id, text } = itemjustify

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

export default JustifyContent;