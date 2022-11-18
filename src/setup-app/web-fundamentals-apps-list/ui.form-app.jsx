import React, { useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../../context";


/**Flexbox-grid-sass-and-animations app version 43 -
 * 'UIFormApp' js file > web.fundamentals-apps - 
 * Features:
 * 
 *      --> Building 'UIFormApp'.
 * 
 *      --> Destrcuturing data from the context.
 * 
 *      --> Building return. 
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const UIFormApp = () => {

    
    const { uiFormData } = useAppContext()
    console.log('this is the data ==>', uiFormData)

    const [ improve, setImprove ] = useState(false)

    const handleImporve = () => {
        setImprove(!improve)
    }

    const { title, text, msginput1, msginput2, textlink, rows } = uiFormData[0]

    return(
        <UIFormWrapper>
            <h2>UI Form App challenge</h2>

            <p>UI form design start always with 'ui color' web fundamentalts, 'ui contrast and scale',
               and 'ui alignment', can be converged many more, but depends on the form in question
               for this case i can check on the following:              
            </p>

            <ul>
                <li>saturation of gray colors (needs 'ui contrast and scale')</li>
                <li>ui color makes difficult to visualize spaces (needs 'ui color')</li>
            </ul>

            <button onClick={handleImporve}>Improve 'UIForm'</button>

            {improve ? 
                <ul>
                    <li>
                        'ui contrast and scale' by setting contrast in typography,
                         and white background color.               
                    </li>
                    <li>'ui color' by setting vibrant colors that makes easy visualization</li>
                </ul>
            :
            null
            }
            <div className={improve ? 'ui-form-container ui-form-container-improve' : "ui-form-container"}>
                <section>
                    <h1>{title}</h1>
                    <p>{text}</p>
                    <form>
                        <label htmlFor='name'>{msginput1}</label>
                        <input type='text' id='name'/>

                        <label htmlFor='message'>{msginput2}</label>
                        <textarea id='message' rows={rows}></textarea>

                        <input type='submit' value={textlink}/>
                    </form>
                </section>
            </div>
        </UIFormWrapper>
    )
}


const UIFormWrapper = styled.div`
    .ui-form-container{
        background-color: rgba(0,0,0,0.8);
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        
        section{
            margin-top: 3rem;
            border-left: 0.7rem solid gray;
            padding: 0 3rem;
            width: 60%;
        }

        h1{
            margin:0;
            padding-top: 2rem;
        }

        p{
            color: #9d9d9d;
            margin: 0.5rem 0 2rem;
        }

        label{
            display: block;
            font-weight: bold;
            margin-bottom: 0.7rem;
        }

        input[type="text"],
        textarea{
            margin-bottom: 1.5rem;
            display: block;
            padding: 0.5rem;
            width: 80%;
            background-color: gray;
            border:none;
            border-bottom: 1px solid lightgray;
            outline: 0;
            color: black;
        }

        input[type="text"]:focus,
        textarea:focus{
            border-bottom: 1px solid white;
        } 

        input[type="submit"]{
            background: gray;
            border: none;
            color: white;
            font-weight: bold;
            padding: 0.8rem 2rem;
            border-radius: 2rem;
            font-size: 0.8rem;
            margin-bottom: 2rem;
        }
    }

    .ui-form-container-improve{
        background-color: white;
        /**the labels colors */
        color: #1c2022;

        section{
            border-left: 0.7rem solid #ff01ff;
        }

        p{
            color: #2b3337;
        }

        input[type=text],
        textarea{
            background-color: white;
            border-bottom: 1px solid #506671;
            color: #2b3337;
        }

        input[type=submit]{
            background-color: #ff01ff;
        }

        input[type=text]:focus,
        textarea:focus{
            border-bottom: 2px solid #ff01ff;
        }
    }


`

export default UIFormApp;