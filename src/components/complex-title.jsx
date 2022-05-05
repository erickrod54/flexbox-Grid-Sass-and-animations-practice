import React from "react";
import { Wrapper } from "../setup-app/flexbox-app/flexbox.styled.components";
/**
 * Flexbox-grid-sass-and-animations app version 2 -
 * complex-title - Features:
 * 
 *      -->Building ComplexTitle
 * 
 * Note:This is the first Component for Flexbox-grid-
 * sass-and-animations practice.
 */
const ComplexTitle = ({ title }) => {

    return(
        <>
            <Wrapper>
                <h1>{title}</h1>
            </Wrapper>
        </>
    )
}

export default ComplexTitle;