import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context";
import { Link } from 'react-router-dom';


/**Flexbox-grid-sass-and-animations app version 47 -
 * UIColorApp - Features:
 * 
 *      --> Migrating state color and handleColor
 *          feature to the context. 
 * 
 * Note: This features added due to the last app
 */

const UIColorApp = () => {

    const { uiColorData, handleColor, color } = useAppContext()
    //console.log('ui Color Data ==>', uiColorData)



    const { title, text, textlink } = uiColorData[0];

    return(
        <UIColorWrapper>
        <h2>UI Color App:</h2>

        <p>The color UI design fundamental is critical when
            you're designing, because is the first user 
            contact with the website, so color can be associated
            with companies, feelings, color-culture so depends
            also with demografic characteristics.
        </p>

        <p>
            for this example i'll have a simulation of a 
            home page from a website:
        </p>

        {color ? 
        <>
        
        <h3>After applying, i can notice:</h3>
        <ul>
            <li>
                how color 'degradation' gives a nice non-hurting
                eyes appearence, so at first look is atractive
                to the eye.
            </li>
            <li>
                the color font contrasting with the main 
                color degradating makes good readbility and 
                accesibility for general reading.
            </li>
            <li>
                the button with a very bright color, will 
                make the button visible and the font 
                backgorund get uniform with the darker
                shade of the main color
            </li>
        </ul>
        </>
        :
        null
        }

        <button onClick={handleColor}>
            apply color UI fundamentals
        </button>

        <div className={ color ? "ui-color-container ui-color-container-improve" : 'ui-color-container'}>
            <header>
                <p>some navigation links</p>
            </header>
            <section>
                <p>the main body</p>
                <h1>{title}</h1>
                <p>{text}</p>
             <Link to='#'>
             {textlink}
             </Link>   
            </section>
            <footer>
                <p>the footer</p>
            </footer>
        </div>
        </UIColorWrapper>
    )
}

const UIColorWrapper = styled.div`

button{
    margin:1.5rem;
}

 ul{
    margin:1rem;
    padding: 1rem;
}
    
li{
    margin:0.5rem;
}

header > p,
footer > p {
    display: flex;
    padding: .5rem;
    justify-content: flex-start;
}

section > p {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
}

header p:first-of-type,
footer p:first-of-type,
section p:first-of-type{
    font-weight: bold;
    color: tomato;
    text-shadow: 25px solid black;
}

.ui-color-container{
    font-family: Arial, Helvetica, sans-serif;
    background-color: #1f0252;

    header{
        height: 5rem;
        background-color: #7141c4;
    }

    section{
        padding: 3rem 2rem 2rem;
        background: #811573;
    }

    h1{
        margin:0;
        color: #617bff;
    }

    a{
        background: #157a81;
        padding: 0.5rem 2.3rem;
        display: inline-block;
        color: #3c1581;
        text-decoration: none;
        border-radius: 1rem;
        font-weight: bold;
        font-size: 0.9rem;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
    }

    p{
        color: #ff6eec;
        margin: 2rem 0;
    }

    footer{
        height: 2rem;
        background: #1f0252;
    }
}

.ui-color-container-improve{
    section{
        background-color: #3c1581;
    }

    h1,
    p{
        color: white;
    }

    a{
        background-color: #feed00;
    }
}

`

export default UIColorApp;