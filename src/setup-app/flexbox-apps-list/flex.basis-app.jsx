import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import { FlexBasisWrapper } from "../flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 60.02 -
 * FlexBasisPropertyApp - Features:
 * 
 *        --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits 
 * 
 * Note:  By this version 'flex-shrink' is dynamic,
 * i can select the element and switch betwwen '1'
 * for activated flex-shrink and '0' for deactivate
 * 'flex-shrink'
 */


const FlexBasisPropertyApp = () => {

    const { basis, itemBasis, handleBasis, handleItemBasis } = useFlexboxContext()

    console.log('props from the context ==> ', 'basis defualt ==>', basis, 'items numbers ==>',itemBasis )

    return(
        <>
        <ComplexTitle title={<h2>
            <span className="flex-basis-app">
            flex basis app:
            </span></h2>}/>
        <h2>the 'flex-basis' has a default value of 'auto', the beauty
            of this component is that once applied the 'item' will 
            adquire as much space as we have dedicated to it - is
            the size specify for the item -
            ( for the flex-basis i can set 'px', relative units, percentages, vw, so
            i can give a number to it ), so what are the difference between 'basis' and
            'grow' property
        </h2>

        <h3>Grow property:</h3>
        <ul>
            <li>
                1) Will adquire as much space as is available for the item ( rest of the space )
            </li>
            <li>
                2) Will decrease first as the screen size reduces it
            </li>
        </ul>

        <h3>Basis property:</h3>
        <ul>
            <li>
                1) flex-basis adquire a value specified by the developer
            </li>
            <li>
                2) Won't reduce until the screen reduces more than the value asigned ( so the
                width will be maintain to the very end)
            </li>
        </ul>

        <h3>select the item # :</h3>            
        <select 
                name="selection" 
                id="selection" 
                value={itemBasis} 
                onChange={handleItemBasis}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a basis for an element</option>1
                    <option value={1}> set basis the to item # 1</option>
                    <option value={2}> set basis the to item # 2</option>
                    <option value={3}> set basis the to item # 3</option>
                    <option value={4}> set basis the to item # 4</option>
                    <option value={5}> set basis the to item # 5</option>
        </select>

        <h3>select the basis :</h3>              
        <select 
                name="selection" 
                id="selection" 
                value={basis} 
                onChange={handleBasis}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value={""}>Select shrink ( Default 1 )</option>1
                    <option value={'auto'}> flex-basis 'auto' ( Default 'auto' )</option>
                    <option value={'300px'}> flex-basis '300px'</option>
                    <option value={'25rem'}> flex-basis '25rem'</option>
                    <option value={'45%'}> flex-basis '45%'</option>
            </select>


        <FlexBasisWrapper basis={basis} itemBasis={itemBasis}>
            <FlexProp />
        </FlexBasisWrapper>        
        </>
            
    )
}

export default FlexBasisPropertyApp;