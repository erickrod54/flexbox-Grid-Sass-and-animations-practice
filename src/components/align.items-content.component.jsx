import React from "react";
import { useAppContext } from "../context";

/**Flexbox-grid-sass-and-animations app version 13 -
 * 'FlexFlowContent' Component - Features:
 * 
 *      --> Building 'AlignItemsContent' app 
 * 
 * Note: By this version everything is done in
 * this component.
 */

const AlignItemsContent = () => {

    const { align, alignItemsData } = useAppContext()

    console.log('this is my data', alignItemsData)

    return(
        <section>
            {alignItemsData
            .filter((item) => item.id === align.selection).map((itemalign) => {
                const { id, text } = itemalign

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

export default AlignItemsContent;