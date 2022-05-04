import React, { useState } from "react";
import { FlexBoxWrapper } from "./flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 1 -
 * flexbox-app - Features:
 * 
 *      -->Building 'FlexBoxApp' Compoment.
 * 
 *      -->Building Toogle functionality to
 *          switch between a 'flex' and 'Note
 *          Flex' state.
 * 
 * Note:This is the first Component for Flexbox-grid-
 * sass-and-animations practice.
 */
const FlexBoxApp = () => {
    /**this is the Flex state */
    const [ Flex, setFlex ] = useState(false);
    
    /**Here is the toggle function */
    const toggleFlex = () => {
        setFlex(!Flex)
        console.log(Flex)
    }

    return(
        <>
            <h2>This is the <span>Flexbox app</span></h2>
            {/**This Wrapper contains all styles for the
             * app, also a css function helper that gets
             * the Flex prop to toogle the css 'flex'
             */}
            <FlexBoxWrapper toggleFlex={Flex}>
            {/**This is the Parent element*/}
            
            <button onClick={toggleFlex}>{Flex ? 'Not flex' : 'Flex'}</button>
            
            <ul>
                {/**These are the children element*/}
                <li>1st child</li>
                <li>2nd child</li>
                <li>3rd child</li>
                <li>4th child</li>
                <li>5th child</li>
            </ul>
            </FlexBoxWrapper>
        </>
    )
}

export default FlexBoxApp;