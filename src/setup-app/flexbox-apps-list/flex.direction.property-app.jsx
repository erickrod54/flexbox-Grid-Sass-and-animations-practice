import React from "react";
import FlexProp from "../../components/flex-prop.component";
import ComplexTitle from "../../components/complex-title";
import { FlexPropAppWrapper } from '../flexbox.styled.components'
import FlexPropContent from "../../components/flexprop-content.component";
import FlexPropWrap from "../../components/flex-prop-wrap.component";
import { FlexPropWrapStyle } from "../flexbox.styled.components";
import FlexWrapContent from "../../components/flexwrap-content.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import SelectionForm from "../../components/selection.form.component";


/**Flexbox-grid-sass-and-animations app version 61.03 -
 * 'flexbox.direction.preperty-app' - Features:
 * 
 *      --> Destrcuturing 'FlexPropData' from the context
 * 
 * Note: Pending to migrate data
 */

/**here i got already the 'props' previously drilled from
 * 'App' js*/
const FlexPropApp = () => {

    const { direction, handleDirection, wrap, handleWrap, FlexPropData } = useFlexboxContext()

    const FlexWrapData = [
        {
          id:1,
          value:"none"      
        },
        {
          id:2,
          value:'nowrap'      
        },
        {
          id:3,
          value:'wrap'      
        },
        {
          id:4,
          value:'wrap-reverse'      
        },
    ]

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
    
                <SelectionForm direction={direction} handler={handleDirection} propertiesArray={FlexPropData} propertyname={'flex-direction'} />

            {/**i drilled the state to set conditions
             * for the content*/}
            <FlexPropContent />
           
               <FlexProp />

           
           </FlexPropAppWrapper>
            
           <FlexPropWrapStyle wrap={ wrap }>
                <h2>flex wrap properties:</h2>

                <SelectionForm wrap={ wrap } handler={handleWrap} propertiesArray={FlexWrapData} propertyname={'flex-wrap'} />
                
                {/**i drilled the state to set conditions
                 * for the content*/}
                <FlexWrapContent />
                     
                <FlexPropWrap />


           </FlexPropWrapStyle>
           
        </>
    )
}

export default FlexPropApp;