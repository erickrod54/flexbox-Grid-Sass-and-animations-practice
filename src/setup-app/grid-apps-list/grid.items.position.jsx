import React, { useState } from "react";
import styled from "styled-components";
import { useGridContext } from "../../apps-context/grid.context";
import SelectionForm from "../../components/selection.form.component";
import { CodeBlock } from "../flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 62.19 -
 * GridItemsPosition - Features:
 * 
 *      --> Destructuring 'itemColumnHandlerend' from the context.
 * 
 * Note: Implementing selectionForm and validating 
 * behavior of grid auto rows elements.
 */

const GridItemsPosition = () => {

    const { itemDatarows, itemDatacolumns, itemColumnHandlerend, columnenditem4 } = useGridContext()

    /**here i create an array with 12 items */
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

    /**handlers and states for item4 - GridItemsPosition*/

    /**states for item4 */
    const [ rowstartitem4, setRowstartitem4 ] = useState(0)
    const [ rowenditem4, setRowenditem4 ] = useState(0)

    const [ columnstartitem4, setColumnstartitem4 ] = useState(0)

    const itemRowHandlerstart = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('row start item4 => name selected ==>', name, ', value in it ==>', value)
            setRowstartitem4({...rowstartitem4, [name]:value })

    }

    const itemRowHandlerend = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('row end item4 => name selected ==>', name, ', value in it ==>', value)
            setRowenditem4({...rowenditem4, [name]:value })
        
    }

    const itemColumnHandlerstart = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('row start item4 => name selected ==>', name, ', value in it ==>', value)
            setColumnstartitem4({...columnstartitem4, [name]:value })

    }


    return(
        <Wrapper>
            <h2>Grid Items Position</h2>

            <p>
                it is very important to take in consideration
                while working with grids <strong>DevTools - LayOuts - GridOverlays</strong>
                so i can check <strong>rows </strong> and <strong>columns </strong>
                and set the values to move the elements
            </p>

            <p>
                they have also a complete syntax <strong>'grid-row-start'</strong> to set a row start row and a 
                <strong>'grid-row-end'</strong> to set a end of row shorthand syntax for 
                example <strong>'grid-area: 3 / 1 / 4 / 2'</strong> where the 
                first two values <strong>'3 / 1'</strong> for <strong>row start and row end</strong>
                and the las pair of values <strong> '4 / 2'</strong> for <strong>column start and column end</strong>
            </p>

            <p>
                let's move item <strong>1</strong> and 
                verify how it behave
            </p>

            <p>
                move <strong>'item 4'</strong>:
            </p>

            <div className="select-grid">

                <p>
                    select an option for row start:
                </p>
                <SelectionForm rowstartitem4={rowstartitem4}  handler={itemRowHandlerstart} propertiesArray={itemDatarows} propertyname={'grid-row-start item 4'} />

                <p>
                    select an option for <strong>'row end'</strong>:
                </p>

                <SelectionForm rowenditem4={rowenditem4}  handler={itemRowHandlerend} propertiesArray={itemDatarows} propertyname={'grid-row-end item 4'} />

                <p>
                    select an option for <strong>'column start'</strong>:
                </p>

                <SelectionForm columnstartitem4={columnstartitem4} handler={itemColumnHandlerstart} propertiesArray={itemDatacolumns} propertyname={'grid-column-start item 4'} />

                <p>
                    select an option for <strong>'column end'</strong>:
                </p>                

                <SelectionForm columnenditem4={columnenditem4} handler={itemColumnHandlerend} propertiesArray={itemDatacolumns} propertyname={'grid-column-end item 4'} />
            </div>

            {rowstartitem4 ? 
                <p>
                    You selected <strong>'grid-row-start'</strong>: {rowstartitem4.selection}
                </p>
                :
                null
            }

            {rowenditem4 ? 
                <p>
                    You selected <strong>'grid-row-end'</strong>: {rowenditem4.selection}
                </p>
                :
                null
            }

            {columnstartitem4 ? 
                <p>
                    You selected <strong>'grid-column-start'</strong>: {columnstartitem4.selection}
                </p>
                :
                null
            }

            {columnenditem4 ? 
                <p>
                    You selected <strong>'grid-column-end'</strong>: {columnenditem4.selection}
                </p>
                :
                null
            }

            <p>
                in the shorthand syntax will be as this <strong> grid-area: {rowstartitem4.selection} / {rowenditem4.selection} / {columnstartitem4.selection} / {columnenditem4.selection}</strong>
            </p>

            <p>
                the behavior where the item has not pair number of <strong>start</strong>
                and <strong>end</strong> for columns and rows is called <strong>spanning 
                grid item</strong> and is use to define a large area that ocuppy <strong>tracks </strong>
                in rows, columns or both
            </p>
            
            <Wrapper2 rowstartitem4={rowstartitem4} rowenditem4={rowenditem4} columnstartitem4={columnstartitem4} columnenditem4={columnenditem4}>
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

            <h4>changing grid line names:</h4>

            <p>
                i can set also <strong>'names'</strong> to the grid lines 
                in the following way:
            </p>

             <div className="center-grid">
                <CodeBlock>
                    <p>grid-template-columns: <strong>[col-start-1]</strong> 150px.. 300px <strong>[col-end-4 grid-end]</strong>;</p>
                    <p>grid-template-rows: <strong>[row-start-1]</strong>200px <strong>[row-end-1 row-start-2]</strong>250px <strong>[row-end-2]</strong></p>
                </CodeBlock>
             </div>     
            
            <p>
                this from a <strong>'4' column</strong> x <strong>'2' rows</strong> grid
                and will result in this and <strong>no repeat function</strong> is use 
                for naming columns an rows in this example:
            </p>

            <Wrapper3 rowstartitem4={rowstartitem4} rowenditem4={rowenditem4} columnstartitem4={columnstartitem4} columnenditem4={columnenditem4}>
            {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item item-${itemid}`}>{name}
                        </div>
                    )
                })}
            </Wrapper3>            

            <p>
                if i have an example with <strong>repeat function</strong> i will 
                implement it in the following way:
            </p> 

            <div className="center-grid">
                <CodeBlock>
                    <p>grid-template-columns: repeat(<strong>4, [col-start]</strong> 150px <strong>[col-end]</strong>;</p>
                    <p>grid-template-rows: repeat(<strong>2, [row-start]</strong>200px <strong>[row-end]</strong>;</p>
                </CodeBlock>
             </div>

             <p>
                this example below has implementing <strong>'grid line naming'</strong> using 
                the repeat syntax, and has been implemented an move of an <strong>item 1</strong>
                from the firt row and column to the last element
             </p>

             <div className="center-grid">
                <CodeBlock>
                    <p>grid-column: col-start 4 / col-end 4;</p>
                    <p>grid-row:row-start 2 / row-end 2;</p>
                </CodeBlock>
             </div>

             <p>
                very importatn to take in consideration that after the name no <strong>dash </strong>
                is place so will be <strong>'start 4 / col-end 4'</strong>
             </p>

             <Wrapper4 rowstartitem4={rowstartitem4} rowenditem4={rowenditem4} columnstartitem4={columnstartitem4} columnenditem4={columnenditem4}>
            {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item item-${itemid}`}>{name}
                        </div>
                    )
                })}
            </Wrapper4>

        </Wrapper>
    )
}

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
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    grid-gap: 15px;
    
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

        /** */

        /**changing the horizontal position */
        grid-row-start:${({rowstartitem4}) => rowstartitem4.selection };
        grid-row-end: ${({rowenditem4}) => rowenditem4.selection };

        /**changing the horizontal position */
        grid-column-start: ${({columnstartitem4}) => columnstartitem4.selection };
        grid-column-end: ${({columnenditem4}) => columnenditem4.selection };
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

const Wrapper3 = styled.div`
    background-color: #ff7052;
    display: grid;
    grid-template-columns: [col-start-1] 150px [col-end] 200px [col-end-2 col-start-3] 250px [col-end-3 col-start-4] 300px [col-grid-end];
    grid-template-rows:  [row-start-1] 200px [row-end-1 row-start-2] 250px;
    grid-gap: 15px;
    
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
        /**changin positions */
        grid-column: col-start-4 / col-end-4;
        grid-row:row-start-2/ row-start-2;
    }

    .item-2{
        background-color: chocolate;
        grid-column: col-start-1 / col-end;
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

const Wrapper4 = styled.div`
    background-color: #ff7052;
    display: grid;
    grid-template-columns: repeat(4, [col-start] 150px [col-end]);
    grid-template-rows: repeat(2, [row-start] 200px [row-end]);
    grid-gap: 15px;
    
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
        /**changin positions */
        grid-column: col-start 4 / col-end 4;
        grid-row:row-start 2 / row-end 2;
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

export default GridItemsPosition;