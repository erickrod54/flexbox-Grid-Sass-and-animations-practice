import React from "react";

/**Flexbox-grid-sass-and-animations app version 6 -
 * FlexProp Component - Features:
 * 
 *      -->Building 'FlexProp' Component .
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
 */

const FlexProp = () => {

    return(
        <>
            <p>the 'flex' or 'not flex' always starts by
                the first child. Note: they always 
                start from the left</p>
            {/**This is the Parent element*/}
            <ul>
                {/**These are the children element*/}
                <li>1st child</li>
                <li>2nd child</li>
                <li>3rd child</li>
                <li>4th child</li>
                <li>5th child</li>
            </ul>
        </>
    )
}

export default FlexProp;