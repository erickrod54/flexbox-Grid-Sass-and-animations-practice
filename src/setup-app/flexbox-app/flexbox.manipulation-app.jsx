import React from "react";

import { SectionListWrapper } from "../flexbox.styled.components";

import ComplexTitle from "../../components/complex-title";
import SectionList from "../../components/section.list.component";
import ToggleFeature from "../../custom-hooks/toggle-hook";

/**Flexbox-grid-sass-and-animations app version 7 -
 * flexbox.manipulation-app.jsx - Features:
 * 
 *      -->Building 'FlexBoxManipulationApp' as a 
 *         separate Component.
 *      
 *      -->Importing custom hook 'ToggleFeature'.
 * 
 *      -->Destructuring 'Flex' state and 'ToogleFlex' 
 *         functionality to implement it for this app.
 * 
 * Note: In this version i build a custom hook 'ToggleFeature'
 * as a general component that i'll use for 'FlexBoxApp' and
 * 'FlexBoxManipulationApp', built as a custom hook is can
 * be destructured and use whereever i need it.
 * 
 * In this case i implemented in 'FlexBoxManipulationApp' as
 * a separate app from 'FlexBoxApp' and they use the same
 * 'ToggleFeature' in separate way 
 */

/**2nd App -- Flexbox Manipulation */
const FlexBoxManipulationApp = () => {

    const { Flex, toggleFlex } = ToggleFeature();
    

    return(
        <>
            <h2>this is flexbox manipulation app</h2>
            <ComplexTitle title={<p><span className="flexbox-span-manipulation">Flex-box</span> manipulation:</p>}/>
            <p>flex-box meant for flexible box, websites are 
            based in the 'box model' compose by margin, padding 
            and content, as follows:
            </p>
            
             <button 
                onClick={toggleFlex}>{Flex 
                ? 'Not flex' : 'Flex'}</button>

             <SectionListWrapper toggleFlex1={Flex}>
                <SectionList />
             </SectionListWrapper>
        </>
    )
}

export default FlexBoxManipulationApp;