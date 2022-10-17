import React from "react";

/**Flexbox-grid-sass-and-animations app version 23 -
 * 'FlexAlignSelf' - Features:
 * 
 *      -->Building 'FlexAlignSelf' Componet.
 * 
 * Note: This is the longest version of FlexPropApp
 * in order to demonstrate how 'wrap' props are 
 * applied and how they act as container props.
 */

const FlexAlignSelf = () => {

    return(
        <>
            {/**This is the Parent element*/}
            <ul>
                {/**These are the children element*/}
                <li>1st child</li>
                <li>2nd child</li>
                <li>3rd child</li>
                <li>4th child</li>
                <li>5th child</li>
                <li>6st child</li>
                <li>7nd child</li>
                <li>8rd child</li>
            </ul>
        </>
    )
}

export default FlexAlignSelf;