import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { JustifyContentAppWrapper } from "../flexbox.styled.components";
import JustifyContent from '../../components/justifyflex-content.component';
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 60.18 -
 * 'JustifyContentApp' - Features:
 * 
 *       --> Destructuring FlexJustifyData
 * 
 * Note: Pending to migrate data
 */

const JustifyContentApp = () => {

    const { justify, handleJustify, FlexJustifyData } = useFlexboxContext()

    

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