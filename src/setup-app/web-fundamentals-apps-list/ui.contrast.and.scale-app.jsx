import moment from "moment";
import React from "react";
import styled from "styled-components";
import { useUIDesignContext } from "../../apps-context/ui.web.design.fundamentals.contex";
import ComplexTitle from "../../components/complex-title";

/**Flexbox-grid-sass-and-animations app version 60.05 -
 * UIContrastAndScaleApp - Features:
 * 
 *        --> Redirecting states and features by 
 *          'useUIDesignContext()'. 
 * 
 *       --> Changing versioning to 2 digits   
 * 
 * Note: Pending to make styles dinamicly and 
 * explanation aspects about the contrast and
 * scale web fundamental 
 */

const UIContrastAndScaleApp = () => {

    const { sectionimprove, uiContrastAndScaleData, handleImprove } = useUIDesignContext()
    
    return(
        <>
            <ComplexTitle 
            title={<h2> 
                <span className="ui-contrast-and-scale-app">UI contrast and scale app:</span></h2>}/>
        
            <p>UI color contrast is the way to use colors to make 
                more accessible the content as readable and accessible,
                as well scale use diffetent font-size according on how
                the content is structured, for example here the content
                is structured in the following way:
            </p>
            <ul>
                <li>
                    main-content
                </li>
                <li>
                    content
                </li>
                <li>
                    section
                </li>
            </ul>
            
            <button onClick={handleImprove}>Add contrast and Scale</button>

            {sectionimprove ?
            <>
            <p>applying contrast and scale i can notice how different is the 
                final desigm from the original design, focusing in the following: 
            </p>

            <ImproveList>
            <ul>
                <li>the background gray has a contrast color with 
                the 'section' is a light blue 'rgb(131,167,214)'
                this way the typography can stay black color</li>
                <li>the font-size in the content has been targeted
                    with 'pseudo-selectors' to increase it ( creating
                    a better visualization )
                </li>
                <li>
                    the 'flex-wrap: wrap' prop has been applied to
                    the 'section' class making it responsive for 
                    small screens only implementing flexbox     
                </li>
                <li> also has been implemented '.section-improve:hover' with 
                    'transform: scale(1.05);' that makes scale the each section
                    on mouse over.
                </li>
            </ul>
            </ImproveList>    
            
            </> 
            :

            null
            }
        <UIContrastAndScaleWrapper>

            <div className="main-content">

            {uiContrastAndScaleData.map((item) => {
                const { id, date, headline, image, text } = item;

                return(
                    <section key={id} 
                        className={sectionimprove ? 'section section-improve' : 'section'}>

                        <img src={image} alt='animal'/>
                        <div className="content">
                            <p>{moment(date).format('MMMM Do YYYY')}</p>
                            <h3>{headline}</h3>
                            <p>
                                {text}
                            </p>
                        </div>
                    </section>
                )
            })}
            </div>

        </UIContrastAndScaleWrapper>
        </>
    )
}

const UIContrastAndScaleWrapper = styled.div`
background-color: rgb(61,70,78);

    .main-content{
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    *{
        margin:0;
        padding: 0;
    }

    .section{
       background-color: rgb(7,55,119);
       display: flex;
       flex-wrap: wrap;
    }

    .section-improve{
        width: 70%;
        justify-content: space-evenly;
        margin-bottom: 20px;
        padding: 20px;
        background-color: rgb(131,167,214);
        border-radius: 10px;
        transition: transform 0.35s ease-in-out;
    }

    .section-improve:hover{
        transform: scale(1.05);
    }

    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    .content{
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    p:not(:first-of-type){
        font-size: 20px;
    }
    
    .section .content h3{
        font-size: 30px;
        margin-bottom: 1.5rem;
        
    }
`

const ImproveList = styled.div`

        ul{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin:25px;
        }

        li{
            margin-bottom: 15px;
        }

        
`

export default UIContrastAndScaleApp;