import React, { useState } from "react";
import { FlexBoxWrapper } from "./flexbox.styled.components";
import ComplexTitle from "../../components/complex-title";
import SectionList from "../../components/section.list.component";

/**Flexbox-grid-sass-and-animations app version 4 -
 * flexbox-app - Features:
 * 
 *      -->Importing and Placing 'SectionList' Component.
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
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
            <ComplexTitle title={<h2><span className="flexbox-span-manipulation">Flex-box</span> manipulation:</h2>}/>
            <p>flex-box meant for flexible box, websites are 
               based in the 'box model' compose by margin, padding 
               and content, as follows:
            </p>
                {/**here i place the 'SectionList'
                 * Component */}
                <SectionList />
               
            </FlexBoxWrapper>
        </>
    )
}

export default FlexBoxApp;