import React from "react";
import { FlexboxFlowWrapper } from "../flexbox.styled.components";
import ComplexTitle from "../../components/complex-title";
import FlexBoxWrap from '../../components/flex-prop-wrap.component';
import FlexFlowContent from "../../components/flexflow-content.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";

/**Flexbox-grid-sass-and-animations app version 60.03 -
 * 'FlexFlow' app - Features:
 * 
 *     --> Redirecting states and features by 
 *         'useFlexboxContext()'.
 * 
 *     --> Changing versioning to 2 digits 
 * 
 * Note: the only prop that i drill is for the Style Component
 * to give the value that needs to change dynamiclly and apply
 * the 'flow' style by the selection
 */

const FlexFlow = () => {

    /**here i destructure props */
    const { flow, handleFlow } = useFlexboxContext() 

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
        <select
            name='selection'
            id='selection'
            value={ flow }
            onChange={handleFlow}>
                <option value="">Select a direction</option>
                <option value="row wrap">row wrap</option>
                <option value="column wrap">column wrap</option>
                <option value="row-reverse wrap">row-reverse wrap</option>
                <option value="column-reverse wrap">column-reverse wrap</option>
                <option value="row nowrap">row nowrap</option>
                <option value="column nowrap">column nowrap</option>
                <option value="row-reverse nowrap">row-reverse nowrap</option>
                <option value="column-reverse nowrap">column-reverse nowrap</option>
            </select>
        
        <FlexFlowContent />
        
        <FlexboxFlowWrapper flow={flow}>
            <FlexBoxWrap />
        </FlexboxFlowWrapper>
        </>

    )
}

export default FlexFlow;