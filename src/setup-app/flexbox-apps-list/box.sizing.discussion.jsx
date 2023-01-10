import React, { useState } from "react";
import styled from "styled-components";
import { useFlexboxContext } from '../../apps-context/flexbox.context'

/**Flexbox-grid-sass-and-animations app version 60.16
 * index js file - Features:
 * 
 *      --> Migrating states and handlers
 * 
 *      --> Destructuring from the context.
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const BoxSizing = () => {

    const { boxpadding,
            paddingbox,
            paddingboxcont,
            handlePaddingbox,
            handleBoxpadding,
            handlePaddingboxcont } = useFlexboxContext()
 
    return(
        <WrapperBoxsizing>
            <h2>Box Sizing:</h2>

            <p>
                box sizing is going to affect the 'hwight' and
                width of the elements 
            </p>

            <p>
                for this case i have two 'divs', so said this 
                i'll apply a padding of '10px' to the 'div-1'  
            </p>

            <button onClick={handleBoxpadding}>
                apply a padding to 'div-1'
            </button>

            <div className={ !boxpadding ? 'div-1' : 'div-1-padding'}>div-1</div>
            <div className="div-2">div-2</div>

            { boxpadding ? 
                <p>
                    by applying the padding i can check that i
                    have no control over the 'width' ( previously 
                    150px ) and now by adding the padding of 10px will be around '170px'
                </p>
            
            :
            null
            }

            <p>
                so to make the 'width' predictible i can implement 
                'box-sizing'
            </p>

            <p>
                but what if i apply 'box-sizing' prop on this 
                design 'border-box' value:
            </p>

            <button onClick={handlePaddingbox}>
                apply a padding to 'div-1'
            </button>

            <div className={ paddingbox ? 'div-1-padding-box div-1-padding' : 'div-1-padding-box div-1-padding'}>div-1</div>
            <div className="div-2">div-2</div>

            {paddingbox ?
            <p>
                in this case by applying 'box-sizing: border-box;'
                even when i apply a padding this won't affect the 
                width of the design, in this case the width will
                be reduce by inside of the design affecting the 
                content. this box is 150px, and with this changes
                will be '130px', '20px' now bellong to the border
            </p>
            :
            null
            }

            <p>
                by applying 'box-sizing' prop on this 
                design 'content-box' value:
            </p>

            <button onClick={handlePaddingboxcont}>
                apply a padding to 'div-1'
            </button>

            <div className={ !paddingboxcont ? 'div-1' : 'div-1-padding-box-cont'}>div-1</div>
            <div className="div-2">div-2</div>

            { paddingboxcont ?
            <p>
                so by applying 'box-sizing: content-box;' the 
                'width' of the box will be the 'width' of the 
                content, and the box will have similar behavior 
                to the first one
            </p>
            :
            null
            }

            <p>
                but in web design 'box-model' is one of the 
                most important concepts there are cases when 
                apply 'box-content' is necessary, but most of 
                cases will be 'border-box' applied to reduce 
                the content and preserve the box size.
            </p>

            <p>
                the second most important concept is cascading 
                and this works by specifity, most specific rule is 
                applied.
            </p>

        </WrapperBoxsizing>
    )
}

const WrapperBoxsizing = styled.div`
    *{
        margin: 0;
        padding: 0;
    }
    
    h2{
        text-decoration: underline;
    }
    
    p::first-letter{
        text-transform: capitalize;
    }
    
    h2, p, button{
        margin: 1rem 0 2rem 0;
    }
    
    div{
        display: flex;
        height: 150px;
        width: 150px;
        justify-content: center;
        align-items: center;
        color: blueviolet;
        font-size: 3vw;
    }
    
    .div-1{
        background-color: lightpink;
    }
    
    .div-1-padding{
        background-color: lightpink;
        padding: 10px;
        border: 3px solid blue;
    }

    .div-1-padding-box{
        background-color: lightpink;
        padding: 10px;
        border: 5px solid red;
        box-sizing: border-box;
        border: 3px solid red;
    }

    .div-1-padding-box-cont{
        background-color: lightpink;
        padding: 10px;
        border: 5px solid red;
        box-sizing: content-box;
        border: 3px solid magenta;
    }

    .div-2{
        background-color: lightgreen;
    }
`

export default BoxSizing;