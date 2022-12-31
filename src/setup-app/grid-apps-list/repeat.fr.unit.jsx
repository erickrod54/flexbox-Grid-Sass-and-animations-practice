import React, { useState } from "react";
import styled from "styled-components";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 60.08 -
 * RepeatAndFrUnit - Features:
 * 
 *      --> Building 'RepeatAndFrUnit'
 * 
 *      --> Building data and handlers
 * 
 *  
 * Note: pending to migrate data and handers
 */

const RepeatAndFrUnit = () => {

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

    const [ repeatrows, setRepeatrows ] = useState({
        pixels:'150px 150px 150px',
        repeatpixels:'repeat(3, 150px)',
    })

    
    const [ repeatcolumns, setRepeatcolumns ] = useState({
        pixels:'150px 150px 150px 150px',
        repeatpixels:'repeat(4, 150px)',
        repeatfractions:'1fr 2fr 2fr 1fr',
        pxelsandfr:'repeat(3, 150px) 1fr',
        pxelsandhalffr:'repeat(3, 150px) 0.5fr'
    })
    
    /**handler for 'oldGridrowSyntaxArray'*/
    const RepeatFColumnsHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('repeat funtion columns=> name selected ==>', name, ', value in it ==>', value)
        
        setRepeatcolumns({...repeatcolumns, [name]:value })
    }

    const RepeatFRowsHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    
        
        console.log('repeat funtion rows=> name selected ==>', name, ', value in it ==>', value)
        
        setRepeatrows({...repeatrows, [name]:value })
    }

    const RepeatFColumnsD = [
        {
          id:1,
          value:'none'   
        },
        {
          id:2,
          value:'150px 150px 150px 150px'   
        },
        {
          id:3,
          value:'repeat(4, 150px)'   
        },
        {
          id:4,
          value:'1fr 2fr 2fr 1fr'   
        },
        {
          id:5,
          value:'repeat(3, 150px) 1fr'   
        },
        {
            id:6,
            value:'repeat(3, 150px) 0.5fr'   
        },
    ]

    const RepeatFRowsD = [
        {
          id:1,
          value:'none'   
        },
        {
            id:2,
            value:'150px 150px 150px'   
          },
          {
            id:3,
            value:'repeat(3, 150px)'   
          },
    ]



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
                select a value for <strong>'columns'</strong> from the following: 
            </p>


            <SelectionForm  repeatcolumns={repeatcolumns} handler={RepeatFColumnsHandler} propertiesArray={RepeatFColumnsD} propertyname={'grid-template-columns'}/>

            {repeatcolumns.selection === '1fr 2fr 2fr 1fr' || 'repeat(3, 150px) 1fr' ? 
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
                    responsiveness columns in this case
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