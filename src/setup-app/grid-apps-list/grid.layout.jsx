import React from "react";
import AppElementResponsiveWebDesign from "../../components/app.element.responsive.web.fundamentals";
//import { useLocation, useParams } from "react-router-dom";
import ComplexTitle from "../../components/complex-title";
import { useAppContext } from "../../context";
import { HomeWrapper, NavbarWrapper } from "../../pages/home-page";

/**Flexbox-grid-sass-and-animations app version 58 -
 * GridLayout - Features:
 * 
 *      --> Building 'GridLayout'
 * 
 *      --> Destructuring data from the context.
 * 
 *      --> Building the return
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const GridLayout = () => {

    const { cssGridlayoutData } = useAppContext();

    console.log('appWebResponsiveData ==>', cssGridlayoutData)
    //console.log('the use location ==>',useLocation())    
    return(
        <>
        <NavbarWrapper>
            <div className="title">
                <ComplexTitle title={<h1><span className="third-title">
                    grid layout
                    </span></h1>}/>
            </div>
        </NavbarWrapper>
        <div>
            <HomeWrapper>
                {cssGridlayoutData.filter((subapp) => subapp.name !== 'grid layout').map((subapps) => {

                    return(
                        <AppElementResponsiveWebDesign key={subapps.id}{...subapps}/>
                    )
                })}
            </HomeWrapper>
        </div>
        </>
    )
}

export default GridLayout;