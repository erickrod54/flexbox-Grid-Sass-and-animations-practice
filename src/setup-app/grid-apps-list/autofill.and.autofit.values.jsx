import React from "react";
import styled from "styled-components";

/**Flexbox-grid-sass-and-animations app version 61.12 -
 * GridAutoFillFit - Features:
 * 
 *      --> Starting to build 'GridAutoFillFit'. 
 * 
 * Note: Changing 'GridItemProperties' to GridContainerProperties
 * because 'grid.justifify.align.place.items.properties' are 
 * conatiner properties.
 * 
 * And naming 'GridItemProperties' for 'grid.item.properties'
 * component
 */

const GridAutoFillFit = () => {

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

    return(
    <Wrapper>
        <h2>Grid Auto Fill Fit</h2>
        <Wrapper2>
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