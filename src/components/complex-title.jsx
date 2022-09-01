import React from "react";
import { Wrapper as TitleWrapper } from "../setup-app/flexbox.styled.components";
/**
 * Flexbox-grid-sass-and-animations app version 11 -
 * complex-title - Features:
 * 
 *      -->Removing the 'h1'
 * 
 * Note:This is the first Component for Flexbox-grid-
 * sass-and-animations practice.
 */
const ComplexTitle = ({ title }) => {

    return(
        <>
            <TitleWrapper>
                {title}
            </TitleWrapper>
        </>
    )
}

export default ComplexTitle;