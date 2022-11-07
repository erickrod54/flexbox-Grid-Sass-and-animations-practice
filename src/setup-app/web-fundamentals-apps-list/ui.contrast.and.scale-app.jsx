import moment from "moment";
import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../context";

/**Flexbox-grid-sass-and-animations app version 38 -
 * UIContrastAndScaleApp - Features:
 * 
 *      --> Building 'UIContrastAndScaleApp'
 * 
 * Note: Pending to make styles dinamicly and 
 * explanation aspects about the contrast and
 * scale web fundamental 
 */

const UIContrastAndScaleApp = () => {

    const { uiContrastAndScaleData } = useAppContext()
    console.log('the data ==> ', uiContrastAndScaleData)
    
    return(
        <UIContrastAndScaleWrapper>
            <div className="main-content">

            {uiContrastAndScaleData.map((item) => {
                const { id, date, headline, image, text } = item;

                return(
                    <section key={id} className="section">
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
    }

    .section{
        width: 70%;
        justify-content: space-evenly;
        margin-bottom: 20px;
        padding: 20px;
        background-color: rgb(131,167,214);
        border-radius: 10px;
        transition: transform 0.35s ease-in-out;
    }

    .section:hover{
        transform: scale(1.05);
    }

    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
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
        margin-bottom: 10px;
    }

    
`

export default UIContrastAndScaleApp;