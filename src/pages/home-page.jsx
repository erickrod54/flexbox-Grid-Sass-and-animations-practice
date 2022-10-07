import React from "react";
import ComplexTitle from "../components/complex-title";
import styled from "styled-components";

import AppElement from "../components/app.element.component";

import { useAppContext } from '../context';

/**Flexbox-grid-sass-and-animations app version 13 -
 * 'HomePage' Component - Features:
 * 
 *      --> Importing and placing 'ComplexTitle'
 *          to render a custom title for the 
 *          main title of the app.
 * 
 *      --> Destructuring 'appsLinksData' from
 *          'useAppContext'.
 * 
 *      --> Spreading all 'apps' props in 'AppElement'.
 * 
 *      --> Building 'HomeWrapper' style Component
 *          to apply to contain and style 'AppElement'
 *          Components        
 * 
 * Note: By spreading 'appsLinksData' i can handle 
 * better the props to develop 'AppElement' 
 * Component.  
 */

const HomePage = () => {

    const { appsLinksData } = useAppContext();

    //console.log('this is the appslinksdata ==>', appsLinksData)

    return(
        <>
            <NavbarWrapper>
            <div className="title">
            <ComplexTitle title={<h1>The Modern <span className="main-title">Flexbox, Grid, Styles and Animations</span></h1>}/>
            </div>
            </NavbarWrapper>
            <div >
          
            <HomeWrapper>
                {appsLinksData
                .filter((app) => app.name !== 'home').map((apps) => {

                    return(
                        <AppElement key={apps.id}{...apps}/>
                    )
                        
                })}    
            </HomeWrapper>
            
            </div>
        </>
    )
}


const NavbarWrapper = styled.div`
background-color: midnightblue;
padding: 20px;
display: flex;
justify-content: center;

.title{
    background-color: white;
    padding: 10px;
    margin: 20px;
    width: fit-content;
}

.main-title{
    color: blueviolet;
    text-decoration: underline 3px solid greenyellow;
}


`

const HomeWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
`

export default HomePage;