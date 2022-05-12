import React, { useState } from "react";
import { FlexBoxWrapper } from "./flexbox.styled.components";
import ComplexTitle from "../../components/complex-title";
import SectionList from "../../components/section.list.component";
import { SectionListWrapper, InlineFlexWrapper } from "./flexbox.styled.components";
import FlexProp from "../../components/flex-prop.component";
import InlineFlexProp from "../../components/inline-flex-prop.component";

/**Flexbox-grid-sass-and-animations app version 6 -
 * flexbox-app - Features:
 * 
 *      -->Refactoring the whole app.
 *      
 *      -->Importing and Placing 'InlineFlexWrapper' Style Component.
 * 
 *      --> Importing and Palcing 'FlexProp' and 'InlineFlexPro'
 *          Component.
 * 
 *      --> Building 'flex' toggle for 'flex and box' model
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
 */

const FlexBoxApp = () => {
    /**this is the Flex state */
    const [ Flex, setFlex ] = useState(false);
    /**this is the flex state for 'SectionList' */
    const [ Flex1, setFlex1 ] = useState(false);


    /**Here is the toggle function for 'FlexProp'*/
    const toggleFlex = () => {
        setFlex(!Flex)
        console.log(Flex)
    }

    /**Here is the toggle function for 'Section' */
    const toggleFlex1 = () => {
        setFlex1(!Flex1)
        console.log(Flex1)
    }

    return( 
        <>
            <ComplexTitle  
                title={<p>This Is 
                    The <span className="flexbox-span">Flexbox 
                    App</span></p>}/>
                    
            <button 
                onClick={toggleFlex}>{Flex ? 
                'Not flex' : 'Flex'}</button>

            <FlexBoxWrapper toggleFlex={Flex}>
                <FlexProp />
            </FlexBoxWrapper>

             {/**Here i place the 'InlineFlexProp'*/}
            <InlineFlexWrapper>
                <InlineFlexProp />
            </InlineFlexWrapper>
            
            {/**here i place the 'SectionList'
            * Component */}  
            <ComplexTitle title={<p><span className="flexbox-span-manipulation">Flex-box</span> manipulation:</p>}/>
            <p>flex-box meant for flexible box, websites are 
            based in the 'box model' compose by margin, padding 
            and content, as follows:
            </p>
            
             <button 
                onClick={toggleFlex1}>{Flex1 
                ? 'Not flex' : 'Flex'}</button>

             <SectionListWrapper toggleFlex1={Flex1}>
                <SectionList />
             </SectionListWrapper>       
        </>
    )
}

export default FlexBoxApp;