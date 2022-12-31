import React from "react";
import { useUIDesignContext } from "../../apps-context/ui.web.design.fundamentals.contex";
import AppElementWebDesignFundamentals from "../../components/app.element.web.fundamentals.component";
import ComplexTitle from "../../components/complex-title";

import { HomeWrapper, NavbarWrapper } from "../../pages/home-page";

/**Flexbox-grid-sass-and-animations app version 60.07 -
 * WebDesingFundamentalsApp - Features:
 * 
 *       --> Redirecting states and features by 
 *          'useUIDesignContext()'. 
 * 
 *       --> Changing versioning to 2 digits.   
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const WebDesingFundamentalsApp = () => {

     const { appWebFundamentalsData } = useUIDesignContext()

    //console.log('appWebFundamentalsData ==>', appWebFundamentalsData)
    //console.log('the use location ==>',useLocation())    
    return(
        <>
        <NavbarWrapper>
            <div className="title">
                <ComplexTitle title={<h1><span className="second-title">
                    Web Desing Fundamentals App
                    </span></h1>}/>
            </div>
        </NavbarWrapper>
        <div>
            <HomeWrapper>
                {appWebFundamentalsData.filter((subapp) => subapp.name !== 'web design fundamentals').map((subapps) => {

                    return(
                        <AppElementWebDesignFundamentals key={subapps.id}{...subapps}/>
                    )
                })}
            </HomeWrapper>
        </div>
        </>
    )
}

export default WebDesingFundamentalsApp;