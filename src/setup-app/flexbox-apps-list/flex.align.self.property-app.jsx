import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexAlignSelf from "../../components/flex.align.self.component";
import { useAppContext } from "../../context";
import { FlexAlignSelfPropertyWrapper } from "../flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 24 -
 * 'FlexAlignSelfPropertyApp' - Features:
 * 
 *      --> Editing 'FlexAlignSelfPropertyApp' 
 *          description 
 * 
 * Note: This is the longest version of FlexPropApp
 * in order to demonstrate how 'wrap' props are 
 * applied and how they act as container props.
 */

const FlexAlignSelfPropertyApp = () => {

    const { alignself, itemAlignself, align, handleAlignself, handleItemAlignself, handleAlign } = useAppContext()

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
        <select 
                name="selection" 
                id="selection" 
                value={alignself} 
                onChange={handleAlignself}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">select an align-self value</option>1
                    <option value='auto'>auto</option>
                    <option value='flex-end'>flex-end</option>
                    <option value='center'>center</option>
                    <option value='stretch'>stretch</option>
                    <option value='baseline'>baseline</option>
                </select>

         {alignself.selection === 'baseline' ?
           <>
            <h3>to apply 'baseline' correctlly i have to change the align
                items prop od the container from 'flex-start' to 'baseline'
            </h3>
                <select 
                name="selection" 
                id="selection" 
                value={align} 
                onChange={handleAlign}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">select an align-items value</option>1
                    <option value='flex-start'>select 'flex-start'</option>
                    <option value='baseline'>select baseline</option>
                </select>
           </>
           :
           null 
        }

                <h3>select an item to apply align-self:</h3>
                <select 
                name="selection" 
                id="selection" 
                value={itemAlignself} 
                onChange={handleItemAlignself}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select an align-content</option>1
                    <option value={1}>align-self item # 1</option>
                    <option value={2}>align-self item # 2</option>
                    <option value={3}>align-self item # 3</option>
                    <option value={4}>align-self item # 4</option>
                    <option value={5}>align-self item # 5</option>
                    <option value={6}>align-self item # 6</option>
                    <option value={7}>align-self item # 7</option>
                    <option value={8}>align-self item # 8</option>
                </select>

        <FlexAlignSelfPropertyWrapper alignself={alignself}  itemAlignself={itemAlignself} align={align}>
            <FlexAlignSelf />       
        </FlexAlignSelfPropertyWrapper>    
        
        </>
    )
}

export default FlexAlignSelfPropertyApp;