import React, { useState } from "react";
import { FlexBoxWrapper } from "./flexbox.styled.components";
import ComplexTitle from "../../components/complex-title";
/**Flexbox-grid-sass-and-animations app version 2 -
 * flexbox-app - Features:
 * 
 *      -->Importing and Placing 'ComplexTitle' to
 *         Customize 'FlexBoxApp' title.
 * 
 * Note:This is the first Component for Flexbox-grid-
 * sass-and-animations practice.
 * 
 * pending how to customize the title even more, for 
 * example a section of the string
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
            <ComplexTitle  title={'This Is The Flexbox App'}/>
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