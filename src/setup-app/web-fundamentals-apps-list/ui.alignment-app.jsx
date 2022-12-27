import React from "react";
import styled from "styled-components";
import { useUIDesignContext } from "../../apps-context/ui.web.design.fundamentals.contex";
import ComplexTitle from "../../components/complex-title";

/**Flexbox-grid-sass-and-animations app version 60.04 -
 * UIAlignmentApp - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useUIDesignContext()'.
 * 
 *       --> Changing versioning to 2 digits
 * 
 * Note: This features added due to the last app
 * 
 * cta button stands for - ( call to action )
 */

const UIAlignmentApp = () => {

    const { line, marginleft, transformnone, handleAlignment, handleLine } = useUIDesignContext()

    return(
        <>
        <ComplexTitle 
        title={<h2> 
            <span className="ui-alignment-app">UI alignment app:</span></h2>}/> 

        <h3>The ui design fundamental alignment is based on how to set the right alignment
        to the 'app' make it look more in order, and not 'off' or 'out of place' as the 
        example below, the should be align in a vertical line ( that's what ui alignment
        design fundamental is about ), if i trace i line i can se how 'off' is the layout 
        </h3>

        <section style={{ padding: '2rem'}}>
            <button onClick={() => handleLine()}>Set UI line</button>               
            { line ?
            <h4>Setting the line ( for this case is the left border, but 
            this depends the direction of the items, if they are on the 
            'main' or 'cross axis') all this aspects come to consideration</h4>
            :
            null 
            }

            <button onClick={() => handleAlignment()}>Set UI Alignment</button>               
            { marginleft && transformnone ?
            <h4>After setting up the line i can evaluate which props can modify
                the alignment for the 'off' elements
            </h4>
            :
            null 
            }    
        </section>
        <UIAlignmentAppWrapper>
        <header className={line ? "line container" : 'container'}>
            <a href='/#' className="logo">Company logo</a>

            <h1 className={marginleft ? 'margin-left' : null}>Some Heading </h1>
            
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <a href='/#' className="cta">Sign up</a>
        </header>

        </UIAlignmentAppWrapper>
        
        </>
    )
}

const UIAlignmentAppWrapper = styled.div`
    *{
        margin:0;
        padding: 0;
    }

    font-family: Arial, Helvetica, sans-serif;
    background-color: #444e5c;
    border-left: 17px solid rgba(0,0,0,0.2);
    height: 100vh;
    padding: 30px;

    .container{
        width: 80%;
        margin: 0 auto;
    }

    .line{
        border-left: 1px solid rgba(255,255,255,1);
    }

    a{
        color: white;
        text-decoration: none;
    }

    a.logo{
        display: block;
        padding-top: 16px;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12px;
    }

    h1{
        margin: 64px 0 30px 30px;
        color: white;
    }

    p{
        color: #b2cef2;
        line-height: 20px;
        font-size: 16px;
    }

    a.cta{
        display: inline-block;
        background: #5099ff;
        padding: 14px 28px;
        font-weight: bold;
        border-radius: 30px;
        transform: translateX(50%);
        margin-top: 32px;
    }

    .margin-left{
        margin-left: 0;
    }

    
    a.cta{
      transform: none;
    }

`

export default UIAlignmentApp;