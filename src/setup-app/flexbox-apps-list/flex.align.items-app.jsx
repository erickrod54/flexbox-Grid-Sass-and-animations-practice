import React from "react";
import ComplexTitle from "../../components/complex-title";
import AlignItemsContent from "../../components/align.items-content.component";

import { AlignItemsAppWrapper } from "../flexbox.styled.components";

import FlexProp from "../../components/flex-prop.component";

import { useAppContext } from "../../context";

/**Flexbox-grid-sass-and-animations app version 13 -
 * 'flexbox.direction.preperty-app' - Features:
 * 
 *      --> Destructuring props to build 
 *          'FlexAlignItemsApp' functionality.
 * 
 *      --> Importing and placing 'ComplexTitle'
 *          to set the main-title.
 * 
 *      --> Building the return and drilling props
 *          to control css and get state 'data' 
 *          props
 * 
 * Note: By this version is everything done for this 
 * component.
 */

const FlexAlignItemsApp = () => {

    const { padding, childpadding, handlePadding, handleChildpadding, align, handleAlign } = useAppContext()

    return(
        <>
        <ComplexTitle title={<h2><span className='align-items-app'>Align Items App:<p>( this props only take effect on cross-axis, must be a height defined)</p></span></h2>}/>
        <AlignItemsContent />
        
        <select 
                name="selection" 
                id="selection" 
                value={align} 
                onChange={handleAlign}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select an align-items</option>1
                    <option value='stretch'>stretch</option>
                    <option value='flex-start'>flex-start</option>
                    <option value='flex-end'>flex-end</option>
                    <option value='center'>center</option>
                    <option value='baseline'>baseline</option>
                </select>
        
                <div style={{ padding: '2rem'}}>
                {align.selection === 'baseline' ? 
                <>
                <select 
                name="selection" 
                id="selection" 
                value={padding} 
                onChange={handlePadding}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select an padding:</option>1
                    <option value='20px'>20px - ( applied to container)</option>
                </select>
                
                <select 
                name="selection" 
                id="selection" 
                value={childpadding} 
                onChange={handleChildpadding}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select an padding:</option>1
                    <option value='5px'>5px - ( applied to child container)</option>
                </select>
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