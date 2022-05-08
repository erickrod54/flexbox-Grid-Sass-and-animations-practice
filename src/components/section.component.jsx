import React from "react";
import { SectionWrapper } from "../setup-app/flexbox-app/flexbox.styled.components";

/**Flexbox-grid-sass-and-animations app version 4 -
 * 'Section' Component - Features:
 * 
 *      -->Building 'Section' Component.
 * 
 *      -->Destructuring 'title' and 'text' props
 *         to set the content of each 'Section'
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