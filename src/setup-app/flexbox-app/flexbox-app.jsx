import React, { useState } from "react";
import { FlexBoxWrapper } from "./flexbox.styled.components";
import ComplexTitle from "../../components/complex-title";
/**Flexbox-grid-sass-and-animations app version 3 -
 * flexbox-app - Features:
 * 
 *      -->Adding a custom style by using 'span' tag
 *         on the 'title' prop.
 * 
 *      -->Creating a second element of 'children' to
 *         visualize the difference between display 'flex'
 *         and 'inline flex'
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
            <ComplexTitle  
                title={<h2>This Is The <span className="flexbox-span">Flexbox App</span></h2>}/>
            {/**This Wrapper contains all styles for the
             * app, also a css function helper that gets
             * the Flex prop to toogle the css 'flex'
             */}
            <FlexBoxWrapper toggleFlex={Flex}>
            {/**This is the Parent element*/}
            
            <button onClick={toggleFlex}>{Flex ? 'Not flex' : 'Flex'}</button>
            <p>the 'flex' or 'not flex' always starts by
                the first child. Note: they always 
                start from the left</p>
            <ul>
                {/**These are the children element*/}
                <li>1st child</li>
                <li>2nd child</li>
                <li>3rd child</li>
                <li>4th child</li>
                <li>5th child</li>
            </ul>
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
            </FlexBoxWrapper>
        </>
    )
}

export default FlexBoxApp;