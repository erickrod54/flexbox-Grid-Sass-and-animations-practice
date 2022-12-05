import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../../context";

  /**Flexbox-grid-sass-and-animations app version 54 -
   * ViewPortUnits - Features:
   * 
   *      --> Continuining 'ViewPortUnits' use cases.
   *   
   * Note: in next versions 'ViewPortUnits' use cases
   * will have it's own Component.
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

            <h3>'viewport' use cases:</h3>

            <p>
                there are three use cases for viewport:
            </p>

            <ul>
                <li>
                'font size' and viewport units
                </li>
                <li>
                viewport units for 'full screen sections'    
                </li>
                <li>
                viewport units for 'sticky footer' ( two approaches )    
                </li>
            </ul>

            <p>
                Note: watch both examples in 'inspection screen'
            </p>

            <h3>'font size' and viewport units:</h3>

            <p>
                font 'ui-scaling' can be dynamic by using 
                the 'vw' (viewport wide unit) along with
                the calc function as follows:
            </p>

            <section className="code-block">
                    <p>
                    font-size: calc(14px + 2vw);
                    </p>
                    
            </section> 

            <p>
                where '14px' and '2vw'
                 will depend on the use case
                for this case around '16px'
                for the calculation.
            </p>
            
                    
            <p>
                i have the following text to make it responsive
                applying viewport units:
            </p>

            <section className="code-block">
                    <p>
                    font size and viewport units
                    </p>
            </section>        

            <p>
                i have a '3vw' set in 'calc' 
                the calculation is made in the following way
                taking first the 'width' for example i have
                a '1500px' width, so have to multiply
                'width' by the 'vw' divided by hundred
                this will be:
            </p>

            <section className="code-block">
                    <p>
                    width * N vw = # pixels
                    </p>
                    <p>
                    as this:
                    </p>
                    <p>
                    1500px * 0.03 vw = 45px
                    </p>
            </section>        

            <p>
                by applying 'calc' this value of '45px'
                get's calculated dynamicly as smalls or
                big will be dependinding of the size 
                of the screen.
            </p>

            <p>
                for 'small screens' by adding the
                'font-size' ( a small font size ) 
                in the 'root' element for example: 
            </p>
            
            <section className="code-block">
                    <p>
                    {`:root{
                        font-size: 14px    
                    }`}
                    </p>
            </section>

            <p>
                and the 'font-size: calc' where
                i want to apply it:
            </p>

            <section className="code-block">
                    <p>
                    font-size: calc(1.4rem + 2vw);
                    </p>
            </section>

            <p>
                and the result is gonna be exactly the same:
            </p>

            <section className="code-block">
                    <p>
                    font size and viewport units
                    </p>
            </section> 

            <p>
                for 'large screens' (more than 2500px ) by 
                adding the 'font-size' i have to add the media 
                query rule like this: 
            </p>     

            <section className="code-block">
                    <p>
                    {`@media screen and (min-width: 1500px){`}</p>
                    <p> {`h1{
                            font-size:4.5rem
                        }`}</p>
                    <p>{`}`}</p>
            </section> 

            <h3>viewport units for 'full screen sections':</h3>

            <p>
                two props use for this case that make effective
                changes:
            </p>

            <section className="code-block">
                    <p>{`height: 100vh;`}</p>
                    <p>{`font-size: calc(20px + 2vw);`}</p>
            </section> 

            font-size: calc(20px + 2vw);

            <WrapperFullscreen>
                <section>
                    <h1>full screen and viewport units</h1>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna 
                        aliqua.
                    </p>
                    <Link to='#'>sign up</Link>
                </section>
            </WrapperFullscreen>

            <h3>viewport units for 'sticky footer':(first approach)</h3>

            <p>
                i have a 'page' with a font-size of '16px'
                but i want to use form those '16px' only 
                '10px',  how do i do this ?.. the following 
                way ( regla de tres ):
            </p>

            <section className="code-block">
                    <p>{`16px -----> 10px`}</p>
                    <p>{`100% -----> x`}</p>
                    <p>resulting in:</p>
                    <p>{`x = 62.5%`}</p>
                    <p>so the font will be:</p>
                    <p>{`:root{`}</p>
                    <p>{`font-size: 62.5%`}</p>
                    <p>{`}`}</p>
            </section> 

            <p>
                for a 'sticky' footer i have to apply 
                the 'calc' to the 'height' resting
                '100vh' ( the 100% of the height )
                minus '7.5rem' {`( header > height: 7.5rem)`}
                and 'footer' height '8.5rem'
                as folllows:
            </p>

            <section className="code-block">
                    <p>{`heigth:calc(100vh - 7.5rem - 8.5rem)`}</p>
            </section> 

            <p>
                let's apply it in the following example:
            </p>

            <WrapperStickyFooter>
                <header>header</header>
                <section>section</section>
                <footer>footer</footer>
            </WrapperStickyFooter>    

            <p>
               so it does not matter how big or small
               the viewport is always will 'stick' the 
               'footer' to the navigation
            </p>        

            <h3>viewport units for 'sticky footer':(second approach)</h3>

            <p>
               for the page i am going to use this props:
            </p>

            <section className="code-block">
                    <p>{`min-height: 100vh`}</p>
                    <p>{`display:flex`}</p>
                    <p>{`flex-direction:column`}</p>
            </section>

            <p>
               and a 'flex-grow' prop as follows
            </p> 

            <section className="code-block">
                    <p>{`flex-grow: 1`}</p>
            </section>

            <p>
                this will make the main element take the remaining 
                space dynamiclly ( section height must be taken off)
            </p>             

            <WrapperStickyFooter2>
                <header>header</header>
                <section>section</section>
                <footer>footer</footer>
            </WrapperStickyFooter2>

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
        font-weight: 700;
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

    .code-block{
        border: 2px solid black;
        margin: 2rem 1rem 2rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            margin: 1rem;
            padding: 0.5rem;
            
            font-size: calc(14px + 2vw);
        }
        
        }
`

const WrapperFullscreen = styled.div`
    *{
        padding: 0;
        margin: 0;
    }
    
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    section{
        background-color: indigo;
        color: white;

        /**fill screen */

        height: 100vh;
        
        /**optional styles */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1,a{
            text-transform: capitalize;
        }

        h1{
            margin-bottom: 40px;
            font-size: calc(20px + 2vw);
            font-weight: 300px;
            letter-spacing: 4px;
            width: 80%;
        }

        p{
            font-size: 10px;
            width: 80%;
            margin-bottom: 2rem;
        }


        a{
            color: white;
            text-decoration: none;
            border: 1px white solid;
            border-radius: 5px;
            padding: 12px 24px;

            transition: 0.35s ease-in-out;
        }
    }
`

const WrapperStickyFooter = styled.div`
    *{
        padding: 0;
        margin: 0;
    }

    header,section,footer{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        color: white;
        text-transform: capitalize;
    }

    header{
        background-color: lightsteelblue;
        height: 7.5rem;
    }

    section{
        background-color: lightskyblue;
        height: 30rem;
    }
    

    footer{
        background-color: lightseagreen;
        height: 8.5rem;
    }
    
    section{
        height: calc(100vh - 7.5rem - 8.5rem);
    }
`

const WrapperStickyFooter2 = styled(WrapperStickyFooter)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    section{
        /**this will make the main element take the remaining 
        *space dynamiclly */
        flex-grow: 1;
    }

    section{
        background-color: lightskyblue;
    }
`

export default ViewPortUnits;