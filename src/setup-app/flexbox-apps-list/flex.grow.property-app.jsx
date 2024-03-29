import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import { FlexGrowPropertyWrapper } from "../flexbox.styled.components";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 61.06 -
 * FlexGrowPropertyApp - Features:
 * 
 *     --> Destructuring 'flexItemGrowArray' from the 
 *        context 
 * 
 * Note: Pending to migrate data
 */

const FlexGrowPropertyApp = () => {

    const { grow, itemGrow, handleGrow, handleItemGrow, flexGrowArray, flexItemGrowArray } = useFlexboxContext()
 
    return(
        <>
        <ComplexTitle title={<h2><span className="grow-property-app">
            flex grow property app:
            </span></h2>}/>
        
            <h2>Flex grow property show the true beauty of 
                properties flex manipulation, because i can
                manipulate the width size of an element 
                selected and make it responsive at the same 
                time, this will work with 'css pseudo-selectors'
                but will apply the property 'flex-grow' in 
                positive numbers, the grow default value is '0'
            </h2>
            
            <SelectionForm grow={ grow } handler={handleGrow} propertiesArray={flexGrowArray} propertyname={'flex-grow'} />

            <SelectionForm itemGrow={ itemGrow } handler={handleItemGrow} propertiesArray={flexItemGrowArray} propertyname={'grow item #'} />
           
        <h2>For this case the item # 1, has already set a flex-grow in '1', so whatever 
            element i select to grow will share the extra space with item # 1
        </h2>

        <FlexGrowPropertyWrapper grow={grow} itemGrow={itemGrow}>
           <FlexProp />          
        </FlexGrowPropertyWrapper>             
        </>

       
    )
}

export default FlexGrowPropertyApp;