import React from "react";
import styled from "styled-components";
import ComplexTitle from "../../components/complex-title";
import { useAppContext } from "../../context";


/**Flexbox-grid-sass-and-animations app version 45 -
 * UIWhiteSpaceApp - Features:
 * 
 *      --> Taking off unused Components.
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 * /** */

const UIWhiteSpaceApp = () => {

    const { uiWhiteSpaceData, basketball,handleBasketball } = useAppContext()
    
    
    console.log(' data received from context ==>', uiWhiteSpaceData)

    return( 
        <>
        <ComplexTitle title={<h2><span className="ui-white-space-app">UI white space app:</span></h2>}/>
        <h3>Here in this app i focus in the use of universal selector to clear all
            styles related to 'margin' and 'padding' making them '0', so i can start to
            design layout using white space ( customizing marging and padding)
        </h3>
        <h4>apply white spaces clicking:</h4>
        <button onClick={() => handleBasketball()}>apply UI white space</button>
        { basketball ?
            <>
            <h4>changes been made setting a padding  and margin:</h4>
            <ul>
                <li>to the .basketball class a padding of '35px'</li>
            </ul>
            <ul>
                <li>to the .basketball in h2 margin-bottom: '10px'</li>
            </ul>
            <ul>
                <li>to the .basketball p line-height: '1.6' ( paragraph spacing )</li>
            </ul> 

            <p>Note: the changes made add white spaces using 'padding' and 'margin' to
                get a better design, comparing 'basketball' with 'golf' and 'footbal' 
                card
            </p>
            </> 
            :
            null
        }
        <SportWrapper >
            {uiWhiteSpaceData.map((sport) => {
                const {id, title, text } = sport;

                /**the way that the className is evaluated is in order to give dynamic styles 
                 * only to 'basketball' the cart in the middle ( note how the 'sport' cascade
                 * on 'basketball' passing the condition )*/
                return(
                    <section key={id} className={ basketball && id === 2 ? 'sport basketball' : 'sport'}>
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

    h2{
        text-transform: capitalize;
    }
    /**here i use universal selector to
    * all styles relatyed to margin and padding and
    * and focus on design white space*/
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