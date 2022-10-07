import React from "react";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useAppContext } from '../context'

import styled from "styled-components";

/**Flexbox-grid-sass-and-animations app version 13 -
 * 'AppPage' Component - Features:
 * 
 *      --> Importing and placing 'Outlet'
 *          component from react-router-dom.      
 * 
 *      --> Building 'AppPageWrapper' to set
 *          styles to the shared layout for
 *          all the apps.   
 * 
 * Note: Outlet is a 'Route' -reference to
 * App js -, and their children are the apps.
 * 
 * 
 */

const AppPage = () => {

    const { appsLinksData } = useAppContext()

    return(
        
        <>
            <Link to={appsLinksData[0].url} >
                <span className="btn span">Back Home</span>
            </Link>
            <AppPageWrapper>
            <Outlet />
            </AppPageWrapper>
        </>
    )
}

const AppPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    justify-content: center;

    select, button{
        width: 10rem;
    }

    span{
        text-decoration: none;
    }
`

export default AppPage;