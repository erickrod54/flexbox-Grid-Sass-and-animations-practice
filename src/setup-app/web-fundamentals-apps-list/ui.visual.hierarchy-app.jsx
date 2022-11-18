import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


/**Flexbox-grid-sass-and-animations app version 43 -
 * 'UIVisualHierarchyApp' js file 
 * > web.fundamentals-apps - Features:
 * 
 *      --> Building 'UIVisualHierarchyApp'.
 * 
 *      --> Building states to handle changes.
 * 
 *      --> Building handlers
 * 
 *      --> Building return. 
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const UIVisualHierarchyApp = () => {

    const [ important, setImportant ] = useState(false)
    const [ important1, setImportant1 ] = useState(false)
    const [ important2, setImportant2 ] = useState(false)
    const [ important3, setImportant3 ] = useState(false)
    const [ important4, setImportant4 ] = useState(false)
    const [ align, setAlign ] = useState(false)
    const [ lowcontrast, setLowcontrast ] = useState(false)
    const [ scale, setScale ] = useState(false)
    const [ improve, setImprove ] = useState(false)
    

    const handleImportantcecircle = () => {
        setImportant(!important)
    }

    const handleImportantcecircle1 = () => {
        setImportant1(!important1)
    }

    const handleImportantcecircle2 = () => {
        setImportant2(!important2)
    }

    const handleImportantcecircle3 = () => {
        setImportant3(!important3)
    }

    const handleImportantcecircle4 = () => {
        setImportant4(!important4)
    }

    const handleAling = () => {
        setAlign(!align)
        console.log(align)
    }

    const handleLowcontrast = () => {
        setLowcontrast(!lowcontrast)
        console.log(lowcontrast)
    }

    const handleScale = () => {
        setScale(!scale)
        console.log('this is the scale value ==>',scale)
    }

    const handleImprove = () => {
        setImprove(!improve)
        console.log('this is the scale value ==>',improve)
    }

    return(
        <UIVisualHierarchyWrapper>
        <h2>UI Visual HierarchyApp</h2>

        <p>
            visual herarchy is the web fundamental design
            that relate the rest of the web fundamentals 
            in order to stablish importance level by applying
            'ui align', 'ui contrast and scale', 'ui color'
        </p>

        <p>
            in this example bellow the circles in the same
            colors tells me as an user that all the circles
            have the same importance
        </p>

        <p>
            if i click in the cirle in the middle by changing 
            to a bright color i am making it more important
            than the rest
        </p>

        <p>
            i can apply 'UI Visual Hierarchy' throught:
        </p>

        <ul>
            <li>
                <button onClick={handleAling}>UI visual Hierarchy by 'align'</button>    
            </li>
            <li>
                UI visual Hierarchy by high 'contrast' (click in the circle)
            </li>
            <li>
            <button onClick={handleLowcontrast}>UI visual Hierarchy by low 'contrast'</button>
            </li>
        </ul>

         <div className={lowcontrast ? 'ui-visual-hierarchy-container less-lowcontrast' : "ui-visual-hierarchy-container"}>
            <Link to='#' className={align ? "circle align-circle" : "circle"} onClick={handleImportantcecircle3}>
            <div className={important3 ? "circle important-circle" : "circle"}/>
            </Link>
            <Link to='#' onClick={handleImportantcecircle4}>
            <div className={important4 ? "circle important-circle" : "circle"}/>
            </Link>
            <Link to='#' onClick={handleImportantcecircle}>
                <div className={ important ? "circle important-circle" : "circle"}/>
            </Link>
            <Link to='#' onClick={handleImportantcecircle1}>
            <div className={important1 ? "circle important-circle" : "circle"}/>
            </Link>
            <Link to='#' onClick={handleImportantcecircle2}>
            <div className={important2 ? "circle important-circle" : "circle"}/>
            </Link>
         </div> 
            <section>
            { important || important1 || important2 || important3 || important4 ?
                <p>
                    when i change for i vibrant color in a group of elements
                    one or more elements i am applying 'UI Visual HierarchyApp'
                    because i am making this element more important than the 
                    rest in the group
                </p>
                :
                null
            }
            </section>

            <section>
            {lowcontrast ? 
                <p>
                    giving also 'low contrast' and high contrast to
                    certain elements i can give importance by focus
                    the attention into the elements that i want the 
                    user to see    
                </p>
                :
                null
            }
            </section>

            <p>i can do it also by scaling</p>

            <button onClick={handleScale}>UI Scale</button>

            <div className='ui-visual-hierarchy-container'>
            <Link to='#'>
                <div className='circle'/>
            </Link>
            <Link to='#'>
                <div className='circle'/>
            </Link>
            <Link to='#' >
                <div className={scale ? "circle scale" : "circle"}/>
            </Link>
            <Link to='#' >
                <div className='circle'/>
            </Link>
            <Link to='#' >
                <div className='circle'/>
            </Link>
         </div> 

         <p>
            let's tackle with UI visual herarchy the next form 
            sample:
         </p>  

         <button onClick={handleImprove}>Improve UI Design</button>

         <div className={improve ? 'main-example main-example-improve' : "main-example"}>
            <h1>Join our Newsletter</h1>
            <form>
                <label for='email'>Email Address</label>
                <div className="input-container">
                    <input type='email'/>
                    <input type='submit' value='submit email'/>
                </div>
            </form>
         </div>

         {improve ?
         <div>
            <ul>
                <li>'UI scaling' for the 'h1' to get focus on the title.</li>
            </ul>
            <ul>
                <li>'UI contrast' apply it to the form so the user can visualize the form</li>
            </ul>
            <ul>
                <li>
                    both principles 'UI scale' and 'UI contrast' for the inputs
                    giving them better readbility with the font-weight and
                    better visualization with the contrast
                </li>
            </ul>
         </div> 
         :
         null
         }
            
        </UIVisualHierarchyWrapper>
    )
}

const UIVisualHierarchyWrapper = styled.div`


    .ui-visual-hierarchy-container{
        background: blueviolet;
        height: 16rem;
        display:flex ;
        align-items: center;
        justify-content: space-evenly;

    }

    .main-example{
        padding: 2rem;
        background: #5801cb;
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        h1{
            font-size: 1rem;
        }

        form{
            width: fit-content;
            padding: 20px;
        }

        label{
            display: block;
            padding: 10px 0;
        }

        input[type="email"]{
            padding: 10px;
            width: 50%;
            border: none;
            margin:0 5px 0 0;
        }

        input[type="submit"]{
            border: 1px solid white;
            padding: 10px;
            color: white;
            background: none;
        }
    }

    .main-example-improve{
        h1{
            font-size: 2.8rem;
        }
        form{
            background-color: #6900f3;
        }
        label{
            font-weight: bold;
            font-size: 1rem;
        }

        input[type='submit']{
            font-size: 0.8rem;
            background-color: #ffed8c;
            color: #5801cb;
            font-weight: bold;
        }
    }

    button{
        margin-bottom: 1rem;
    }

    .less-lowcontrast{
        div{
            background: rgba(255,255,255,0.4);
        }
    }
    
    .circle{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: white;
        cursor: pointer;
    }

    .important-circle{
        background: yellow;
    }
    
    .scale{
        transform: scale(1.5);
    }

    .important-lowcontrast{
        background: white;
    }

    .align-circle{
        margin-top: 1rem;
        align-self: flex-start;
    }

    section{
        height: fit-content;
    }
    `

export default UIVisualHierarchyApp;