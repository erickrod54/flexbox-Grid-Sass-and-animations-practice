import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context";

/**Flexbox-grid-sass-and-animations app version 58 -
 * GridIntro - Features:
 * 
 *      --> Starting to build 'GridIntro'
 * 
 *      --> Destructuring data from context.
 * 
 *      --> Building an items array.
 * 
 *      -- Starting to build the return.
 *  
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const GridIntro = () => {

    const { gridIntroData } = useAppContext()

    console.log('the css grid data ==> ',gridIntroData)

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

    console.log('these are ==>',items)
    return(
        <Wrapper>
            <h2>Grid Intro</h2>
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

            <h4>grid column gap, grid row gap, and grid gap: (container properties)</h4>

            <section className="grid-container2">
                {items.map((division) => {
                    const { itemid, name } = division;
                    return(
                        <div 
                            key={itemid} 
                            className={`item2 item-${itemid}`}>{name}
                        </div>
                    )
                })}
            </section>

        </Wrapper>
        )
    }
    
const Wrapper = styled.div`

    .grid-container{
        background-color: #ff7052;

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
    }

    .grid-container2{
        background-color: #ff7052;

        /**initiates grid layout */
        display: grid;

        grid-template-columns: 150px 150px 150px 150px;
        grid-template-rows: 150px 150px 150px;
    }

    .item2 {
        background-color: #fcc006;
    }
`

export default GridIntro;