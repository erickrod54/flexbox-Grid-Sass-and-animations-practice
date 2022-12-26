import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import { FlexShrinkPropertyWrapper } from "../flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 60.03 -
 * FlexShrinkPropertyApp - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits.      
 * 
 * Note:  By this version 'flex-shrink' is harcoded,
 * set it to '1'.
 * 
 * By this version states, and handlers are working properly
 */

const FlexShrinkPropertyApp = () => {

    const { shrink, itemShrink, handleShrink, handleItemShrink } = useFlexboxContext()
    
    //console.log(shrink)
    //console.log(itemShrink)

    return(
        <>
        <ComplexTitle 
            title={<h2>
                <span className='flex-shrink-app'>flex shrink app:
                </span></h2>}/>

        <h2>'flex-shrink' property by default is on ( the default
            value is 1 ), and this property is responsible for 
            make responsive the width of the 'items' making them
            shrink to adapt content to the width as the screen size
            reduce - the use case for this property is when you 
            have a content inside the 'item' that you want to
            maintain the way that it looks no matter the changes of
            the screen size so switching this prop to '0', and 
            testing decreasing and increasing the size changes can be
            appreciated</h2>

            <select 
                name="selection" 
                id="selection" 
                value={shrink} 
                onChange={handleShrink}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value={""}>Select shrink ( Default 1 )</option>1
                    <option value={1}> flex-shrink '1' ( Default 1 )</option>
                    <option value={0}> flex-shrink '0' </option>
            </select>

            <select 
                name="selection" 
                id="selection" 
                value={itemShrink} 
                onChange={handleItemShrink}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a shrink for an element</option>1
                    <option value={1}> shrink the item # 1</option>
                    <option value={2}> shrink the item # 2</option>
                    <option value={3}> shrink the item # 3</option>
                    <option value={4}> shrink the item # 4</option>
                    <option value={5}> shrink the item # 5</option>
            </select>
            
        <FlexShrinkPropertyWrapper shrink={shrink} itemShrink={itemShrink}>
            <FlexProp />
        </FlexShrinkPropertyWrapper>            
            
        </>
    ) 
}

export default FlexShrinkPropertyApp;