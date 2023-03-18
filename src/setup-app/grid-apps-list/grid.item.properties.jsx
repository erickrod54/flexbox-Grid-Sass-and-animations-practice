import React from "react";
import styled from "styled-components";
import { useGridContext } from "../../apps-context/grid.context";
import SelectionForm from "../../components/selection.form.component";


/**Flexbox-grid-sass-and-animations app version 63.01 -
 * GridItemProperties - Features:
 * 
 *      --> Clearing unused 'useState'.
 * 
 * Note: Implementing selectionForm and validating 
 * behavior of grid auto rows elements.
 */


const GridItemProperties = () => {

    const { itemSelection, gridPlaceSelfData,
             gridJustifySelfData,
             gridAlignSelfData,
             gridPlaceselfHandler,
             gridplaceself, gridAlignselfHandler, gridalignself, gridJustifyselfHandler, gridjustifyself, gridSelfitemHandler, gridselfitem } = useGridContext()
    
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