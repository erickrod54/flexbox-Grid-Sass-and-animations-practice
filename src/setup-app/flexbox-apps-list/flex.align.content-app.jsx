import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexAlignMultiline from "../../components/flex-align.multiline.component";

import { useAppContext } from "../../context";
import { AlignContentAppWrapper } from "../flexbox.styled.components";


/**Flexbox-grid-sass-and-animations app version 14 -
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

const FlexAlignContentApp = () => {

    const { handleAlignContent, aligncontent } = useAppContext()
    return(
        <>
        <ComplexTitle title={<h2><span className="flex-align-content-app">align content app: </span></h2>}/>
        <h2>Is mix between 'justify-content' and 'align-items', is made for a 'multiline' flex-container
        ( a large collection of items inside of the container ), for all these props must be set the 'wrap' prop, to see how it 
        take effect also needs a 'height' ( this this container has 600px )</h2>

        <select 
                name="selection" 
                id="selection" 
                value={aligncontent} 
                onChange={handleAlignContent}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select an align-items</option>1
                    <option value='stretch'>stretch</option>
                    <option value='flex-start'>flex-start</option>
                    <option value='flex-end'>flex-end</option>
                    <option value='center'>center</option>
                    <option value='space-between'>space-between</option>
                    <option value='space-around'>space-around</option>
                    <option value='space-evenly'>space-evenly</option>
                </select>

        <AlignContentAppWrapper aligncontent={aligncontent}>
           <FlexAlignMultiline />          
        </AlignContentAppWrapper>        
        </>
    )
}

export default FlexAlignContentApp;