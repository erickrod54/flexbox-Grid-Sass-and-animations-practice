import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { useAppContext } from "../../context";
import { FlexGrowPropertyWrapper } from "../flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 19 -
 * FlexGrowPropertyApp - Features:
 * 
 *       --> Building 'FlexGrowPropertyApp' Component
 * 
 *       --> Destructuring props from the context.
 * 
 *       --> Building the return
 * 
 * Note:  As the previous apps i use the helper function:
 * 
 *  flex-flow: ${({flow}) => flow.selection };
 * 
 * to write dinamiclly the prop by 'flow.selection'
 */

const FlexGrowPropertyApp = () => {

    const { grow, itemGrow, handleGrow, handleItemGrow } = useAppContext()
 
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
            <select 
                name="selection" 
                id="selection" 
                value={grow} 
                onChange={handleGrow}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a grow for an element</option>1
                    <option value={1}> grow in 1</option>
                    <option value={2}> grow in 2</option>
                    <option value={3}> grow in 3</option>
                    <option value={4}> grow in 4</option>
            </select>

            <select 
                name="selection" 
                id="selection" 
                value={itemGrow} 
                onChange={handleItemGrow}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a grow for an element</option>1
                    <option value={1}> grow the item # 1</option>
                    <option value={2}> grow the item # 2</option>
                    <option value={3}> grow the item # 3</option>
                    <option value={4}> grow the item # 4</option>
            </select>

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