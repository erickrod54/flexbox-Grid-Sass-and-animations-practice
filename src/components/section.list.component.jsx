import React from "react";
import { sectiondata } from "../data";
import Section from "./section.component";

/**Flexbox-grid-sass-and-animations app version 4 -
 * flexbox-app - Features:
 * 
 *      -->Building 'SectionList' Component.
 * 
 *      --> Mapping 'sectiondata' on each 'Section' 
 *          Component using the unique 'id'
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
 */

const SectionList = () => {

    return(
        <>
            {sectiondata.map((section) => {
                return(
                    <Section 
                        key={section.id} 
                        {...section}/>
                )
            })}
        </>
    )
}

export default SectionList;