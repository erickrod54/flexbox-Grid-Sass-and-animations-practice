import React from "react";
import AppElementResponsiveWebDesign from "../../components/app.element.responsive.web.fundamentals";
//import { useLocation, useParams } from "react-router-dom";
import ComplexTitle from "../../components/complex-title";
import { useAppContext } from "../../context";
import { HomeWrapper, NavbarWrapper } from "../../pages/home-page";

/**Flexbox-grid-sass-and-animations app version 45 -
 * WebDesingFundamentalsApp - Features:
 * 
 *      --> Building 'WebDesingFundamentalsApp'
 * 
 *      --> Destructuring the data from the context.
 * 
 *      --> Building the return. 
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const ResponsiveWebDesignApp = () => {

    const { appWebResponsiveData } = useAppContext();

    console.log('appWebResponsiveData ==>', appWebResponsiveData)
    //console.log('the use location ==>',useLocation())    
    return(
        <>
        <NavbarWrapper>
            <div className="title">
                <ComplexTitle title={<h1><span className="third-title">
                    Responsive Web Design Fundamentals App
                    </span></h1>}/>
            </div>
        </NavbarWrapper>
        <div>
            <HomeWrapper>
                {appWebResponsiveData.filter((subapp) => subapp.name !== 'web responsive design fundamentals').map((subapps) => {

                    return(
                        <AppElementResponsiveWebDesign key={subapps.id}{...subapps}/>
                    )
                })}
            </HomeWrapper>
        </div>
        </>
    )
}

export default ResponsiveWebDesignApp;