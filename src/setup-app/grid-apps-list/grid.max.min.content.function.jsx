import React from "react";
import styled from "styled-components";

/**Flexbox-grid-sass-and-animations app version 60.17 -
 * GridContainerProperties - Features:
 * 
 *      --> Building 'GridMaxMinContent '.
 * 
 * Note: Pending to make it dynamic.
 */


const GridMaxMinContent = () => {

    /**here i create an array with 8 items */

    /**i modify 'item' to add an array with new content*/
    const items = Array.from({length:8}, (_,index) =>{
        const item = ['I', 'was', 'written or shown', 'here', 'to', 'have', 'something messed up here, something messed up here, something messed up here, something messed up here, something messed up here, something messed up here', 'fun'];
        const itemid = index;

        const name = item[itemid];

        const newDataitems = 
            {
                
                itemid,
                name
            }
        
        return newDataitems;
    })
    
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

            <Wrapper2 >
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
    
    /**grid-template-rows: repeat(2, 150px); */
    /**grid-template-columns: 1fr 1fr 1fr 1fr; */
    /**grid-template-columns: 1fr 1fr max-content 1fr; */
    /**grid-template-columns: 1fr 1fr min-content 1fr; */

    /**grid-template-columns: 1fr 1fr 1fr 1fr; */
    /**grid-template-rows: repeat(2, max-content); */
    
    /**min-max function */
    grid-template-columns: 1fr 1fr min-content 1fr;

    /**it doesn't get smaller than 200px or bigger than 'min-content' 
    * make it responsive*/
    grid-template-rows: repeat(2, minmax(100px, min-content));

    /**it doesn't get bigger than 200px or smaller than 100px 
    * is like a limit for the content*/
    /**grid-template-rows: repeat(2, minmax(100px, 200px)); */



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