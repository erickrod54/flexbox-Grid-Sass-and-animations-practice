import React from "react";
import styled from "styled-components";
import { useGridContext } from "../../apps-context/grid.context";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 60.06 -
 * GridIntro - Features:
 * 
 *      --> Finishing 'shorthand' property
 * 
 *  
 * Note: i build this new wrapper4 because this 'oldshorthandvalue'
 *  and 'newshorthandvalue' property modifies row an columns individually 
 * so it causes conflict with the gap value in the scope of the style 
 * component make it the .selection value 'undefined'
 */

const GridIntro = () => {

    const { gridIntroData,
            oldGridSyntaxArray,
            oldsyntaxvalue,
            newsyntaxvalue,
            newGridSyntaxHandler,
            oldGridSyntaxHandler,
            newGridSyntaxArray,
            newGridrowSyntaxHandler,
            oldGridrowSyntaxHandler,
            newrowsyntaxvalue,
            oldrowsyntaxvalue, 
            oldGridrowSyntaxArray,
            newGridrowSyntaxArray,
            newshorthandGridGapHandler,
            oldshorthandGridGapHandler,
            oldshorthandvalue,
            newshorthandvalue
            } = useGridContext()
    //console.log('grid context data ==>', gridIntroData)

    //console.log('the css grid data ==> ',gridIntroData)

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

    
    const oldshorthandGridGapData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'10% 15%'
        },
        {
           id:3,
           value:'10px 25px'
        },
        {
           id:4,
           value:'15vw 15vh'
        },
        {
           id:5,
           value:'25px 10rem'
        },
        {
           id:6,
           value:'50px'
        }
    ]

    const newshorthandGridGapData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'10% 15%'
        },
        {
           id:3,
           value:'10px 25px'
        },
        {
           id:4,
           value:'15vw 15vh'
        },
        {
           id:5,
           value:'25px 10rem'
        },
        {
           id:6,
           value:'50px'
        }
    ]

    return(
        <Wrapper propertyvalue={oldsyntaxvalue}>
            <h2>Grid Intro</h2>


            <p>
                grid is a big deal for css because it was created to intend solve
                all layout problems <strong>( main layout of websites)</strong>,
                and at difference of flexbox grid works with two dimensions
                (flexbox works with one dimension).
            </p>

            <p>
                first i have the following section, a container
                'grid-container' with their children ' item-item# '
                as 'display:flex', the 'display:grid' activates 
                props of grid, that <strong>should be always use for 
                the 'main-layout' of websites</strong>, and <strong>'flex-box'
                can be use for small components</strong> as a 'navbar',
                a 'home content' or a 'footer', etc. 
            </p>

            <p>
                always is good to combine both 'flexbox' and 'grid' layout systems
            </p>

            <p>
                the following container has appplied a <strong>grid template properties</strong>
                and the <strong>'track size'</strong> (size of the container children )
                can be expressed in lengths, percentages, viewport units or fractions
            </p>
        
            <ul>
                <li>
                    <strong>
                    grid-template-rows: <span className="yellow">150px 150px 250px 50px;</span>
                    </strong>
                </li>
                <li>
                    <strong>
                    grid-template-columns: <span className="yellow">150px</span><span className="salmon">150px</span>;
                    </strong>
                </li>
            </ul>

            <p>
                each row space is dedicated to one 'div' which are the children of 'grid-container'
            </p>
            
          
            <section className="grid-container">
                {gridIntroData.map((division) => {
                    const { id, name } = division;
                    return(
                        <div 
                        key={id} 
                        className={`item item-${id}`}>{name}
                        </div>
                    )
                })}
            </section>



            <h3>grid column gap, grid row gap, and grid gap: (container properties)</h3>

            <p>
                let's start first with 'gap' that creates a <strong>responsive space</strong> between each 
                column or <strong>'grid-column-gap'</strong> that is the <strong>'old 
                syntax'</strong> and <strong>'column-gap'</strong> that it is the 
                <strong>'new syntax'</strong> both have the same result,
                the old syntax can be found in old codebases, and nowadays it is 
                recommended to use the new syntax 
            </p>
            
            <p>select a <strong>'old syntax'</strong> option:</p>
            <SelectionForm propertyvalue={oldsyntaxvalue} handler={oldGridSyntaxHandler} propertiesArray={oldGridSyntaxArray} propertyname={'grid-column-gap'} />
            
            {oldsyntaxvalue ? 
                <p>
                    You selected <strong>'old syntax'</strong> + grid-column-gap: {oldsyntaxvalue.selection}
                </p>
                :
                null
            }

            <p>select a <strong>'new syntax'</strong> option:</p>
            <SelectionForm propertyvalue={newsyntaxvalue} handler={newGridSyntaxHandler} propertiesArray={newGridSyntaxArray} propertyname={'column-gap'} />

            {newsyntaxvalue ? 
                <p>
                    You selected <strong>'old syntax'</strong> + column-gap: {newsyntaxvalue.selection}
                </p>
                :
                null
            }

            <p>
                gap is not limeted to <strong>'columns'</strong>, i can apply it to 
                <strong>'rows'</strong> and <strong>'mix' gaps</strong>  for columns and 
                rows
            </p>    

            <p>
                so 'gap' for rows does the same than columns but apply it for each 
                row or <strong>'grid-row-gap'</strong> that is the <strong>'old 
                syntax'</strong> and <strong>'row-gap'</strong> that it is the 
                <strong>'new syntax'</strong> both have the same result,
                the old syntax can be found in old codebases, and nowadays it is 
                recommended to use the new syntax 
            </p>

            <p>
                Note: <strong>the difference is than one use the word 'grid' and 
                the new doesn't, but the have the same result</strong>
            </p>

            <p>select a <strong>'old grid-gap-row syntax'</strong> option:</p>
            <SelectionForm propertyvalue={oldrowsyntaxvalue} handler={oldGridrowSyntaxHandler} propertiesArray={oldGridrowSyntaxArray} propertyname={'grid-row-gap'} />
            {console.log('the new selection oldrowsyntaxvalue ==>',oldrowsyntaxvalue.selection)}
            {oldrowsyntaxvalue ? 
                <p>
                    You selected <strong>'old syntax'</strong> + grid-row-gap: {oldrowsyntaxvalue.selection}
                </p>
                :
                null
            }

            {oldrowsyntaxvalue.selection === '5%' ? 
            <>
                <p>
                    You selected <strong>'old syntax'</strong> + grid-row-gap: {newrowsyntaxvalue.selection}
                </p>
                <p><span className="red">for both old and new syntax (have speacial carfeul using percentages because can make content overflow)</span></p>
            </>
                :
                null
            }

            <p>select a <strong>'new grid-gap-row syntax'</strong> option:</p>
            <SelectionForm propertyvalue={newrowsyntaxvalue} handler={newGridrowSyntaxHandler} propertiesArray={newGridrowSyntaxArray} propertyname={'row-gap'} />

            {newrowsyntaxvalue ? 
                <p>
                    You selected <strong>'new syntax'</strong> + row-gap: {newrowsyntaxvalue.selection}
                </p>
                :
                null
            }

            {newrowsyntaxvalue.selection === '5%' ? 
            <>
                <p>
                    You selected <strong>'new syntax'</strong> + row-gap: {newrowsyntaxvalue.selection}
                </p>
                <p><span className="red">for both old and new syntax (have speacial carfeul using percentages because can make content overflow)</span></p>
            </>
                :
                null
            }
            
            <GridWrapper2 oldsyntaxvalue={oldsyntaxvalue} newsyntaxvalue={newsyntaxvalue} newrowsyntaxvalue={newrowsyntaxvalue} oldrowsyntaxvalue={oldrowsyntaxvalue}>
                {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item2 item-${itemid}`}>{name}
                        </div>
                    )
                })}
            </GridWrapper2>

            <p>
                there is also a <strong>'shorthand property'</strong> where i can
                <strong>combine both 'rows 'and 'columns'</strong> in a single line
                of code also with a <strong>'old syntax'</strong> and a 
                <strong>'new syntax'</strong> as follows:
            </p>    

                {/**shorthand section - status work in progress
                 * --------first i have to migrate all features
                 */}
            <p>select a <strong>'grid-gap shorthand property'</strong> option:</p>

            <SelectionForm propertyvalue={oldshorthandvalue} handler={oldshorthandGridGapHandler} propertiesArray={oldshorthandGridGapData} propertyname={'grid-gap'} />

            {oldshorthandvalue ? 
                <p>
                    You selected <strong>'old syntax'</strong> + grid-gap: {oldshorthandvalue.selection}
                </p>
                :
                null
            }

            <GridWrapper3  oldshorthandvalue={oldshorthandvalue} >
                {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item2 item-${itemid}`}>{name}
                        </div>
                    )
                })}
            </GridWrapper3>

            <p>
                there is also the <strong>new syntax</strong> they behave the same, the 
                new syntax is most used in new data bases
            </p>

            <SelectionForm propertyvalue={newshorthandvalue} handler={newshorthandGridGapHandler} propertiesArray={newshorthandGridGapData} propertyname={'gap'} />
            
            {console.log('the new selection shorthand ==>',newshorthandvalue.selection)}     
            {newshorthandvalue ? 
                <p>
                    You selected <strong>'new syntax'</strong> + gap: {newshorthandvalue.selection}
                </p>
                :
                null
            }

            <GridWrapper4  newshorthandvalue={newshorthandvalue} >
                {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                        key={itemid} 
                        className={`item2 item-${itemid}`}>{name}
                        </div>
                    )
                })}
            </GridWrapper4>

        </Wrapper>
        )
    }
    
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: left;
flex-direction: column;



