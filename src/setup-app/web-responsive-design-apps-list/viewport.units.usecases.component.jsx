import React from "react";
import styled from "styled-components";
import { Wrapper } from "./viewport.units.component";
import { Link } from "react-router-dom";


  /**Flexbox-grid-sass-and-animations app version 55 -
   * ViewPortUnits - Features:
   * 
   *      --> Building ViewportUnitsCases.
   *   
   * Note: in next versions 'ViewPortUnits' use cases
   * will have it's own Component.
   */

const ViewportUnitsCases = () => {

    return(
        <Wrapper>
            <h2>'viewport' use cases:</h2>

            <p>
                there are five use cases for viewport:
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
                <li>
                margins (external distances) and paddings ( internal distances )    
                </li>
                <li>
                top border    
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

            <h3>margins and paddings:</h3>    

            <p>
                by implementing 'margin' ( external distances ) 
                and 'paddings' ( internal distances ) using
                viewport units will make a responsive design
                as follows:             
            </p>
            
            <section className="code-block">
                    <p>{`padding: 10vh 5vw;`}</p>
                    <p>where by 'vh' vertical padding</p>
                    <p>and</p>
                    <p>by 'vw' horizontal padding</p>
            </section>

            <p>
                by this implementation the padding can decrease
                and increase dynamiclly.             
            </p>

            <WrapperFitnessMatters>
                 <header>
                    <h1>fitness matters</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua.
                    </p>
                 </header>
            </WrapperFitnessMatters>            
            
            <p>
                to prevent 'overflow' of content in 
                small screens, i can write it this way:             
            </p>
            
            <section className="code-block">
                    <p>{`padding: calc(4px + 2vh) calc(4px + 2vw)`}</p>
            </section>

            <WrapperFitnessMatters2>
                 <header>
                    <h1>fitness matters</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna 
                    aliqua.
                    </p>
                 </header>
            </WrapperFitnessMatters2>          

            <p>
             also the margin can be dynamic by this case in vertical
            </p>  

            <section className="code-block">
                    <p>{`p{`}</p>
                    <p>{` margin-bottom: 3vh;`}</p>
                    <p>{`}`}</p>
            </section>

            <h3>the top border:</h3>              

             <p>
                this is more a 'tred' to make borders dymnamic,
                this is also made using viweport units, the regular
                approach ( not dynamic, will be like this)
            </p>

            <section className="code-block">
                    <p>{`border-top: 5px solid lightslategray;`}</p>
            </section>

            <p>
                so to make the border responsive i'll apply
                this calculation over the pixel number:
            </p>

            <section className="code-block">
                <p>{`vw [( pixel value / viewport width) * 100 ]`}</p>
            </section>

            <p>
                let's apply it over the pixel number '1500px':
            </p>

            <section className="code-block">
                <p>{`border-top: 0.3333vw solid lightslategray;`}</p>
            </section>            

            <WrapperTopborder>
                <header>
                    <nav>
                        <Link to='#'>Link 1</Link>
                        <Link to='#'>Link 2</Link>
                        <Link to='#'>Link 3</Link>
                        <Link to='#'>Link 4</Link>
                        <Link to='#'>Link 5</Link>
                    </nav>
                </header>
            </WrapperTopborder>

            <p>
                but there is an issue when the 'viewport'
                goes really small the 'top  border' trend
                to be not visible, and this can be fixed 
                in this way ( fixing it in 2px ): 
            </p>       

            <section className="code-block">
                <p>{`border-top: calc(2px + 0.186vw) solid lightslategray;`}</p>
            </section>

            <p>
                so be always fixed in 2px as follows: 
            </p>

            <WrapperTopborder2>
                <header>
                    <nav>
                        <Link to='#'>Link 1</Link>
                        <Link to='#'>Link 2</Link>
                        <Link to='#'>Link 3</Link>
                        <Link to='#'>Link 4</Link>
                        <Link to='#'>Link 5</Link>
                    </nav>
                </header>
            </WrapperTopborder2>

        </Wrapper>        
    )
}

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

const WrapperFitnessMatters = styled.div`

    header{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        height: 40vh;
        background-color: lightsalmon;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 10vh 5vw;
    }
`

const WrapperFitnessMatters2 = styled(WrapperFitnessMatters)`
    padding: calc(4px + 2vh) calc(4px + 2vw);    

    p{
        margin-bottom: 3vh;
    }
`

const WrapperTopborder = styled.div`
    header{
        background-color: rgb(227, 232, 238);
        padding: 5vh 5vw;

        /**------top border ------ */
        /** regualar approach
        *   border-top: 5px solid lightslategray;
        */

        /***making the broder responsive ==> vw [( pixel value / viewport width) * 100 ]*/
        border-top: 0.3333vw solid lightslategray;
    }

    a{
        text-decoration: none;
        color: #444;
        margin:0.2vw;
    }
`

const WrapperTopborder2 = styled(WrapperTopborder)`
    
    border-top: calc(2px + 0.186vw) solid lightslategray;

`

export default ViewportUnitsCases;