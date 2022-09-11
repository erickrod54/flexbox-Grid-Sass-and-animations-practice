import React from "react";

/**Flexbox-grid-sass-and-animations app version 13 -
 * FlexProp Component - Features:
 * 
 *      -->Taking off the message in the content.
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
 */

const FlexProp = () => {

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
            </ul>
        </>
    )
}

export default FlexProp;