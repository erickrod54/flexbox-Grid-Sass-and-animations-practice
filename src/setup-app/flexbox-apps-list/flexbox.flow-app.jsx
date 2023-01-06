import React from "react";
import { FlexboxFlowWrapper } from "../flexbox.styled.components";
import ComplexTitle from "../../components/complex-title";
import FlexBoxWrap from '../../components/flex-prop-wrap.component';
import FlexFlowContent from "../../components/flexflow-content.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 60.14 -
 * 'FlexFlow' app - Features:
 * 
 *     --> Implementing 'SelectionForm'
 * 
 *      --> Building and testing data 
 * 
 * Note: Pending to migrate data
 */

const FlexFlow = () => {

    /**here i destructure props */
    const { flow, handleFlow } = useFlexboxContext() 

    const flexFlowArray = [
        {
          id:1,
          value:'none'  
        },
        {
          id:2,
          value:'row wrap'  
        },
        {
          id:3,
          value:'column wrap'  
        },
        {
          id:4,
          value:'row-reverse wrap'  
        },
        {
          id:5,
          value:'column-reverse wrap'  
        },
        {
          id:6,
          value:'row nowrap'  
        },
        {
           id:7,
           value:'column nowrap'  
        },
        {
           id:8,
           value:'row-reverse nowrap'  
        },
        {
            id:9,
            value:'column-reverse nowrap'  
         },
    ]

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