import React from "react";
import { SectionWrapper } from "../setup-app/flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 7 -
 * 'Section' Component - Features:
 * 
 *      -->Changing imports for 'SectionWrapper'.
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
 * 
 * 'title' and 'text' props comes from 'sectiondata' 
 * previously handled by 'SectionList' Component
 */
const Section = ({ title, text}) => {
    
    return(
        <>
        <SectionWrapper>
        <div className='content'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        </SectionWrapper>
        </>
    )
}

export default Section;