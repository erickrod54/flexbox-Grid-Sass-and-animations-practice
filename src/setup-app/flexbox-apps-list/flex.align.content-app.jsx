import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexAlignMultiline from "../../components/flex-align.multiline.component";

import { useAppContext } from "../../context";
import { AlignContentAppWrapper, PerfectCenterWrapper } from "../flexbox.styled.components";

import PerfectCenter from "../../components/perfect.center.component";


/**Flexbox-grid-sass-and-animations app version 15 -
 * 'flexbox.direction.preperty-app' - Features:
 * 
 *      --> Destructuring props 'direction' and 
 *          'handleChange' from 'useAppContext()'
 *           to set direction functionality.
 * 
 *      --> Building the return and drilling props
 *          to control css and get state 'data' 
 *          props
 * 
 *      --> Importing and placing 'PerfectCenter' 
 *          component.
 * 
 * Note: By this version is everything done for this 
 * component.
 */

const FlexAlignContentApp = () => {

    const { handleAlignContent, aligncontent, direction, handleChange } = useAppContext()

    return(
        <>
        <ComplexTitle title={<h2><span className="flex-align-content-app">align content app: </span></h2>}/>
        <h2>Is mix between 'justify-content' and 'align-content', is made for a 'multiline' flex-container
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
                    <option value="">Select an align-content</option>1
                    <option value='stretch'>stretch</option>
                    <option value='flex-start'>flex-start</option>
                    <option value='flex-end'>flex-end</option>
                    <option value='center'>center</option>
                    <option value='space-between'>space-between</option>
                    <option value='space-around'>space-around</option>
                    <option value='space-evenly'>space-evenly</option>
                </select>

             <h2>And if i change the direction, i change the 'cross' and 'main' axis orientation</h2>   
                <select 
                name="selection" 
                id="selection" 
                value={direction} 
                onChange={handleChange}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a direction</option>1
                    <option value='row'>row</option>
                    <option value='column'>column</option>
                    <option value='row-reverse'>row-reverse</option>
                    <option value='column-reverse'>column-reverse</option>
            </select>
            
        <AlignContentAppWrapper aligncontent={aligncontent} direction={direction}>
        <h4>You're combining : 
        align-content:   
         <span className="first-prop">
            '{aligncontent.selection ? aligncontent.selection : 'select a prop'}'
         </span>            
             + 
         direction:    
         <span className="second-prop">
             '{direction.selection ? direction.selection : 'select a prop'}'
         </span>
        </h4>               
           <FlexAlignMultiline />  
        
        </AlignContentAppWrapper>        

         <h2>Also, for many coding interviews come up perfect center and is made by
         'justify-content: center;' and 'align-items: center' in the container</h2>            

         {/**look inside of this style component to see how
          * 'perfect center' is made*/}            
        <PerfectCenterWrapper>
            <PerfectCenter />           
        </PerfectCenterWrapper>
        
        </>
    )
}

export default FlexAlignContentApp;