import React from "react";
import { useWebResponsiveContext } from "../../apps-context/web.responsive.context";
import AppElementResponsiveWebDesign from "../../components/app.element.responsive.web.fundamentals";
//import { useLocation, useParams } from "react-router-dom";
import ComplexTitle from "../../components/complex-title";
import { HomeWrapper, NavbarWrapper } from "../../pages/home-page";

/**Flexbox-grid-sass-and-animations app version 60.07 -
 * WebDesingFundamentalsApp - Features:
 * 
 *       --> Redirecting states and features by 
 *          'useWebResponsiveContext()'. 
 * 
 *      --> Changing versioning to 2 digits.  
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const ResponsiveWebDesignApp = () => {

    const { appWebResponsiveData } = useWebResponsiveContext()

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