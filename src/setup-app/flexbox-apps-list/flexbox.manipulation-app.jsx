import React from "react";

import { SectionListWrapper } from "../flexbox.styled.components";

import ComplexTitle from "../../components/complex-title";
import SectionList from "../../components/section.list.component";
//import ToggleFeature from "../../custom-hooks/toggle-hook";
import { useFlexboxContext } from "../../apps-context/flexbox.context";

/**Flexbox-grid-sass-and-animations app version 60.03 -
 * flexbox.manipulation-app.jsx - Features:
 * 
 *      --> Redirecting states and features by 
 *          'useFlexboxContext()'.
 * 
 *      --> Changing versioning to 2 digits 
 * 
 * Note: This is the context implememntation for the
 * FlexBoxManipulationApp
 */

/**2nd App -- Flexbox Manipulation */
const FlexBoxManipulationApp = () => {

    const { toggleFlexManApp, flexmanapp } = useFlexboxContext()
    //console.log('toggle flex value for manipulation app==>', flexmanapp)

    return(
        <>
           
            <ComplexTitle title={<p><span className="flexbox-span-manipulation">Flex-box</span> manipulation:</p>}/>
            <p>flex-box meant for flexible box, websites are 
            based in the 'box model' compose by margin, padding 
            and content, as follows:
            </p>
            
             <button 
                onClick={toggleFlexManApp}>{flexmanapp 
                ? 'Not flex' : 'Flex'}</button>

             <SectionListWrapper toggleFlex1={flexmanapp}>
                <SectionList />
             </SectionListWrapper>
        </>
    )
}

export default FlexBoxManipulationApp;