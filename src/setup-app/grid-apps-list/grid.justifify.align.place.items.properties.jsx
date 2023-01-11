import React, { useState } from "react";
import styled from "styled-components";
import SelectionForm from "../../components/selection.form.component";

/**Flexbox-grid-sass-and-animations app version 60.17 -
 * GridContainerProperties - Features:
 * 
 *      --> Building 'GridContainerProperties'.
 * 
 * Note: Implementing selectionForm and validating 
 * behavior of grid auto rows elements.
 */

const GridContainerProperties = () => {

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

    const [ gridgap, setGridgap ] = useState('')
    const [ gridjustify, setGridjustify ] = useState('')
    const [ placecontent, setPlacecontent ] = useState('')

    const gridGapHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridgap({...gridgap, [name]:value })
        
    }

    const gridJustifyContentHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setGridjustify({...gridjustify, [name]:value })
        
    }

    const gridPlaceContentHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;    

            console.log('justify-content for grid => name selected ==>', name, ', value in it ==>', value)
            setPlacecontent({...placecontent, [name]:value })
        
    }

    const gridJustifyContentData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'stretch'
        },
        {
           id:3,
           value:'center'
        },
        {
            id:4,
            value:'flex-end'
         },
         {
            id:5,
            value:'space-around'
        },
         {
            id:6,
            value:'space-between'
        },
        {
            id:7,
            value:'space-evenly'
        },
    ]

    const gridGapData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'15px'
        },
    ]

    const gridPlaceContentData = [
        {
            id:1,
            value:'none'
        },
        {
            id:2,
            value:'start end'
        },
        {
           id:3,
           value:'start center'
        },
        {
            id:4,
            value:'center'
         },
         {
            id:5,
            value:'stretch center'
        },
         {
            id:6,
            value:'space-around'
        },
        {
            id:7,
            value:'space-between'
        },
        {
            id:8,
            value:'space-evenly'
        },
        {
            id:9,
            value:'space-around space-evenly'
        },
        {
            id:10,
            value:'space-around space-between'
        },
        {
            id:11,
            value:'space-between space-around'
        },
        {
            id:12,
            value:'space-between space-evenly'
        },
        {
            id:13,
            value:'space-evenly space-around'
        },
        {
            id:14,
            value:'space-evenly space-between'
        },
    ]


    return(
        <Wrapper>
            <h2>Grid Item Properties</h2>

            <p>
                the three properties that i can apply for the container children in grid are 
                <strong>justify-content, align-content, place-content (this last is a shorthand for 
                align-content and justify-content in that order )</strong> here i can see their 
                behavior  
            </p>

            <h3>justify-content:</h3>

            <p>
                let's apply <strong>justify-content</strong> to the containner children ( grid activation is a must - <strong>display: grid </strong>-):
            </p>


            <SelectionForm gridjustify={gridjustify}  handler={gridJustifyContentHandler} propertiesArray={gridJustifyContentData} propertyname={'justify-content'} />

            <p>
                i can combine it also adding some gap:
            </p>

            <SelectionForm gridgap={gridgap}  handler={gridGapHandler} propertiesArray={gridGapData} propertyname={'grid-gap'} />

            <p>
                i can see the behavior as follows:    
            </p>        

            {gridjustify ? 
                <p>
                    You selected <strong>'justify-content'</strong>: {gridjustify.selection}
                </p>
                :
                null
            }


            <Wrapper2 gridjustify={gridjustify} gridgap={gridgap}>
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

            <h3>place-content:</h3>

            <p>
                <strong>place-content</strong> is a shorthand for <strong>align-content</strong> and <strong>justify content</strong> in this 
                order the first valuewill be for align content and the second value for justify content
            </p>

            <SelectionForm placecontent={placecontent}  handler={gridPlaceContentHandler} propertiesArray={gridPlaceContentData} propertyname={'place-content'} />

            <p>
                i can combine it also adding some gap:
            </p>

            <SelectionForm gridgap={gridgap}  handler={gridGapHandler} propertiesArray={gridGapData} propertyname={'grid-gap'} />

            {placecontent ? 
                <p>
                    You selected <strong>'place-content'</strong>: {placecontent.selection}
                </p>
                :
                null
            }

            {placecontent.selection === 'center' ? 
                <p>
                    this is the perfect center for <strong>Grid </strong>and the property as follows <strong>'place-content'</strong>: {placecontent.selection}
                </p>
                :
                null
            }
            
            <Wrapper3 placecontent={placecontent} gridgap={gridgap}>
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

        </Wrapper>
    )
}

const Wrapper = styled.div`

`

const Wrapper2 = styled.div`
    background-color: #ff7052;
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 150px);
    height: 600px;
    grid-gap: ${({gridgap}) => gridgap.selection };  

    /**justify content */

    justify-content: ${({gridjustify}) => gridjustify.selection };

    /**place-content is a shorthand for align-content justify content */
    /** align-content - justify-content */

    /**this is the perfect center for grid */
    /**place-content: center; */
    
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

const Wrapper3 = styled.div`
    background-color: #ff7052;
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: repeat(2, 150px);
    height: 600px;
    grid-gap: ${({gridgap}) => gridgap.selection };  

    /**justify content */

    /**place-content is a shorthand for align-content justify content */
    /** align-content - justify-content */

    /**this is the perfect center for grid */
    /**place-content: center; */

    place-content: ${({placecontent}) => placecontent.selection };
    
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


export default GridContainerProperties;