import React, { useState } from "react";
import styled from "styled-components";
import { CodeBlock } from "../flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 60.12 -
 * GridTemplateArea - Features:
 * 
 *       --> Building 'GridTemplateArea'. 
 * 
 * Note: starting to build the ui color 
 * fundamental app
 */

const GridTemplateArea = () => {

    const [ improvearea, setImprovearea ] = useState(false)

    const handleImprovearea = () => {

        setImprovearea(!improvearea)
    }

    const items = Array.from({length:6}, (_,index) =>{
        const item = 'section';
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
            <h2>Grid Template Area</h2>

            <p>
                i have the following <strong>layout</strong> where
                everything is stack on top of each other with a 
                <strong>grid gap</strong> of <strong>25px</strong>
            </p>

            <p>
                let's improve improve it applying <strong>grid-template-area</strong>
                and check results:
            </p>

            <button onClick={handleImprovearea}>Apply <strong>grid-template-area</strong></button>

            <p>
                by applying i will get
            </p>

            <Wrapper2>
             <div className={improvearea ? "grid-container" : 'grid-container-improve'}>
                <header className="header">Header</header>
                {items.map((division) => {
                        const { itemid, name } = division;
                        return(
                            <section
                            key={itemid} 
                            className={`section-${itemid}`}>{name}
                            </section>
                        )
                    })}
                <footer className="footer">Footer</footer>
            </div>   
            </Wrapper2>

            {!improvearea ?
            <>
            <p>
                so how is this achieved, applying <strong>'grid-template-areas'</strong>
                i create a <strong>'blueprint'</strong> of how i want the areas of the website placed,
                the <strong>'blueprint'</strong> is created as follows:
            </p>

            <div className="center-grid">
                <CodeBlock>
                    <p>grid-template-areas: 'header header header header header header'</p>
                    <p> 'sec-1  sec-1  sec-2  sec-2  sec-3  sec-3'</p>
                    <p>'.      sec-4  sec-4  sec-4  sec-4   .'</p>
                    <p>'sec-5  sec-5  sec-5  sec-6  sec-6   sec-6'</p>
                    <p>'footer footer footer footer footer footer';</p>
                </CodeBlock>
            </div>        

            <p>
                take as first example <strong>'header'</strong> that is written <strong>'six times' </strong>
                so it generates <strong>'six columns'</strong>  and <strong>once the 
                blueprint is done</strong> i link the <strong>blueprint names</strong> with every <strong>element name </strong> 
                of the layout as follows: 
            </p>

            <p>
                also take a look over <strong>sec-4</strong> that has
                <strong>empty spaces at both sides</strong> this is made 
                by placing a <strong>dot ' . '</strong> in the blueprint
            </p>

            <div className="center-grid">
                <CodeBlock>
                    <p>{`.header{`}</p>
                    <p>{`background-color: chartreuse;`}</p>
                    <p>{`grid-area: header;`}</p>
                    <p>{`}`}</p>
                    <p>... and so on</p>
                </CodeBlock>
            </div>

            <p>
                notice very important when i link 
                the <strong>'blueprint names' </strong>
                with every <strong>element of the layout </strong>
                notice that
                <strong> they don't go with quotes ''</strong>
            </p>
            </>
            :
            null
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    
`

const Wrapper2 = styled.div`

.grid-container{
        background-color: #ff7052;
        display: grid;
        grid-gap: 25px;

        section,
        header,
        footer{
            background-color: #fcc006;
            font-size: 20px;
            text-align: center;
            line-height: 150px;
            font-family: Arial, Helvetica, sans-serif;
            letter-spacing: 3px;
        }

        .header{
            background-color: chartreuse;
           
        }

        .section-1{
            background-color: darkseagreen;
        }

        .section-2{
            background-color: chocolate;
        }

        .section-3{
            background-color: cornflowerblue;
        }

        .section-4{
            background-color: olivedrab;
        }

        .section-5{
            background-color: darkkhaki;
        }

        .section-6{
            background-color: gray;
        }
        
        footer{
            background-color: darkorchid;
        }

    }

    .grid-container-improve{
        background-color: #ff7052;
        display: grid;
        grid-gap: 25px;
        
        grid-template-areas: 'header header header header header header'
                             'sec-1  sec-1  sec-2  sec-2  sec-3  sec-3'
                             '.      sec-4  sec-4  sec-4  sec-4   .'
                             'sec-5  sec-5  sec-5  sec-6  sec-6   sec-6'
                             'footer footer footer footer footer footer';

        section,
        header,
        footer{
            background-color: #fcc006;
            font-size: 20px;
            text-align: center;
            line-height: 150px;
            font-family: Arial, Helvetica, sans-serif;
            letter-spacing: 3px;
        }

        .header{
            background-color: chartreuse;
            grid-area: header;
           
        }

        .section-1{
            background-color: darkseagreen;
            grid-area: sec-1;
        }

        .section-2{
            background-color: chocolate;
            grid-area: sec-2;
        }

        .section-3{
            background-color: cornflowerblue;
            grid-area: sec-3;
        }

        .section-4{
            background-color: olivedrab;
            grid-area: sec-4;
        }

        .section-5{
            background-color: darkkhaki;
            grid-area: sec-5;
        }

        .section-6{
            background-color: gray;
            grid-area: sec-6;
        }
        
        footer{
            background-color: darkorchid;
            grid-area: footer;
        }

    }
`

export default GridTemplateArea;