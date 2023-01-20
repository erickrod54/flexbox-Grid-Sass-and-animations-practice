import React from "react";
import { FlexboxFlowWrapper } from "../flexbox.styled.components";
import ComplexTitle from "../../components/complex-title";
import FlexBoxWrap from '../../components/flex-prop-wrap.component';
import FlexFlowContent from "../../components/flexflow-content.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 61.07 -
 * 'FlexFlow' app - Features:
 * 
 *     --> Destructuring flexFlowAray from the context
 * 
 * Note: Pending to migrate data
 */

const FlexFlow = () => {

    /**here i destructure props */
    const { flow, handleFlow, flexFlowArray } = useFlexboxContext() 

    return(
        <>
        {/**here i build the custom title */}
        <ComplexTitle 
            title={<p><span className="flexbox-properties">
            flexbox-flow
        </span> for containers:</p>}/>

            <h2>flex flow properties</h2>
            <p>flex flow is a mix flexwrap and flex prop fetaures</p>
        
        {/**here select to show the options to the user */}
        <SelectionForm flow={ flow } handler={handleFlow} propertiesArray={flexFlowArray} propertyname={'flex-flow'} />
        
        <FlexFlowContent />
        
        <FlexboxFlowWrapper flow={flow}>
            <FlexBoxWrap />
        </FlexboxFlowWrapper>
        </>

    )
}

export default FlexFlow;