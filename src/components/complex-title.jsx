import React from "react";
import { Wrapper as TitleWrapper } from "../setup-app/flexbox.styled.components";
/**
 * Flexbox-grid-sass-and-animations app version 7 -
 * complex-title - Features:
 * 
 *      -->Changing imports for 'Wrapper'
 * 
 *      -->Setting 'Wrapper' as 'TitleWrapper'
 * 
 * Note:This is the first Component for Flexbox-grid-
 * sass-and-animations practice.
 */
const ComplexTitle = ({ title }) => {

    return(
        <>
            <TitleWrapper>
                <h1>{title}</h1>
            </TitleWrapper>
        </>
    )
}

export default ComplexTitle;