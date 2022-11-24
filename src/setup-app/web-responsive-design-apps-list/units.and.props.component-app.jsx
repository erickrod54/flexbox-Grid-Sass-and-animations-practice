import React from "react";
import styled from "styled-components";

/**Flexbox-grid-sass-and-animations app version 46 -
 * UnitsAndProps - Features:
 *
 *  
 *      --> Building UnitsAndProps.
 * 
 * 
 * Note: this data is going to be passed to build 
 * uiColorApp.
 */

const UnitsAndProps = () => {

    return(
        <Wrapper>
            <h2>units and props for responsiveness:</h2>

            <p>
                there are a group of props and units 
                that have specific use cases for
                responsiveness, let's start with the
                units and these are:
            </p>

            <ul>
                <li>
                    viewport hardware pixels
                </li>
                <li>
                    device independent pixels ( dips )
                </li>
                <li>
                    css pixels
                </li>
            </ul>

            <hr></hr>

            <h3>css pixels:</h3>

            <p>
                A software pixel, also called a CSS pixel in the
                web world, is a unit of measurement. The device 
                manufacturer determines how many hardware pixels 
                equals one software pixel, a concept known as the
                device pixel ratio.
            </p>

            <h3>device independent pixels: ( dips )</h3>

            <p>
                the device independent pixel get related 
                with css pixels by meta tags (from server tags
                to the client ) to display a ratio that end
                resulting in resposiveness
            </p>

            <h3>viewport hardware pixels:</h3>

            <p>
                The browser's viewport is the area of the window
                in which web content can be seen. This is often
                not the same size as the rendered page, in which 
                case the browser provides scrollbars for the user 
                to scroll around and access all the content.
            </p>

            <hr></hr>

            <p>
                responsiveness is the concept of how 
                apps can adapt and look well in all
                kind of devices, and the props:
            </p>

            <ul>
                <li>
                    max-width
                </li>
                <li>
                    min-width
                </li>
            </ul>


        </Wrapper>
    )
}


const Wrapper = styled.div`
    h2, h3{
        text-transform: capitalize;
        text-decoration: underline;
    }

    li{
        list-style-type: decimal;
        margin: 1rem 0 1rem 0
    }
`

export default UnitsAndProps;