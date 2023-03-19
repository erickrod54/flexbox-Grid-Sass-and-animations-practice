import React from "react";
import styled from "styled-components";
import { useGridContext } from "../../apps-context/grid.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 63.02 -
 * GridContainerProperties - Features:
 * 
 *      --> Destructuring 'data' state from the context.
 * 
 * Note: Pending to make it dynamic.
 */


const GridMaxMinContent = () => {

    const { itemDataMessed, itemData, maxMinRows, maxMinColumns, handleData, handleMinmaxColumn ,minmaxColumn, handleMinmaxRow, minmaxRow, data
     } = useGridContext()     
    
    return(
        <Wrapper>
            <h2>Grid Max Min Content Function Values:</h2>
            

            <p>
                As i decrease and increase the width of the
                window, i can notice how depending on the 
                content of each item i end up with wide width 
                as <strong>'written'</strong> and less width as the 
                content in the first element <strong>'I'</strong>
            </p>

            <p>
                with the item container will be <strong>as wide</strong>
                to fit the content <strong>without line break </strong>
                ( going to the next line)
            </p>
            
            <p>
                with the item container will be <strong>as wide</strong>
                to fit the biggest word <strong>with line break </strong>
                ( going to the next line)
            </p>

            <p>
                if apply <strong>min-content</strong> to the 
                <strong>grid-template-rows</strong> i get the 
                minimun height according with the item const first = useContext(second)
            </p>

            <p>
                by setting <strong>repeat(2, minmax(100px, min-content)</strong>
                where <strong>'minmax'</strong> allow to make responsive the 
                item container without adding a single media query line 
            </p>

            <button onClick={handleData}>Apply grid-max-min content</button>
            
            <h3>apply max min values <strong>Rows</strong>: </h3>
    
            <SelectionForm minmaxRow={minmaxRow} handler={handleMinmaxRow} propertiesArray={maxMinRows} propertyname={'grid-template-rows'} />

            {minmaxRow.selection  === 'repeat(2, minmax(100px, min-content))' ? 
                <p>
                    it doesn't get smaller than 200px or bigger than 'min-content' make in it responsive
                </p>
            :
            null
            }

            {minmaxRow.selection  === 'repeat(2, minmax(100px, 200px))' ? 
                <p>
                    it doesn't get bigger than 200px or smaller than 100px is like a limit for the content
                </p>
            :
            null
            }
            
    
            <h3>apply max min values <strong>Columns</strong>: </h3>
    
            <SelectionForm minmaxColumn={minmaxColumn} handler={handleMinmaxColumn} propertiesArray={maxMinColumns} propertyname={'grid-template-columns'} />

            {minmaxColumn.selection === '1fr 1fr min-content 1fr' ? 
                <p>
                    min-max function is implemented
                </p>
            :
            null
            }

            <Wrapper2 minmaxRow={minmaxRow} minmaxColumn={minmaxColumn}>
             {
                 data ?
                 <>
                {itemData.map((division) => {
                    const { id, name } = division;
                    return(
                        <div 
                        key={id} 
                        className={`item item-${id}`}>{name}
                        </div>
                        )
                    })}
                </>
                :
                <>
                {itemDataMessed.map((division) => {
                    const { id, name } = division;
                        return(
                            <div 
                            key={id} 
                            className={`item item-${id}`}>{name}
                            </div>
                        )
                    })}
                </>
             }   

            </Wrapper2>

        </Wrapper>
        )

}

const Wrapper = styled.div`

`
const Wrapper2 = styled.div`
    background-color: #ff7052;
    display: grid;

    grid-template-rows: ${({minmaxRow}) => minmaxRow.selection };
    grid-template-columns: ${({minmaxColumn}) => minmaxColumn.selection };
    




    .item{
        border: 2px dashed black;
        background-color: #fcc006;
        font-size: calc(0.66667vw + 30px);
        text-align: center;
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

export default GridMaxMinContent;