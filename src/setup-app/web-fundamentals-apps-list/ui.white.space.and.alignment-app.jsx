import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import ComplexTitle from "../../components/complex-title";
import { useAppContext } from "../../context";


/**Flexbox-grid-sass-and-animations app version 36 -
 * 'UIWhitespaceAndAlignmentApp' - Features:
 * 
 *      --> Combining alignment and white space 
 *          web design fundamentals to improve
 *          the styles
 * 
 *      --> Building 'spaceAndAligment' state.
 * 
 *      --> Building 'section' and 'content'
 *          fixed 
 * 
 * Note: About This 'object-fit' property tells the content 
 * to fill the container in a variety of ways; such as 
 * "preserve that aspect ratio" or "stretch up and take up 
 * as much space as possible.
 */

const UIWhitespaceAndAlignmentApp = () => {

    const { UIWhitespaceAndAlignmentData } = useAppContext()

    //console.log('the UIWhitespaceAndAlignmentData ==>', UIWhitespaceAndAlignmentData)
    
    const [ spaceAndAligment, setSpaceAndAligment ] = useState('')

    const handleSpaceAndAligment = () => {
        setSpaceAndAligment(!spaceAndAligment)   
        console.log(spaceAndAligment)
    }

    return(
        <>
        <ComplexTitle title={<h2>Challenge 1 - <span className='ui-white-space-and-alignment-app'>
            Applying White Space and Alignment Fundamentals:
            </span></h2>}/>

            <section>
                <p>Combining 'white space' and 'alignment' is about combining 'margin'
                   and 'text-align' ( for this case i have a 'p' tag and a and 'h3' tag)
                   which a text-align adds an 'alignment', margin is always about white
                   space (in this case i have sections if i add margin -white space-)
                   i can see how the changes made a good web design as follows:
                </p>
            </section>

            <button onClick={() => handleSpaceAndAligment()}>Set Space and Alignment</button>
            {!spaceAndAligment ?
            <>
            <h3>
                section now have a 'margin: 0 15px 0';
            </h3>
            <h3>
                Combining 'alignment' and 'white space' i add 
                for the first and last 'p' tag, and the 'h3'
                (heading) tag:
            </h3>   
            <ul>
                <li>
                text-align: left;        
                </li>
                <li>
                margin-top: 15px;        
                </li>
                <li>
                margin-left: 25px;        
                </li>
            </ul>
            </> 
            :
            null
            }
            
        <SectionWrapper>
            {UIWhitespaceAndAlignmentData.map((section) => {
                const { id, image, date, headline, text } = section

                return(
                    <section key={id} className={spaceAndAligment ? "section" : 'section section-fixed'}>
                        <img src={image} alt='images'/>
                        <div className={spaceAndAligment ? "content" : 'section section-fixed'
                         && 'section section-fixed content content-fixed h3'
                         &&'content content-fixed p:first-of-type'}>

                            <p>{moment(date).format('MMMM Do, YYYY')}</p>
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
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    *{
        margin:0;
        padding:0;
    }
    .section{
        width: 300px;
        background-color: rgb(166,248,159);
    }

    img{
        width: 300px;
        height: 300px;
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

    .section-fixed{
        margin: 0 15px 0;
    }

    /**this block of code below fixed the design combining 
    *'white space' and 'alignment'*/

    /**for the first paragraph */
    .section-fixed .content-fixed p:first-of-type,
    
    /**for the headline */
    .section-fixed .content-fixed h3,

    /**for the last paragraph at begining */
    .section-fixed .content-fixed p:last-of-type{
        text-align: left;
        margin-top: 15px;
        margin-left: 25px;
    }

    /**for the last paragraph at bottom, right and line height */
    .section-fixed .content-fixed p:last-of-type{
        margin-bottom: 20px;
        margin-right: 20px;
        line-height: 1.6;
    }

`
export default UIWhitespaceAndAlignmentApp;