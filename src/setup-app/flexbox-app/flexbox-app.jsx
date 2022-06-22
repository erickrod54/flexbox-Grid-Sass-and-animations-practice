import React from "react";

import { FlexBoxWrapper } from "../flexbox.styled.components";
import { InlineFlexWrapper } from "../flexbox.styled.components";

import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import InlineFlexProp from "../../components/inline-flex-prop.component";
import ToggleFeature from "../../custom-hooks/toggle-hook";

/**Flexbox-grid-sass-and-animations app version 7 -
 * flexbox-app - Features:
 * 
 *      -->Refactoring the whole app.
 *      
 *      -->Importing custom hook 'ToggleFeature'.
 * 
 *      -->Destructuring 'Flex' state and 'ToogleFlex' 
 *         functionality to implement it for this app.
 * 
 * Note: In this version i build a custom hook 'ToggleFeature'
 * as a general component that i'll use for 'FlexBoxApp' and
 * 'FlexBoxManipulationApp', built as a custom hook is can
 * be destructured and use whereever i need it.
 */

/**1st App -- Flexbox App */
const FlexBoxApp = () => {

    const { Flex, toggleFlex } = ToggleFeature();
    console.log('this is FlexBoxApp => ', Flex)

    return( 
        <>
        {/**1st App -- FlexBox App */}
            <ComplexTitle  
                title={<p>This Is 
                    The <span className="flexbox-span">Flexbox 
                    App</span></p>}/>
            
            <p>the 'flex' or 'not flex' always starts by
            the first child. Note: they always 
            start from the left</p>        
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
        </>
    )
}

export default FlexBoxApp;