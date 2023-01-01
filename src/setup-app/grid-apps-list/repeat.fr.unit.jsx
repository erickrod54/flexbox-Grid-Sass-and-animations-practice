import React from "react";
import styled from "styled-components";
import { useGridContext } from "../../apps-context/grid.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 60.11 -
 * RepeatAndFrUnit - Features:
 * 
 *      --> Migrating sucessfully states and 
 *          features.
 * 
 * Note: pending to migrate handers
 */

const RepeatAndFrUnit = () => {
    
    const { RepeatFColumnsD,
            RepeatFRowsD, 
            repeatrows,
            repeatcolumns, 
            RepeatFColumnsHandler, 
            RepeatFRowsHandler } = useGridContext()

    /**here i create an array with 12 items */
    const items = Array.from({length:12}, (_,index) =>{
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
            <h2>Repeat and Fr Unit</h2>

            <p>
                the <strong>repeat</strong> function  is way to simplify the 
                unit writting 
            </p>

            <p>
                the <strong>repeat</strong> function can combine <strong>'px', 'rems'
                %, and fractions unuits</strong> this last <strong>'fr'</strong> can 
                be only use by the <strong>'repeat'</strong> function 
            </p>

            <p>
                the special thing about fraction unit is that adds the responsiveness
                by the grid layout algorithm placement
            </p>

            <p>
                select a value for <strong>'rows'</strong> from the following: 
            </p>

            <SelectionForm  repeatrows={repeatrows} handler={RepeatFRowsHandler} propertiesArray={RepeatFRowsD} propertyname={'grid-template-rows'}/>

            <p>
                select a value for <strong>'rows'</strong> from the following: 
            </p>

            {repeatrows.selection === 'repeat(2, 100px) 0.5fr' ? 
            <>
                <p>
                    You selected <strong>grid-template-rows:</strong> {repeatrows.selection}
                </p>
            
                <p>
                    to visualize fractional units on rows, i have to set them a <strong>height</strong> 
                </p>    
            </>
                :
                null
            }    

            <SelectionForm  repeatcolumns={repeatcolumns} handler={RepeatFColumnsHandler} propertiesArray={RepeatFColumnsD} propertyname={'grid-template-columns'}/>

            {repeatcolumns.selection === 'repeat(3, 150px) 1fr' ? 
            <>
                <p>
                    You selected <strong>grid-template-rows:</strong> {repeatcolumns.selection}
                </p>
            
                <p>
                    the <strong>'1'</strong> fractional unit <strong>'fr'</strong> takes 100% of the
                    space avaible
                </p>    
            </>
                :
                null
            }

            {repeatcolumns.selection === 'repeat(3, 150px) 0.5fr' ? 
            <>
                <p>
                    You selected <strong>grid-template-rows:</strong> {repeatcolumns.selection}
                </p>    
                <p>
                    the <strong>'0.5'</strong> fractional unit <strong>'fr'</strong> takes 50% of the
                    space avaible
                </p>
            </>
                :
                null
            }

            {repeatcolumns.selection === '1fr 2fr 2fr 1fr' ? 
            <>
                <p>
                    You selected <strong>grid-template-rows:</strong> {repeatcolumns.selection}
                </p>    
                <p>
                    the space can also be defined only by fractional units which apply 
                    responsiveness columns in this case, so by fractional units <strong>2fr</strong> that are
                    <strong>'tracks 2 and 3'</strong> will always responsive to <strong>'2fr' </strong>
                     by responsiveness
                </p>
            </>
                :
                null
            }   


            <Wrapper2 repeatrows={repeatrows} repeatcolumns={repeatcolumns}>
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

const Wrapper = styled.div`

`

const Wrapper2 = styled.div`
    background-color: #ff7052;
    display: grid;

    grid-gap: 25px;

    
    grid-template-rows: ${({repeatrows}) => repeatrows.selection }; 
    grid-template-columns: ${({repeatcolumns}) => repeatcolumns.selection };

    
    .item{
        background-color: #fcc006;
        border: 2px dashed black;
    }
`

export default RepeatAndFrUnit;