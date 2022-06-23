import React from "react";

/**Flexbox-grid-sass-and-animations app version 7 -
 * 'flex-prop-wrap.component' - Features:
 * 
 *      -->Building 'FlexPropWrap' Component .
 * 
 * Note: This is the longest version of FlexPropApp
 * in order to demonstrate how 'wrap' props are 
 * applied and how they act as container props.
 */

const FlexPropWrap = () => {

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
                <li>9th child</li>
                <li>10th child</li>
                <li>11th child</li>
                <li>12th child</li>
            </ul>
        </>
    )
}

export default FlexPropWrap;