import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context";

  /**Flexbox-grid-sass-and-animations app version 50 -
   * ViewPortUnits- Features:
   * 
   *      --> Building 'ViewPortUnit'.
   *    
   *      --> Destructuring data from the context.
   * 
   *      --> Building a return.
   *   
   * Note: This file is going to be refactor en later
   * versions
   */

const ViewPortUnits = () => {

    const { viewPortData } = useAppContext()

    const cat = viewPortData[0].image;
    const duck = viewPortData[1].image;

    console.log('the data ==>', cat)

    return(
        <Wrapper>
            <h2>View Port Units</h2>

            <p>
                the viewport units are the following:
            </p>

            <ul>
                <li>
                    viewport width ( vw )
                </li>
                <li>
                    viewport height ( vh )
                </li>
                <li>
                    viewport vmin ( vmin )
                </li>
                <li>
                    viewport vmax ( vmax )
                </li>
            </ul>

            <h3>viewport width ( vw ):</h3>

            <p>
                the max size of viewport width is '100' the unit
                is 'vw' and this unit is related to the aspect 
                ratio of the images 
            </p>

            <img className='viewport-width' src={cat} alt='cat'/>

            <h3>viewport height ( vh )</h3>

            <p>
                the size of viewport height unit
                is 'vh' and this unit is related 
                to the vertical aspect to the image,
                in this example bellow the image has 
                applied 'vw' and 'vh' and this affects 
                the aspect ratio of the image 
                make in it 'shrunk' and 'stretch'. 
            </p>

            <img className='viewport-width-height' src={cat} alt='cat'/>

            <p>
                this can be fixed by adding the prop object-fit 
                cover
            </p>

            <img className='viewport-width-height-fixed' src={cat} alt='cat'/>

            <p>
                so whatever is the size of the window won't loose the aspect 
                ratio the image avoiding the shrink sideeffect, of course it
                is going to loose some parts of the image but will keep the 
                aspect ratio
            </p>

            <p>
                the other value of the 'object-fit' prop is 'contain'
                and this value keeps the complete image but contained
                in the viewport units so the image will be smaller or
                bigger by increasing or decreasing the window size
            </p>

            <img className='viewport-width-height-fixed-2' src={cat} alt='cat'/>

            <p>
                and the difference between 'cover' and 'contain', is that 
                'cover' cares about the 'ui white space' this is why the 
                image tend to lose some parts to take white space, and 
                'contain' doesn't care about 'ui white space' by containing
                the image does not take white space
            </p>

            <p>
                'vmax' and 'vmin' units are very often used for mobile design
                because the images or content makes responsive to the 
                viewport of the devices and is friendly implemetation 
                for vertical navigation. 
            </p>

            <h3>viewport vmin ( vmin ):</h3>

            <p>
                now the 'vmin' is the unit that make this image for 
                this case the 50% of the screen size ( the responsiveness based on the 
                smallest viewport ) because has been applied '50vmin' 
            </p>

            <img className='viewport-vmin' src={duck} alt='duck'/> 

            <h3>viewport vmax ( vmax ):</h3>       

            <p>
                now the 'vmax' is the unit that make images the 50%
                of the screen size ( the responsiveness based on the 
                biggest viewport ) because has been applied '50vmax'
            </p>

            <img className='viewport-vmax' src={duck} alt='duck'/>

        </Wrapper>
    )
}

const Wrapper = styled.div`

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    li{
        text-transform: capitalize;
        list-style-type: decimal;
    }

    h3{
        text-transform: capitalize;
        text-decoration: underline;
    }

    /**viewport width */
    .viewport-width{
        width: 50vw;
    }

    .viewport-width-height{
        width: 50vw;
        height: 50vh;
    }

    .viewport-width-height-fixed{
        width: 50vw;
        height: 50vh;
        object-fit: cover;
    }

    .viewport-width-height-fixed-2{
        width: 50vw;
        height: 50vh;
        object-fit: contain;
    }

    .viewport-vmin{
        width: 50vmin;
    }

    .viewport-vmax{
        width: 50vmax;
    }
`

export default ViewPortUnits;