import React, { useState } from "react";
import styled from "styled-components";
import { useGridContext } from "../../apps-context/grid.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 62.07 -
 * GridAutoFillFit - Features:
 * 
 *      --> Destructuring 'AutoFitColumnsData' from the context. 
 * 
 * Note: Changing 'GridItemProperties' to GridContainerProperties
 * because 'grid.justifify.align.place.items.properties' are 
 * conatiner properties.
 * 
 * And naming 'GridItemProperties' for 'grid.item.properties'
 * component
 * pending to migrate data 
 */

const GridAutoFillFit = () => {

    const { AutoFitColumnsData } = useGridContext()

    const [ autofillfitwidth, setAutofillfitwidth ] = useState('')
    const [ autofillcolumn, setAutofillcolum ] = useState('')
    const [ autofitcolumn, setAutofitcolumn ] = useState('')

    const items = Array.from({length:6}, (_,index) =>{
        const item = 'item';
        const itemid = index + 1;
        const name = item + ' ' + itemid;

        const newDataitems = 
            {
                
                itemid,
                name
            }
        
        return newDataitems;
    })

    const gridAutofillfitwidth = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setAutofillfitwidth({...autofillfitwidth, [name]:value })
        
    }

    const gridAutofillcolum = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setAutofillcolum({...autofillcolumn, [name]:value })
        
    }

    const gridAutofitcolum = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setAutofitcolumn({...autofitcolumn, [name]:value })
        
    }

    const AutoFillFitWidthData = [
        {
            id:1,
            value:'1500px'
        },
        {
            id:2,
            value:'60rem'
        },
        {
            id:3,
            value:'60vw'
        },
        {
            id:4,
            value:'60vh'
        },
        {
            id:5,
            value:'100%'
        },
    ]

    const AutoFillColumnsData = [
        {
            id:1,
            value:'repeat(4, 150px)'
        },
        {
            id:2,
            value:'repeat(auto-fill, 150px)'
        },
        {
            id:3,
            value:'repeat(auto-fill, 1fr)'
        },
        {
            id:4,
            value:'repeat(auto-fill, minmax(150px, 1fr))'
        },
    ]

    return(
    <Wrapper>
        <h2>Grid Auto Fill Fit</h2>

        <h3>select a width:</h3>

        <p>
            width must be always defined with a <strong>'unit'</strong> can be in <strong>px, fr, percentages, relative units rem</strong>
            depending on the units selected props <strong>auto-fill and auto-fit</strong> will have effect
        </p>

        <SelectionForm autofillfitwidth={autofillfitwidth}  handler={gridAutofillfitwidth} propertiesArray={AutoFillFitWidthData} propertyname={'grid-template-columns'} />

        {autofillfitwidth ? 
                
                <p>
                    You selected <strong>'grid-template-columns' </strong>: {autofillfitwidth.selection}
                </p>
                :
                null
        }

        <h3>select 'auto-fill' prop:</h3>

        <p>
            the auto-fill is going to replace the number of repetitions ( for example <strong>repeat(4, 150px)</strong>) will 
            make a calculation and fill the space with the <strong>'columns/row'</strong> number resulting of <strong>width / 150px</strong> 
            for this case 
        </p>

        <p>
            <strong>Notes:</strong> for good visualization of changes  JavaConsole - Layoutsc - grid and for good handling of this props 
            can help to get rid of media query rules and use less code lines
        </p>

        <SelectionForm autofillcolumn={autofillcolumn}  handler={gridAutofillcolum} propertiesArray={AutoFillColumnsData} propertyname={'grid-template-columns'} />

        {autofillcolumn ?
            <>
                <p>
                    You selected <strong>'grid-template-columns' </strong>: {autofillcolumn.selection}
                </p>  
            </>
                :
                null
        }
        
        <Wrapper2 autofillfitwidth={autofillfitwidth} autofillcolumn={autofillcolumn} >
        {items.map((division) => {
            const { itemid, name } = division;
            return(
                <div 
                        key={itemid} 
                        className={`item item-${itemid}`}>{name}
                        </div>
                    )
                })}
                 {/**adding element fo 'autofit' */}   
                 <div  
                        className={`item item-7`}>item 7
                        </div>
        </Wrapper2>

            <h3>select 'auto-fit' prop:</h3>
    
            <p>
                auto-fit instead fit to the number of items and care about the items number because creates as many columns or rows depending 
                on the items number
            </p>
    
            <SelectionForm autofitcolumn={autofitcolumn}  handler={gridAutofitcolum} propertiesArray={AutoFitColumnsData} propertyname={'grid-template-columns'} />
    
            {autofitcolumn ? 
                    <p>
                        You selected <strong>'grid-template-columns' </strong>: {autofitcolumn.selection}
                    </p>
                    :
                    null
            }
    
            {autofitcolumn === 'repeat(auto-fit, 1fr)' ?
                    <>
                        <p>
                            You selected <strong>'grid-template-columns' </strong>: {autofitcolumn.selection}
                        </p> 
                        <p>
                            if i applied to without the function  <strong>'minmax'</strong> autofit won't be 
                            able to calculate the columns or rows number so won't have any effect     
                        </p> 
                    </>
                    :
                    null
            }
    
            {autofitcolumn === 'repeat(auto-fill, minmax(150px, 1fr))' || 
            autofillfitwidth.selection === '100%' || 
            autofillfitwidth.selection === '60vh' || 
            autofillfitwidth.selection === '60vw' || autofillfitwidth.selection === '60rem' ?
                    <> 
                        <p>
                            if i applied to with the function <strong>'minmax'</strong> and relative 
                            <strong>'units' or 'percentages'</strong> the function autofit will be able 
                            to calculate the columns or rows number     
                        </p> 
                    </>
                    :
                    null
            }
        <Wrapper3 autofillfitwidth={autofillfitwidth} autofitcolumn={autofitcolumn}>
        {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item item-${itemid}`}>{name}
                        </div>
                    )
                })}
                 {/**adding element fo 'autofit' */}   
                 <div  
                        className={`item item-7`}>item 7
                        </div>
        </Wrapper3>    
    </Wrapper>
    )
}

export default GridAutoFillFit;

const Wrapper = styled.div`

    .select-grid{
        display: grid;
        gap: 0.5rem;
        margin: 1rem;
    }
`


const Wrapper2 = styled.div`
    background-color: #ff7052;
    display: grid;

    width: ${({autofillfitwidth}) => autofillfitwidth.selection };

    grid-template-columns: ${({autofillcolumn}) => autofillcolumn.selection };
    
    .item{
        border: 2px dashed black;
        background-color: #fcc006;
        font-size: calc(0.66667vw + 30px);
        text-align: center;
        line-height: 200px;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 3px;
    }

    .item-1{
        background-color: chartreuse;
    }

    .item-2{
        background-color: chocolate;
    }
    
    .item-3{
        background-color: cornflowerblue;
    }

    .item-4{
        background-color: olivedrab;

    }

    .item-5{
        background-color: darkorchid;
    }

    .item-6{
        background-color: darkgreen;
    }

`

const Wrapper3 = styled.div`
    background-color: #ff7052;
    display: grid;

    width: ${({autofillfitwidth}) => autofillfitwidth.selection };

    grid-template-columns: ${({autofitcolumn}) => autofitcolumn.selection };
    
    .item{
        border: 2px dashed black;
        background-color: #fcc006;
        font-size: calc(0.66667vw + 30px);
        text-align: center;
        line-height: 200px;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 3px;
    }

    .item-1{
        background-color: chartreuse;
    }

    .item-2{
        background-color: chocolate;
    }
    
    .item-3{
        background-color: cornflowerblue;
    }

    .item-4{
        background-color: olivedrab;

    }

    .item-5{
        background-color: darkorchid;
    }

    .item-6{
        background-color: darkgreen;
    }

`