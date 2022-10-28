import React from "react";
import styled from "styled-components";
import ComplexTitle from "../../components/complex-title";
import { useAppContext } from "../../context";



/**Flexbox-grid-sass-and-animations app version 33 -
 * 'UIWhitespaceAndAlignmentApp' - Features:
 * 
 *      --> Building 'UIWhitespaceAndAlignmentApp'.
 * 
 *      --> Destructuring 'UIWhitespaceAndAlignmentData'
 *          from the context.
 * 
 *      --> Building a return.
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const UIWhitespaceAndAlignmentApp = () => {

    const { UIWhitespaceAndAlignmentData } = useAppContext()

    console.log('the UIWhitespaceAndAlignmentData ==>', UIWhitespaceAndAlignmentData)

    return(
        <>
        <ComplexTitle title={<h2>Challenge 1 - <span className='ui-white-space-and-alignment-app'>
            Applying White Space and Alignment Fundamentals:
            </span></h2>}/>
            
        <SectionWrapper>
            {UIWhitespaceAndAlignmentData.map((section) => {
                const { id, image, date, headline, text } = section

                return(
                    <section key={id} className="section">
                        <img src={image} alt='images'/>
                        <div className="content">
                            <p>{date}</p>
                            <h3>{headline}</h3>
                            <p>{text}</p>
                        </div>
                    </section>
                )
            })}    
        </SectionWrapper>
        </>
    )
}

const SectionWrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    background-color: rgb(255,252,222);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    *{
        margin:0;
        padding:0;
    }
    .section{
        width: 400px;
        background-color: rgb(166,248,159);
    }

    img{
        width: 400px;
        height: 400px;
        object-fit: cover;
    }

    .content{
        p:first-of-type{
            text-align: center;
        }
    }
    
    .section .content h3{
        text-align: right;
    }

`
export default UIWhitespaceAndAlignmentApp;