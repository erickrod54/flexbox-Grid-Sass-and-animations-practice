import React, { useState } from "react";
import styled from "styled-components";
import { useGridContext } from "../../apps-context/grid.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 61.10 -
 * GridAutoRowFlow - Features:
 * 
 *      --> Destructuring 'gridAutoColumnsData' data 
 *          from the context.
 * 
 * Note: Implementing selectionForm and validating 
 * behavior of grid auto rows elements.
 */


const GridAutoRowFlow = () => {

    const { gridAutoRowsData, gridAutoFlowData, gridAutoColumnsData } = useGridContext()
    
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

    const [ gridautorows, setGridautorows ] = useState('');
    const [ gridautoflow, setGridautoflow ] = useState('')
    const [ gridautocolumns, setGridautocolumns ] = useState('')

    
    const gridRowsHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridautorows({...gridautorows, [name]:value })
        
    }

    const gridFlowHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridautoflow({...gridautoflow, [name]:value })
        
    }

    const gridColumnsHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridautocolumns({...gridautocolumns, [name]:value })
        
    }

    
    return(
        <Wrapper>
            <h2>Grid Auto Row Flow and Columns values:</h2>
            
            <p>
                <strong>grid auto row flow and columns values</strong> 
                referers to the behavior that <strong>uninvited or 
                tracks added automiclly</strong> have, this rows and 
                columns by default they will have a default size as 
                follows, and i can affect this size applying 
                the properties <strong>'grid-auto-flow'</strong>,
                <strong>'grid-auto-rows'</strong>, and 
                <strong>'grid-auto-rows'</strong>:
            </p>

            <p>
                let's apply <strong>'grid-auto-rows'</strong>
            </p>

            <p>
                the <strong>'grid-auto-rows'</strong> set the <strong>track-size</strong>
                in <strong>px, fr, viewport, percentages</strong>
            </p>

            <SelectionForm gridautorows={gridautorows}  handler={gridRowsHandler} propertiesArray={gridAutoRowsData} propertyname={'grid-auto-rows'} />

            {gridautorows ? 
                <p>
                    You selected <strong>'grid-auto-rows' </strong>: {gridautorows.selection}
                </p>
                :
                null
            }

            <p>
                let's apply <strong>'grid-auto-columns'</strong>
            </p>

            <p>
                the <strong>'grid-auto-columns' </strong> also set the <strong>track-size</strong>
                in <strong>px, fr, viewport, percentages</strong>
            </p>

            <SelectionForm gridautocolumns={gridautocolumns}  handler={gridColumnsHandler} propertiesArray={gridAutoColumnsData} propertyname={'grid-auto-columns'} />

            {gridautocolumns ? 
                <p>
                    You selected <strong>'grid-auto-columns'</strong>: {gridautocolumns.selection}
                </p>
                :
                null
            }

            <p>
                let's apply <strong>'grid-auto-flow'</strong>:
            </p>

            <p>
                the <strong>'grid-auto-flow' </strong> can be 
                <strong>row</strong> and <strong>column</strong>
                by <strong>default is row</strong>
            </p>

            <SelectionForm gridautoflow={gridautoflow}  handler={gridFlowHandler} propertiesArray={gridAutoFlowData} propertyname={'grid-auto-flow'} />

            {gridautoflow ? 
                <p>
                    You selected <strong>'grid-auto-flow'</strong>: {gridautoflow.selection}
                </p>
                :
                null
            }

            <p>
                they can be combined <strong>in some cases content
                    can be overflowing</strong> but the content can be 
                    adapted with more <strong>px, fr, viewport, percentages</strong>
                    to solve the issue:
            </p>

            <Wrapper2 gridautorows={gridautorows} gridautocolumns={gridautocolumns} gridautoflow={gridautoflow}>
            {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item item-${itemid}`}>{name}
                        </div>
                    )
                })}
                <div className='item item-9'>Unvited-1</div>
                <div className='item item-10'>Unvited-2</div>
                <div className='item item-11'>Unvited-3</div>
                <div className='item item-12'>Unvited-4</div>
            </Wrapper2>
            
        </Wrapper>
        )
        
}

export default GridAutoRowFlow;


const Wrapper = styled.div`

`

const Wrapper2 = styled.div`
    background-color: #ff7052;
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 150px);
    gap: 25px;
   
    
    
    grid-auto-rows: ${({gridautorows}) => gridautorows.selection };
    grid-auto-columns: ${({gridautocolumns}) => gridautocolumns.selection };
    grid-auto-flow: ${({gridautoflow}) => gridautoflow.selection };
    
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

    .item-7{
        background-color: dimgray;
    }

    .item-8{
        background-color: yellow;
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