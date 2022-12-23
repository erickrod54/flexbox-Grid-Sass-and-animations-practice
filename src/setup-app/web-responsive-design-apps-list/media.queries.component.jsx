import React from "react";
import styled from "styled-components";

/**Flexbox-grid-sass-and-animations app version 58 -
 * MediaQueriesComponent - Features:
 * 
 *      --> Building 'MediaQueriesComponent'
 *  
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */


const MediaQueriesComponent = () => {

    return(
        <Wrapper>
          <h2>Media Queries</h2>

          <p>
              media queries is a way to give responsiveness
              by 'screen sizes' there is to ways of doing 
              this: 
          </p>

          <ul>
            <li>
                 by using {`'<link>'`} tag 
            </li>
            <li>
                by placing 'css media rule' ( inside of the stylesheets )
            </li>
          </ul>

          <h3>1.- using {`'<link>'`} tag:</h3>

          <p>
              link tag has a 'media' attribute where 'media
              queries' can be placed as the following example:
          </p>

          <section className="code-block">
                ..
                <p>
                    {`<link rel='stylesheet' href='5.style.css'/>`}
                </p>

                <p>
                    {`<link rel='stylesheet' href='5.over400.css'/>`}
                </p>
                ..
          </section>

          <p>
                if have to implement this first way i use 
                'stylesheets' that have the styles that will
                be applied and i can set the 'media' attribute
                as follows:
          </p>

          <section className="code-block">
                ..
                <p>
                    {`<link rel='stylesheet' media='screen and (min-width:400px)' href='5.over400.css'/>`}
                </p>
                ..
          </section>

          <p>
            so applied a media rule that applied '5.over400.css' over 400px
            so when its above 400px i use min-width (small screens), if implement below 
            will be 'max-width' ( larger screens ) 
          </p>

          <h3>
            2.- by placing 'css media rule' ( inside of the stylesheets ):
          </h3>

          <p>
            to checkout how this exercise is going
            to be made, i have to {`'inspect > dimensions responsive'`}
             so this way i can see how media queries are 
             applied   
          </p>

          <p>
            ok let's set a rule below '399px' (will be max-width)
            i will have a background of 'green' and above a 
            'maroon' background
          </p>

          <section className="code-block">
                <p>
                  {`
                @media screen and (max-width:399px){
                 `}  
                </p>
                <p>
                  {`
                    background-color: olivedrab;
                `}  
                </p>
                <p>
                  {`
                 
                }`}  
                </p>
          </section>


          <div className="style-css"/>
          
          <h3>
            media queries challenge:
          </h3>

          <p>
            From '0 to 400px', set the background to lawn green,
            from '401px to 599px', set the background to blueviolet,
            '600px' or wider, set the background color to dark red
          </p>

          <div className="style-css-challenge"/>

        </Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    h3,h2{
        text-transform: capitalize;
        font-weight: 700;
        text-decoration: underline;
    }

    li{
        text-transform: capitalize;
        list-style-type: decimal;
    }

    .style-css{
        width: 60vw;
        height: 60vh;
        background-color: maroon;

        @media screen and (max-width:400px){
            background-color: olivedrab;
            
        }

    }
    
    .style-css-challenge{
        width: 60vw;
        height: 60vh;
        background-color: darkred;
        
        @media screen and (max-width:599px){
            background-color: blueviolet;
        }

        @media screen and (max-width:400px){
            background-color: lawngreen;
        }
    }

    .code-block{
        border: 2px solid black;
        margin: 2rem 1rem 2rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p{
            margin: 1rem;
            padding: 0.5rem;
        }
    }

`

export default MediaQueriesComponent