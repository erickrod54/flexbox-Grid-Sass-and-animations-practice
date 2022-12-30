import React from "react";
import styled from "styled-components";
import { useUIDesignContext } from "../../apps-context/ui.web.design.fundamentals.contex";
import ComplexTitle from "../../components/complex-title";
import { UITypographyFont } from "./ui.typography.global.fonts";

/**Flexbox-grid-sass-and-animations app version 60.06 -
 * UITypographyApp - Features:
 * 
 *       --> Redirecting states and features by 
 *          'useUIDesignContext()'. 
 * 
 *        --> Changing versioning to 2 digits.  
 * 
 * Note: 'Order Property' (this is the first items property)
 * is properties applied directly to items inside of 
 * the containers.
 */

const UITypographyApp = () => {

    const {  uiTypographyData, improvetypo, handleImproveTypo } = useUIDesignContext()

    return(
        <>
        <UITypographyFont/>
        <UITypographyWrapper>
        <ComplexTitle 
            title={<h2> 
                <span className="ui-typography-app">UI typography app:</span></h2>}/>

            <section className="main-section">

            <p>Typography is a big subject that involves
                many important consideration as (this is 
                for 'visual hierarchy').
            </p>
            <h3>Before 'improvements':</h3>
            <p>there are visual defects regarding to:</p>
            <ul>
                <li>
                    no white space 'margin', 'padding' in sections.
                </li>
                <li>
                    no white space between 'headings' and 'paragraphs' in the 
                    content.
                </li>
                <li>no 'line-height' for paragraphs ( this make the lines look so 
                    close that it is difficult to read plus the contrast in the 
                    content).
                </li>
            </ul>
            <button onClick={handleImproveTypo}>apply typography web fundamentals</button>
            {improvetypo ?
            <>
            <h3>After 'improvements':</h3>
            <ul>
                <li>number of font-families (adviceable 1, max 2),
                this example is fixed by 1 font.
                </li>
                <li>for the 'heading' and 'text' they should to be aligned
                    at center.
                </li>
                <li>set contrast betwen the color font and it's
                    backgrund (for this example gray and white in every section).
                </li>
                <li>
                    if there is image present as in the example visually
                    is always adviceable set it centered for this
                    case is made with in the image tag with 
                    'display: block;' and 'margin: 0 auto 15px;'.
                </li>
            </ul>            
            </> 
            :
            null
            }

            <main className={improvetypo ? 'improvements' : null}>
               <h1 className="main-heading">{uiTypographyData[0].heading}</h1>
                <p>{uiTypographyData[0].text}</p>
                <div className="all-content">
            {uiTypographyData.filter((sections) => sections.id !== 1).map((section) => {
                const { id, image, text, headline } = section;

                return(
                        <section key={id} className="section">
                            <div className="content">
                            <img src={image} alt='animals'/>
                                <p>{text}</p>
                                <p>{headline}</p>
                            </div>
                        </section>
                )
            })}
            </div>
            </main>

            </section>
        </UITypographyWrapper>
        </>
    )
} 

const UITypographyWrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
    }

    .main-section{
        margin-top: 2rem;
    }

    main{
        background-color: rgb(216,230,218);
        padding: 30px;
    }

    main .all-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    ul{
        margin:1rem;
        padding: 1rem;

    }
    
    li{
        margin:0.5rem;
    }

    main .all-content .section{
        width: 250px;
        background-color: rgb(83,95,107);
    }

    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
    }

    h1{
        font-family: 'Cinzel', serif;
    }

    p:not(:first-of-type){
        text-align: left;
    }

    p{
        font-family: 'Kalam', cursive;
    }

    button{
        margin:15px 15px 40px;
    }

    /**improvements */

.improvements{

    main > h1,
    main > p {
        text-align: center;
    }

    h1{
        font-family: 'Kalam', cursive;
        text-transform: capitalize;
        margin-bottom: 10px;
    }

    .section{
        margin: 20px 0; 
        padding: 20px;
        border:5px;
        color: white;
    }

    img{
        display: block;
        margin: 0 auto 15px;
    }

    p:not(:first-of-type),
    p{
        font-size: 15px;
        font-family: Arial, Helvetica, sans-serif;
    }

    p:not(:first-of-type)
    {
        text-transform: capitalize;
    }

    p{
        line-height: 1.6;
        margin-bottom: 10px;
    }

    }
`

export default UITypographyApp;