import React from "react";
import ComplexTitle from "../../components/complex-title";
import AlignItemsContent from "../../components/align.items-content.component";

import { AlignItemsAppWrapper } from "../flexbox.styled.components";

import FlexProp from "../../components/flex-prop.component";

import { useFlexboxContext } from "../../apps-context/flexbox.context";
import SelectionForm from "../../components/selection.form.component";


/**Flexbox-grid-sass-and-animations app version 60.19 -
 * 'FlexAlignItemsApp' - Features:
 * 
 *      --> Destrcuturing data from context
 * 
 * Note: Pending to migrate data
 */

const FlexAlignItemsApp = () => {

    const { padding, childpadding, handlePadding, handleChildpadding, align, handleAlign,FlexAlignItemsArray, FlexBaselineArray,
      FlexBaselinechildArray, } = useFlexboxContext()

    

    return(
        <>
        <ComplexTitle title={<h2><span className='align-items-app'>Align Items App:<p>( this props only take effect on cross-axis, must be a height defined)</p></span></h2>}/>
        <AlignItemsContent />
        
        <SelectionForm propertyvalue={align} handler={handleAlign} propertiesArray={FlexAlignItemsArray} propertyname={'align-items'} />
        <SelectionForm propertyvalue={align} handler={handleAlign} propertiesArray={FlexAlignItemsArray} propertyname={'align-items'} /> 
                <div style={{ padding: '2rem'}}>
                {align.selection === 'baseline' ? 
                <>
                <SelectionForm propertyvalue={padding} handler={handlePadding} propertiesArray={FlexBaselineArray} propertyname={'align-items'} />
                {
                  padding.selection  ? 
                  <p>
                    a padding of <strong>{padding.selection}</strong> is applied equally to all the container children
                  </p>
                  :
                  null
                }

                <SelectionForm propertyvalue={childpadding} handler={handleChildpadding} propertiesArray={FlexBaselinechildArray} propertyname={'align-items'} />

                {
                  childpadding.selection  ? 
                    <p>
                      a padding of <strong>{childpadding.selection}</strong> is applied equally to the child
                    </p>
                  :
                  null
                }  

                </>

                :
                null
                }
                </div>

        <AlignItemsAppWrapper align={align} padding={padding} childpadding={childpadding}>
            <FlexProp />
        </AlignItemsAppWrapper>
        </>
    )
}

export default FlexAlignItemsApp;