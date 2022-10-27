import React from "react";
import styled from "styled-components";
import ComplexTitle from "../../components/complex-title";
import { useAppContext } from "../../context";



/**Flexbox-grid-sass-and-animations app version 32 -
 * 'UIWhitespaceAndAlignmentApp' - Features:
 * 
 *      --> Testing that i am receving data 
 *          from context.
 * 
 * Note: By this version the apps imports are simplyfied
 * to use in App js for routing that is need it.
 */

const UIWhitespaceAndAlignmentApp = () => {

    const { UIWhitespaceAndAlignmentData } = useAppContext()

    console.log('the UIWhitespaceAndAlignmentData ==>', UIWhitespaceAndAlignmentData)

    return(
        <SectionWrapper>
            <ComplexTitle title={<h2>Challenge 1 - <span className='ui-white-space-and-alignment-app'>
            Applying White Space and Alignment Fundamentals:
            </span></h2>}/>


        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    .section{

    }

`
export default UIWhitespaceAndAlignmentApp;