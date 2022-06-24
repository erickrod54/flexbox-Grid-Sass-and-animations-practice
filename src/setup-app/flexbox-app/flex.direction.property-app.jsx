import React from "react";
import FlexProp from "../../components/flex-prop.component";
import ComplexTitle from "../../components/complex-title";
import { FlexPropAppWrapper } from '../flexbox.styled.components'
import FlexPropContent from "../../components/flexprop-content.component";
import FlexPropWrap from "../../components/flex-prop-wrap.component";
import { FlexPropWrapStyle } from "../flexbox.styled.components";
import FlexWrapContent from "../../components/flexwrap-content.component";

/**Flexbox-grid-sass-and-animations app version 7 -
 * 'flexbox.direction.preperty-app' - Features:
 * 
 *      --> Destructuring props direction and handleChange.
 * 
 *      --> Destructuring props wrap and handleWrap.    
 * 
 *      --> Setting a JSX 'select' tag to set dinamicly the
 *          'direction' of the container.
 * 
 *      --> Setting a JSX 'select' tag to set dinamicly the
 *          'wrap' of the container.
 * 
 *      --> Drilling the direction value throght the 
 *         'FlexPropAppWrapper'.
 * 
 *      --> Importing and Placing 'FlexPropContent' to
 *          display content depending on the 'direction'
 *          state value.
 * 
 *      --> Importing and Placing 'FlexWrapContent' to
 *          display content depending on the 'direction'
 *          state value. 
 * 
 * Note: this Component will set dinamicly the direction within
 * 'handleChange' functionality
 */

/**here i got already the 'props' previously drilled from
 * 'App' js*/
const FlexPropApp = ({ direction, handleChange, wrap, handleWrap }) => {

    /**here i test that i'm getting the 'wrap' state*/
    console.log('these are wrap props drilled ==> ',wrap)

    

    return(
        <>
             <ComplexTitle  
                title={<p><span className="flexbox-properties">flexbox
                properties</span> for container:</p>}/>
        
        <FlexPropAppWrapper direction={direction}>
                
                <h2>flex direction properties:</h2>
            
                <p>flex directions properties are the
                flex container (parent elements) 
                properties, for reverse directions the
                children will be reversed: </p>
    
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

            {/**i drilled the state to set conditions
             * for the content*/}
            <FlexPropContent direction={direction}/>
           
               <FlexProp />

           
           </FlexPropAppWrapper>
            
           <FlexPropWrapStyle wrap={ wrap }>
                <h2>flex wrap properties:</h2>

                <select 
                name="selection" 
                id="selection" 
                value={wrap} 
                onChange={handleWrap}>
                    {/**the first option with empty value is to 
                     * avoid 'row' as default option - is a select 
                     * tag behavior*/}
                    <option value="">Select a wrap</option>1
                    <option value='nowrap'>nowrap</option>
                    <option value='wrap'>wrap</option>
                    <option value='wrap-reverse'>wrap-reverse</option>
                </select>
                
                {/**i drilled the state to set conditions
                 * for the content*/}
                <FlexWrapContent wrap={wrap}/>
                     
                <FlexPropWrap />


           </FlexPropWrapStyle>
           
        </>
    )
}

export default FlexPropApp;