import React, { useState } from "react";
import styled from "styled-components";

/**Flexbox-grid-sass-and-animations app version 48 -
 * UnitsAndProps - Features:
 *
 *  
 *      --> Building 'states' and 'handlers'    
 *          to set 'width' and 'height' 
 *          dinamicly.
 * 
 *      --> Work in progress to explain 
 *          'max-width' and 'min-width'.
 * 
 *      --> Work in progress to explain 
 *          'max-height' and 'min-height'.
 * 
 * Note: this data is going to be passed to build 
 * uiColorApp.
 */

const UnitsAndProps = () => {

    const [ height, setHeight ] = useState('')
    const [ width, setWidth ] = useState('')

    const handleWidth = (e) => {
        const name = e.target.name;
        const value = e.target.value;
  
  console.log('width => name selected ==>', name, 'value selected ==>', value)
  
        setWidth({ ...width, [name]:value})
    }

    const handleHeight = (e) => {
        const name = e.target.name;
        const value = e.target.value;
  
    console.log('height => name selected ==>', name, 'value selected ==>', value)
  
        setHeight({ ...height, [name]:value})
    }

    return(
        <Wrapper width={width} height={height}>

            <h2>units and props for responsiveness:</h2>

            <p>
                there are a group of props and units 
                that have specific use cases for
                responsiveness, let's start with the
                units and these are:
            </p>

            <ul>
                <li>
                    viewport hardware pixels
                </li>
                <li>
                    device independent pixels ( dips )
                </li>
                <li>
                    css pixels
                </li>
            </ul>

            <hr></hr>

            <h3>css pixels:</h3>

            <p>
                A software pixel, also called a CSS pixel in the
                web world, is a unit of measurement. The device 
                manufacturer determines how many hardware pixels 
                equals one software pixel, a concept known as the
                device pixel ratio.
            </p>

            <h3>device independent pixels: ( dips )</h3>

            <p>
                the device independent pixel get related 
                with css pixels by meta tags (from server tags
                to the client ) to display a ratio that end
                resulting in resposiveness
            </p>

            <h3>viewport hardware pixels:</h3>

            <p>
                The browser's viewport is the area of the window
                in which web content can be seen. This is often
                not the same size as the rendered page, in which 
                case the browser provides scrollbars for the user 
                to scroll around and access all the content.
            </p>

            <hr></hr>

            <p>
                responsiveness is the concept of how 
                apps can adapt and look well in all
                kind of devices, and the props are:
            </p>

            <ul>
                <li>
                    max-width
                </li>
                <li>
                    min-width
                </li>
            </ul>

            <p>
                settting pixels in 'width' and 'height' 
                prop:
            </p>

            <select 
                name="selection" 
                id="selection" 
                value={height} 
                onChange={handleWidth}>
                    
                    <option value="">Select a height:</option>1
                    <option value='600px'>600px </option>
                </select>

                <select 
                name="selection" 
                id="selection" 
                value={width} 
                onChange={handleHeight}>
                    
                    <option value="">Select a width:</option>1
                    <option value='300px'>300px </option>
                </select>

            <div className="image-gradient" />
            { width && height ?
            <>
            <p>
                By setting a 'width' and 'height' in 
                'px' units if i set a large width for example
                '600px' i can see how the window display a
                scroll because the image exceed the screen 
                size
            </p>
            </>
            :
            null
            }

            <p>
                to checkout how the 'max-width' and max-height,
                behave i have to ..
            </p>

            
    
        </Wrapper>
    )
}


const Wrapper = styled.div`
    h2, h3{
        text-transform: capitalize;
        text-decoration: underline;
    }

    li{
        list-style-type: decimal;
        margin: 1rem 0 1rem 0
    }

    .image-gradient{
        background-image: linear-gradient( 135deg, #FFDB01 10%, #0E197D 100%);
        height: ${({height}) => height.selection};
        width: ${({width}) => width.selection};
    }
`

export default UnitsAndProps;