.salmon{
    background-color: #ff7052;
}
    .yellow{
        background-color: #fcc006;
    }
    
    .grid-container{
        margin-top: 2rem;
        background-color: #ff7052;
        border: 2px dashed green;
        
        /**initiates grid layout */
        display: grid;

        /**grid template properties */

        /**property values can be */
        /** --- track size - could be lengths, 
        percentages, viewport units or fractions
        * <line-name> ( an arbitrary name of your choosing )  */
        
        
        grid-template-rows: 150px 150px 250px 50px;
        /**grid template columns */
        
        grid-template-columns: 150px 150px;
    }
    
    .item {
        background-color: #fcc006;
        border: 1px dashed black;
    }
    
    
    /**grid column gap property - provides gap between the columns*/
    /**--- track size - could be lengths, 
    percentages, viewport units or fractions */
    
    .red{
        border-radius: 0.75rem;
        background-color: red;
        color: white;
    }
    
    
    `

const GridWrapper2 = styled.section`
        background-color: #ff7052;
        border: 2px dashed green;
        /**initiates grid layout */
        display: grid;
        grid-column-gap: ${({oldsyntaxvalue}) => oldsyntaxvalue.selection };
        column-gap: ${({newsyntaxvalue}) => newsyntaxvalue.selection };
        grid-row-gap: ${({oldrowsyntaxvalue}) => oldrowsyntaxvalue.selection};
        row-gap: ${({newrowsyntaxvalue}) => newrowsyntaxvalue.selection };


        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: 150px 150px 150px;


    .item2 {
        background-color: #fcc006;
        border: 1px dashed black;
    }

`

/**i build this new wrapper because this property modifies
 * row an columns individually so it can not go togeter with 
 * the rest of the properties because will make the value 
 * undefined*/
const GridWrapper3 = styled.section`
        background-color: #ff7052;
        border: 2px dashed green;
        /**initiates grid layout */
        display: grid;
        grid-gap: ${({oldshorthandvalue}) => oldshorthandvalue.selection};


        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: 150px 150px 150px;


    .item2 {
        background-color: #fcc006;
        border: 1px dashed black;
    }
    `

const GridWrapper4 = styled.section`
        background-color: #ff7052;
        border: 2px dashed green;
        /**initiates grid layout */
        display: grid;
        gap: ${({newshorthandvalue}) => newshorthandvalue.selection};


        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: 150px 150px 150px;


    .item2 {
        background-color: #fcc006;
        border: 1px dashed black;
    }
`


export default GridIntro;