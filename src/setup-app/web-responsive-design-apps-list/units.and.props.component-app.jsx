import React, { useState } from "react";
import styled from "styled-components";
import { maxwidthimage } from "../../assets/assets.index";


/**Flexbox-grid-sass-and-animations app version 49 -
 * UnitsAndProps - Features:
 *
 *  
 *      --> Finish to explain 
 *          'max-width' and 'min-width'.
 * 
 *      --> importing and placing 'maxwidthimage'.
 * 
 * Note: this data is going to be passed to build 
 * uiColorApp.
 */

const UnitsAndProps = () => {
    
    const [ height, setHeight ] = useState('')
    const [ width, setWidth ] = useState('')
    const [ maxheight, setMaxheight ] = useState('')
    const [ maxwidth, setMaxwidth ] = useState('') 
    
    
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
    
    const handleMaxwidth = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('max width => name selected ==>', name, 'value selected ==>', value)
        
        setMaxwidth({ ...maxwidth, [name]:value})
    }
    
    const handleMaxheight = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        console.log('max height => name selected ==>', name, 'value selected ==>', value)
        
        setMaxheight({ ...maxheight, [name]:value})
    }
    
    
    
    return(
        <Wrapper width={width} height={height} maxwidth={maxwidth} maxheight={maxheight}>

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
                to checkout how the 'max-width' and 'max-height'
                make an impact in resposiveness, let's try fixing
                the max-width to '300px':
            </p>

            <select 
                name="election" 
                id="election" 
                value={maxheight} 
                onChange={handleMaxwidth}>
                    
                    <option value="">Select a height:</option>1
                    <option value='600px'>600px </option>
                </select>

                <select 
                name="election" 
                id="election" 
                value={maxwidth} 
                onChange={handleMaxheight}>
                    
                    <option value="">Select a width:</option>
                    <option value='300px'>300px </option>
              </select>

              <div className="image-gradient-maxwidth"/>

              {maxwidth ?
              <>
              <p>
                by fixing the 'max-width' to '300px' i can 
                notice how 'max-width' set a limit of 300px
                so the responsiveness can go bellow '300px'
                but no more than that so i can get a fixed
                300px but responsive bellow that value 
              </p>
              
              <img src={maxwidthimage} alt='maxwidthimage'/>

              <p>
                the image above has no 'max-width' prop 
                and the image bellow has 'max-width' prop
              </p>

              <p>
                so 'max-width' is use for small screens 
                because set a limit 'width'
              </p>

              </>
                
               
              :
              null
            }

            <p>
                so what about larger screens as '4k', '6k', '8k'
                for this case, i can implement 'min-width' that 
                does the oposite of 'max-width'
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
    
    .image-gradient-maxwidth{
        background-image: linear-gradient( 135deg, #FFDB01 10%, #0E197D 100%);
        height: ${({ maxheight }) => maxheight.election };
        max-width: ${({ maxwidth }) => maxwidth.election };    
    }

    
`

export default UnitsAndProps;