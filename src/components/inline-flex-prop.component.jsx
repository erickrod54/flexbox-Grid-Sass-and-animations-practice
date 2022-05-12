import React from "react";

/**Flexbox-grid-sass-and-animations app version 6 -
 * 'InlineFlexProp' Component - Features:
 * 
 *      -->Building 'InlineFlexProp' Component.
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
 */

const InlineFlexProp = () => {

    return(
        <>
            <p>Here i applied a inline-flex prop:</p>
            {/**The 'inline-flex' is applied to a 
             * parent level*/}
            <ul className='ul-inline-flex'>
                {/**These are the children element*/}
                <p>first parent element</p>
                <li>1st child</li>
                <li>2nd child</li>
                <li>3rd child</li>
            </ul>
            <ul className='ul-inline-flex'>
                <p>second parent element</p>
                {/**These are the children element*/}
                <li>1st child</li>
                <li>2nd child</li>
                <li>3rd child</li>
            </ul>
        </>
    )
}

export default InlineFlexProp;