import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexAlignSelf from "../../components/flex.align.self.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import { FlexAlignSelfPropertyWrapper } from "../flexbox.styled.components";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 61.00 -
 * 'FlexAlignSelfPropertyApp' - Features:
 * 
 *      --> Destructuring 'alignSelfArray' from the context
 * 
 * Note: Pending to migrate data
 */

const FlexAlignSelfPropertyApp = () => {

    const { alignself, itemAlignself, align, handleAlignself, handleItemAlignself, handleAlign, alignSelfArray, itemsArray, baselineArray } = useFlexboxContext()
    
    
    
    console.log('the aligself ==>', alignself, 'and the itemAlignself ==> ', itemAlignself)
    return(
        <>
        <ComplexTitle title={<h2>
            <span className="flex-align-self-app">
            flex align self property app:
            </span></h2>}/>

        <h2>In order to work, the container 'ul' element must 
            have 'align-items: flex-start;' because otherwise
            items will be stretch, once this last done, the 
            prop 'align-self' will move the item across the main axis
            ( this prop will manipulate the element targeted with
             'auto', 'flex-end', 'center', 'stretch', 'baseline' props )
        </h2>

        <h3>select an align-self value:</h3>
        <SelectionForm propertyvalue={alignself} handler={handleAlignself} propertiesArray={alignSelfArray} propertyname={'align-self'} />

         {alignself.selection === 'baseline' ?
           <>
            <h3>to apply 'baseline' correctlly i have to change the align
                items prop od the container from 'flex-start' to 'baseline'
            </h3>
            
            <SelectionForm propertyvalue={align} handler={handleAlign} propertiesArray={baselineArray} propertyname={'align-self'} />
             
           </>
           :
           null 
        }

                <h3>select an item to apply align-self:</h3>
                <SelectionForm propertyvalue={itemAlignself} handler={handleItemAlignself} propertiesArray={itemsArray} propertyname={'align-self item #'} />
                

        <FlexAlignSelfPropertyWrapper alignself={alignself}  itemAlignself={itemAlignself} align={align}>
            <FlexAlignSelf />       
        </FlexAlignSelfPropertyWrapper>    
        
        </>
    )
}

export default FlexAlignSelfPropertyApp;