import React from "react";

import { FlexBoxWrapper } from "../flexbox.styled.components";
import { InlineFlexWrapper } from "../flexbox.styled.components";

import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import InlineFlexProp from "../../components/inline-flex-prop.component";
import { useAppContext } from '../../context'

/**Flexbox-grid-sass-and-animations app version 9 -
 * flexbox-app - Features:
 * 
 *      --> Destructuring 'toggleFlex' functionality
 *          and 'flex' value from 'useAppContext()'
 * 
 * Note: this is hte context implementation for
 * this value and feature
 */

/**1st App -- Flexbox App */
const FlexBoxApp = () => {

    const { toggleFlex, flex } = useAppContext();
    //console.log('Context implementation FlexBoxApp => ', flex)

    return( 
        <>
        {/**1st App -- FlexBox App */}
            <ComplexTitle  
                title={<p>This Is 
                    The <span className="flexbox-span">Flexbox 
                    App</span></p>}/>     
            <button 
                onClick={toggleFlex}>{flex ? 
                'Not flex' : 'Flex'}</button>

            <FlexBoxWrapper toggleFlex={flex}>
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