import React from "react";
import styled from "styled-components";
import { useUIDesignContext } from "../../apps-context/ui.web.design.fundamentals.contex";
import ComplexTitle from "../../components/complex-title";

/**Flexbox-grid-sass-and-animations app version 60.05 -
 * UIDesignChallenge - Features:
 * 
 *        --> Redirecting states and features by 
 *          'useUIDesignContext()'. 
 * 
 *       --> Changing versioning to 2 digits   
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const UIDesignChallenge = () => {

    const { improvemovies, handleImprovemovies } = useUIDesignContext()

    return(
        <Wrapper>
            <ComplexTitle 
            title={<h2> 
                <span className="ui-design-challenge-app">UI design challenge:</span></h2>}/>

            <button onClick={handleImprovemovies}>improve design</button>
            
            {improvemovies ?
            <>
            <p>
                improvements are made in the following:
            </p>
            <ul>
                <li>
                    scaling 'h1' with margin (because it is the main title)
                    and giving some white space with margin.
                </li>
                <li>
                    the 'main content' is improve by adding white 
                    space ( padding )
                </li>
                <li>
                    improving 'name' and  'rates' by adding flex
                    space-in-between make it them responsive.
                </li>
                <li>
                    scaling 'rating' and 'names' using font-size.
                </li>
            </ul>
            
            </> 
            :
            null    
            }

            <div className={improvemovies ? "design-challenge design-challenge-improvement" : 'design-challenge'}>
                <aside></aside>
                <main id="main-content">
                    <h1>movies</h1>
                    <section className="content">
                        <h3>favorite movies</h3>
                        <ul>
                            <li>
                                <span>winter soldier</span> <span>9.5</span>
                            </li>
                            <li>
                                <span>aquaman</span> <span>7.4</span>
                            </li>
                            <li>
                                <span>endgame</span> <span>9.8</span>
                            </li>
                            <li>
                                <span>justice league</span> <span>4.4</span>
                            </li>                                                                
                        </ul>
                    </section>
                </main>
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    *{
        margin: 0;
        padding: 0;
    }

    button{
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    li, p{
        margin: 1rem 0 1rem 0;
    }

    li:first-letter{
        text-transform: uppercase;
    }

    .design-challenge{
        background: #014bcb ;
    
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;

        aside{
            background: #1d3154;
            width: 5%;
            height: 100vh;
        }


        h1{
            margin-left: 1rem;
            font-size: 1rem;
            text-transform: uppercase;
        }

        main{
            width: 100%;
        }

        .content{
            width: fit-content;
            background: #6c22ff;
            margin-right: 2rem;
            border-radius: 0.8rem;
        }

        h3{
            margin:0;
            font-size: 0.9rem;
            color: #ff69f5;
        }

        ul{
            list-style-type: none;
            padding: 0;
            margin-bottom: 0;
        }

        li{
            margin-bottom: 0.5rem;
            font-size: 0.8rem;
        }
    }

    .design-challenge-improvement{
        h1{
            margin: 2rem 2rem 2rem 0;
            font-size: 3rem;
        }

        main{
            padding: 1rem;
        }

        .content{
            background-color: #0044b9;
            padding: 1.5rem;
        }

        .content h3{
            margin: 1rem 0;
            font-size: 1.3rem;
        }

        .content ul li {
            padding: 0.2rem 0;
            display: flex;
            /**this improve make the space betwwen 'name' and 
            *'rates' */
            justify-content: space-between;
        }

        ul li span{
            font-size: 1rem;
        }
    }
`

export default UIDesignChallenge;