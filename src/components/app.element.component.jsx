import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

/**Flexbox-grid-sass-and-animations app version 13 -
 * 'AppElement' Component - Features:
 * 
 *      --> Destructuring the props that were
 *          spreaded from HomePage Component
 *          to this component 'id', 'name', 'desc',
 *          'category', and 'url'.
 * 
 *      --> Importing and setting it as a link
 *          to access to every app separetely.
 * 
 *      --> Building 'AppSectioWrapper' to style
 *          the content of every link.        
 * 
 * Note: By spreading 'appsLinksData' i can handle 
 * better the props to develop 'AppElement' 
 * Component.  
 */

const AppElement = ({id, name, desc, category, url}) => {

    return(
        <AppSectioWrapper>
        <Link className="app-element" to={url} >
        <div  className='app-box' key={id}>
            <h2><span className="span">App name: </span>  {name}</h2>
            <div className="content">
            <p><span className="span"> description: </span> {desc}</p>
            <p className="info">
                <span className="category">category </span>
                <span className="container-properties">{category}</span>
            </p>
            </div>
        </div>
        </Link>
        </AppSectioWrapper>
    )
}

const AppSectioWrapper = styled.section`

.app-element{
    text-decoration: none;
    font-size: 1rem;
    margin: 0 auto;
    padding: 1rem;
    
    .app-box{
        width: 20rem;
        height: 15rem;
        background-color: lightslategray;
        padding: 2.5rem;
        margin: 0.25rem;
        color: white;
        
        .span{
            color: var(--clr-primary-10);
            text-transform: capitalize;
            text-decoration: underline 2px solid ghostwhite;
            text-shadow: var(--dark-shadow);
            
        }

        .category{
            background-color: gray;
            color: whitesmoke;
            padding: 0.25rem;
            border-radius: 0.50rem;
        }

        .info{
            display: flex;
            flex-direction: row;
            font-size: 0.75rem;
            justify-content: flex-start;

            .container-properties{
                background-color: lightsalmon;
                padding: 0.25rem;
                border-radius: 0.50rem;
            }

            span{
                margin-left: 0.50rem;
            }
        }
        
        h2{
            font-size: 1.2rem;
        }
    
        .content{
            background-color: #20b2aa;
            margin: 0.25rem;
            padding: 1.7rem;
        }
    
    }
}

`


export default AppElement;

