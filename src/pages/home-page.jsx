import React from "react";
import ComplexTitle from "../components/complex-title";
import styled from "styled-components";

import AppElement from "../components/app.element.component";

import { useAppContext } from '../context';

/**Flexbox-grid-sass-and-animations app version 25 -
 * 'HomePage' Component - Features:
 * 
 *      --> Exporting 'NavbarWrapper' and 'HomeWrapper' 
 *          to use it 'WebDesingFundamentalsApp' 
 * 
 *      --> Adding '.second-title' for 
 *          'WebFundamnentalsApp'            
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


export const NavbarWrapper = styled.div`
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

.second-title{
    color: darkmagenta;
    text-decoration: underline 3px solid gainsboro;
}

`

export const HomeWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
`

export default HomePage;