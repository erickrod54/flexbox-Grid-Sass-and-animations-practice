import { useState } from "react";

/**Flexbox-grid-sass-and-animations app version 7 -
 * 'toogle-hook' js file - Features:
 * 
 *      -->Building 'ToggleFeature' Custom hook.
 * 
 * Note: In this version i build a custom hook 'ToggleFeature'
 * as a general component that i'll use for 'FlexBoxApp' and
 * 'FlexBoxManipulationApp', built as a custom hook is can
 * be destructured and use whereever i need it.
 */
const ToggleFeature = () => {

    const [ Flex, setFlex ] = useState(false);

    const toggleFlex = () => {
        setFlex(!Flex)
        console.log(Flex)
    }

    return { Flex, toggleFlex };
}

export default ToggleFeature;