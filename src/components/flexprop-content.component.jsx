import React from "react";
//import { FlexPropData } from "../data";

/**Flexbox-grid-sass-and-animations app version 7 -
 * 'flexprop-content.component' - Features:
 * 
 *      --> Building 'FlexPropContent' in order to
 *          display info about the prop directions.
 * 
 * Note: this component for next versions will be
 * become dynamic, the content can be mapped depending
 * on conditions on the state. 
 */

const FlexPropContent = ({ direction }) => {

    const { selection } = direction;

    console.log('this destructured ==>', selection)
    
             
             switch(selection){

                case undefined:
                    return <h3>select an option</h3>
                case 'row':
                    return( 
                        <>
                        <h3>is a 'row':</h3>
        <p>when the flex-direction is 
        'row' the main axis is going to be 'row', 
        this prop is the default -set as flex is set as row-</p>
                        </>
                    )
                case 'column':
                    return (
                        <>
                        <h3>is a 'column':</h3>
        <p>the items are going to be arranged vertical -the 
        main axis is vertical from top to bottom, from 1st element
        to the last-</p>
                        
                        </>
                    )
                case 'row-reverse':
                    return (
                        <>
                        <h3>is a 'row-reverse':</h3>
        <p>this is the reverse of the default value -the 
        default value is row- so the children will go to the
        oposite way -main axis will go reverse-</p>
                        
                        </>
                    )
                case 'column-reverse':
                        return (
                            <>
                            <h3>is a 'column-reverse':</h3>
        <p>the main axis is reverse so the values inside the
        container starts from the last to the first</p>
                            
                            </>
                        )
                 default:
                  throw new Error(`no matching "${direction.selection}" `) 
             }
}

export default FlexPropContent;