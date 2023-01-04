import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { JustifyContentAppWrapper } from "../flexbox.styled.components";
import JustifyContent from '../../components/justifyflex-content.component';
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 60.12 -
 * 'JustifyContentApp' - Features:
 * 
 *       --> Implementing 'SelectionForm'
 * 
 *      --> Building and testing data 
 * 
 * Note: Pending to migrate data
 */

const JustifyContentApp = () => {

    const { justify, handleJustify } = useFlexboxContext()

    const FlexJustifyData = [
        {
          id:1,
          value:"none"      
        },
        {
          id:2,
          value:'flex-start'      
        },
        {
          id:3,
          value:'flex-end'      
        },
        {
          id:4,
          value:'center'      
        },
        {
          id:5,
          value:'space-between'      
        },
        {
          id:6,
          value:'space-around'      
        },
        {
          id:7,
          value:'space-evenly'      
        },
    ]

    return(
        <>
        <ComplexTitle 
        title={<h2><span 
            className='justify-app'>Justify Content App:</span></h2>}/>
        <JustifyContent justify={justify} /> 

        <SelectionForm justify={justify} handler={handleJustify} propertiesArray={FlexJustifyData} propertyname={'justify-content'} />

        <JustifyContentAppWrapper justify={justify}>
        <FlexProp/>
        </JustifyContentAppWrapper>
        </>
    )
}

export default JustifyContentApp;