import React from "react";
import ComplexTitle from "../../components/complex-title";
import FlexProp from "../../components/flex-prop.component";
import { useFlexboxContext } from "../../apps-context/flexbox.context";
import { FlexBasisWrapper } from "../flexbox.styled.components";
import SelectionForm from "../../components/selection.form.component";


/**Flexbox-grid-sass-and-animations app version 61.01 -
 * FlexBasisPropertyApp - Features:
 *  
 *      --> Destructuring 'flexBasisItemArray' from 
 *          the context
 * 
 * Note: Pending to migrate data
 */


const FlexBasisPropertyApp = () => {

    const { basis, itemBasis, handleBasis, handleItemBasis, flexBasisItemArray } = useFlexboxContext()

    const flexBasisArray = [
        {
          id:1,
          value:'none'  
        },
        {
          id:2,
          value:'auto'  
        },
        {
          id:3,
          value:'300px'  
        },
        {
          id:4,
          value:'25rem'  
        },
        {
          id:5,
          value:'45%'  
        },
    ]

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

        <SelectionForm propertyvalue={itemBasis} handler={handleItemBasis} propertiesArray={flexBasisItemArray} propertyname={'item #'} />          

        <h3>select the basis :</h3>            

        <SelectionForm propertyvalue={basis} handler={handleBasis} propertiesArray={flexBasisArray} propertyname={'flex-basis'} />            


        <FlexBasisWrapper basis={basis} itemBasis={itemBasis}>
            <FlexProp />
        </FlexBasisWrapper>        
        </>
            
    )
}

export default FlexBasisPropertyApp;