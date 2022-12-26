import React from "react";
import FlexProp from "../../components/flex-prop.component";
import ComplexTitle from "../../components/complex-title";
import { FlexPropAppWrapper } from '../flexbox.styled.components'
import FlexPropContent from "../../components/flexprop-content.component";
import FlexPropWrap from "../../components/flex-prop-wrap.component";
import { FlexPropWrapStyle } from "../flexbox.styled.components";
import FlexWrapContent from "../../components/flexwrap-content.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";

/**Flexbox-grid-sass-and-animations app version 60.03 -
 * 'flexbox.direction.preperty-app' - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits. 
 * 
 * Note: The relocation are made in order to have all
 * functionality concerns separated from the data.
 */

/**here i got already the 'props' previously drilled from
 * 'App' js*/
const FlexPropApp = () => {

    const { direction, handleDirection, wrap, handleWrap } = useFlexboxContext()

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

            {/**i drilled the state to set conditions
             * for the content*/}
            <FlexPropContent />
           
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
                <FlexWrapContent />
                     
                <FlexPropWrap />


           </FlexPropWrapStyle>
           
        </>
    )
}

export default FlexPropApp;