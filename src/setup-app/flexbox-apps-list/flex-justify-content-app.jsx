import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { JustifyContentAppWrapper } from "../flexbox.styled.components";
import JustifyContent from '../../components/justifyflex-content.component';
import { useFlexboxContext } from "../../apps-context/flexbox.context";

/**Flexbox-grid-sass-and-animations app version 60.02 -
 * 'JustifyContentApp' - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits.
 * 
 * Note: By this version everything is done in
 * this component.
 */

const JustifyContentApp = () => {

    const { justify, handleJustify } = useFlexboxContext()

    return(
        <>
        <ComplexTitle 
        title={<h2><span 
            className='justify-app'>Justify Content App:</span></h2>}/>
        <JustifyContent justify={justify} /> 
        <select 
                name="selection" 
                id="selection" 
                value={justify} 
                onChange={handleJustify}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a justify</option>1
                    <option value='flex-start'>flex-start</option>
                    <option value='flex-end'>flex-end</option>
                    <option value='center'>center</option>
                    <option value='space-between'>space-between</option>
                    <option value='space-around'>space-around</option>
                    <option value='space-evenly'>space-evenly</option>
                </select>

        <JustifyContentAppWrapper justify={justify}>
        <FlexProp/>
        </JustifyContentAppWrapper>
        </>
    )
}

export default JustifyContentApp;