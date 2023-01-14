import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexAlignMultiline from "../../components/flex-align.multiline.component";
import { AlignContentAppWrapper, PerfectCenterWrapper } from "../flexbox.styled.components";

import PerfectCenter from "../../components/perfect.center.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import SelectionForm from "../../components/selection.form.component";


/**Flexbox-grid-sass-and-animations app version 60.19 -
 * 'FlexAlignContentApp' - Features:
 * 
    --> Destructuring 'FlexAlignContentData' from context 
 * 
 * Note: Pending to migrate data, and pending to implement 
 * 'SelectionForm' for 'direction' ( migrating data from 
 * that component > flex.direction.property-app.jsx)  
 */

const FlexAlignContentApp = () => {

    const { direction, handleDirection, handleAlignContent, aligncontent, FlexAlignContentData } = useFlexboxContext()

    
    return(
        <>
        <ComplexTitle title={<h2><span className="flex-align-content-app">align content app: </span></h2>}/>
        <h2>Is mix between 'justify-content' and 'align-content', is made for a 'multiline' flex-container
        ( a large collection of items inside of the container ), for all these props must be set the 'wrap' prop, to see how it 
         take effect also needs a 'height' ( this this container has 600px )</h2>

         <SelectionForm aligncontent={aligncontent} handler={handleAlignContent} propertiesArray={FlexAlignContentData} propertyname={'align-content'} />

             <h2>And if i change the direction, i change the 'cross' and 'main' axis orientation</h2>   
                <select 
                name="selection" 
                id="selection" 
                value={direction} 
                onChange={handleDirection}>
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