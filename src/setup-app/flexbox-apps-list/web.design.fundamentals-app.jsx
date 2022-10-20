import React from "react";
import AppElementWebDesignFundamentals from "../../components/app.element.web.fundamentals.component";
import ComplexTitle from "../../components/complex-title";
import { useAppContext } from "../../context";
import { HomeWrapper, NavbarWrapper } from "../../pages/home-page";

/**Flexbox-grid-sass-and-animations app version 25 -
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

const WebDesingFundamentalsApp = () => {

    const { appWebFundamentalsData } = useAppContext();

    console.log('appWebFundamentalsData ==>', appWebFundamentalsData)

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