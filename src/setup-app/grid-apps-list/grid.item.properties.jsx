import React, { useState } from "react";
import styled from "styled-components";
import SelectionForm from "../../components/selection.form.component";


/**Flexbox-grid-sass-and-animations app version 60.17 -
 * GridItemProperties - Features:
 * 
 *      --> Building 'GridItemProperties'.
 * 
 * Note: Implementing selectionForm and validating 
 * behavior of grid auto rows elements.
 */


const GridItemProperties = () => {
    
    const items = Array.from({length:8}, (_,index) =>{
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
    
    const [ gridjustifyself, setGridjustifyself ] = useState('');
    const [ gridalignself, setGridalignself ] = useState('');
    const [ gridplaceself, setGridplaceself ] = useState('');
    const [ gridselfitem, setGridselfitem ] = useState('');

    const gridSelfitemHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridselfitem({...gridselfitem, [name]:value })
        
    }
    
    const gridJustifyselfHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridjustifyself({...gridjustifyself, [name]:value })
        
    }

    const gridAlignselfHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridalignself({...gridalignself, [name]:value })
        
    }

    const gridPlaceselfHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridplaceself({...gridplaceself, [name]:value })
        
    }

    const gridJustifySelfData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'stretch'
        },
        {
            id:3,
            value:'start'
        },
        {
            id:4,
            value:'end'
        },
        {
            id:5,
            value:'center'
        },

    ]

    const gridAlignSelfData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'stretch'
        },
        {
            id:3,
            value:'start'
        },
        {
            id:4,
            value:'end'
        },
        {
            id:5,
            value:'center'
        },

    ]

    const gridPlaceSelfData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'stretch'
        },
        {
            id:3,
            value:'start'
        },
        {
            id:4,
            value:'end'
        },
        {
            id:5,
            value:'start center'
        },
        {
            id:6,
            value:'center start'
        },
        {
            id:7,
            value:'center end'
        },
        {
            id:8,
            value:'end start'
        },
        {
            id:9,
            value:'end center'
        },

    ]

    const itemSelection = [
        {
            id:1,
            value:1
        },
        {
            id:2,
            value:2
        },
        {
            id:3,
            value:3
        },
        {
            id:4,
            value:4
        },
        {
            id:5,
            value:5
        },
        {
            id:6,
            value:6
        },
        {
            id:7,
            value:7
        },
        {
            id:8,
            value:8
        },
    ]



    return(
        <Wrapper>
            <h2>Grid Item Properties:</h2>

            <p>
                the grid item properties are <strong>justify, align,
                and place self</strong>
            </p>

            <p>
                these properties are alike flexbox self properties, and 
                they are applied as follows in the items:
            </p>

            <h3>let's select an item:</h3>

            <SelectionForm gridselfitem={gridselfitem}  handler={gridSelfitemHandler} propertiesArray={itemSelection} propertyname={'item #'} />

            {gridselfitem ? 
                <p>
                    You selected <strong>'item #' </strong>: {gridjustifyself.gridselfitem}
                </p>
                :
                null
            }

            <h3>let's apply justify-self property:</h3>

            <SelectionForm gridjustifyself={gridjustifyself}  handler={gridJustifyselfHandler} propertiesArray={gridJustifySelfData} propertyname={'justify-self'} />

            {gridjustifyself ? 
                <p>
                    You selected <strong>'justify-self' </strong>: {gridjustifyself.selection}
                </p>
                :
                null
            }

            <h3>let's apply align-self property:</h3>

            <SelectionForm gridalignself={gridalignself}  handler={gridAlignselfHandler} propertiesArray={gridAlignSelfData} propertyname={'align-self'} />

            {gridalignself ? 
                <p>
                    You selected <strong>'align-self' </strong>: {gridalignself.selection}
                </p>
                :
                null
            }

            <p>
                align-self is vertical alignment and the width adapts to the content unless 
                the items have a default width
            </p>

            <p>
                justify self property and align-self property have the same behavior but for 
                different directions <strong>justify self (horizontal alignment) </strong> and 
                <strong> align-self (vertical alignment)</strong>
            </p>

            <h3>let's apply place-self property:</h3>

            <SelectionForm gridplaceself={gridplaceself}  handler={gridPlaceselfHandler} propertiesArray={gridPlaceSelfData} propertyname={'place-self'} />

            {gridplaceself ? 
                <p>
                    You selected <strong>'place-self' </strong>: {gridplaceself.selection}
                </p>
                :
                null
            }

            <p>
                the <strong>'stretch'</strong> value is by default for <strong>justify, align and place self</strong>
                so if the behavior doesn't change is because the items are on <strong>'stretch'</strong> value.
            </p>

            <Wrapper2 gridselfitem={gridselfitem} gridjustifyself={gridjustifyself} gridalignself={gridalignself} gridplaceself={gridplaceself}>
            {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item item-${itemid}`}>{name}
                        </div>
                    )
                })}
            </Wrapper2>
            
        </Wrapper>
    )
}

export default GridItemProperties;


const Wrapper = styled.div`

`

const Wrapper2 = styled.div`
    background-color: #ff7052;
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 150px);
    gap: 25px;

    /**here i am selecting each item */
    .item:nth-child(${({ gridselfitem }) => gridselfitem.selection}){
        justify-self: ${({ gridjustifyself }) => gridjustifyself.selection};
        align-self: ${({ gridalignself }) => gridalignself.selection};
        place-self: ${({ gridplaceself }) => gridplaceself.selection};
       }

    
    .item{
        border: 2px dashed black;
        background-color: #fcc006;
        font-size: calc(0.66667vw + 30px);
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 3px;
    }

    .item-1{
        background-color: chartreuse;

        /**justify self property and align-self property
        * have the same behavior but it different directions
        * justify self (horizontal alignment) and 
        * align-self (vertical alignment)*/

        /** justify self property */

        /**justify-self is horizontal alignment and the width 
        adapts to the content unless the items have a default 
        width */

        /**justify-self: stretch; */
        /**justify-self: start; */
        /**justify-self: end; */
        /**justify-self: center; */
    }

    .item-2{
        background-color: chocolate;

             /** align self property */

        /**align-self is vertical alignment and the width 
        adapts to the content unless the items have a default 
        width */

        /**align-self: stretch; */
        /**align-self: start; */ 
        /**align-self: end; */
        /**align-self: center; */


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

    .item-7{
        background-color: dimgray;
    }

    .item-8{
        background-color: yellow;

         /** place self property ( shorthand for alignself and justify-self properties )*/

        /**align-self is vertical alignment and the width 
        adapts to the content unless the items have a default 
        width */

        /**place-self: stretch; */
        /**place-self: start; */ 
        /**place-self: end; */
        /**place-self: center; */

        /**place-self: start center; */
        /**place-self: center start; */ 
        /**place-self: center end; */
        /**place-self: end start; */
        /**place-self: end center; */
    }

    .item-9{
        background-color: crimson;

    }

    .item-10{
        background-color: maroon;
    }

    .item-11{
        background-color: orange;
    }

    .item-12{
        background-color: thistle;
    }
`