import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context";


/**Flexbox-grid-sass-and-animations app version 28 -
 * UIWhiteSpaceApp - Features:
 * 
 *      --> Setting full styles, pending to make
 *          dynamic styles.
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 * /** */

const UIWhiteSpaceApp = () => {

    const { uiWhiteSpaceData } = useAppContext()

    console.log(' data received from context ==>', uiWhiteSpaceData)

    return( 
        <>
        
        <SportWrapper >
            {uiWhiteSpaceData.map((sport) => {
                const {id, title, text } = sport;

                return(
                    <section key={id} className={ title === 'basketball' ? 'sport basketball' : 'sport'}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </section>
                )
            })}
        </SportWrapper>
        </>
    )
}


const SportWrapper = styled.main`
   /**styles for the container */
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 35px;
    
    *{
        margin:0;
        padding:0;
    }

    /**styles for every section of the container */    
    .sport{
        margin: 1rem;
        width:320px;
        background-image: linear-gradient(135deg, #90f7ec 10%, #32ccbc 100%);

    }

    .basketball{
        padding: 35px;
    }

    .basketball h2{
        margin-bottom: 10px;
    }

    .basketball p{
        line-height: 1.6;
    }

`

export default UIWhiteSpaceApp;