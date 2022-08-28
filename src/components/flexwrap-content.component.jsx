import React from "react";

/**Flexbox-grid-sass-and-animations app version 7 -
 * 'flexbox.direction.preperty-app' - Features:
 * 
 *      --> Building 'FlexWrapContent' in order to
 *          display info about the prop directions.
 * 
 * Note: this component for next versions will be
 * become dynamic, the content can be mapped depending
 * on conditions on the state.
 */

const FlexWrapContent = ({ wrap }) => {

    const { selection } = wrap;

    //console.log('this destructured on wrap content ==>', selection)
    
             
             switch(selection){

                case undefined:
                    return <h3>select an option</h3>
                case 'nowrap':
                    return( 
                        <>
                        <h3>is a 'nowrap':</h3>
        <p>when i set flex-wrap  is 'nowrap' -the first 
         flex-wrap property-i can notice and better when 
         are several elements -this case 12 elements child
        of the parent container, the elements  look 
        without resposiveness so in small screen, and i 
        can inspect generates a scroll in order to be able to 
        watch all the conatiner children  -, ( even if i don't
        set it 'nowrap 'is the default value )</p>
                        </>
                    )
                case 'wrap':
                    return (
                        <>
                        <h3>is a 'wrap':</h3>
        <p>when flex-wrap is 'wrap' -this is the second 
            flex-wrap property- i can notice how responsiveness 
            is applied and the flex container height  will get
             increase as the children elements are wrapped 
             (height increase + children wrap) so this creates a 
             responsive behavior and responsiveness is a 
             must to -always before start developing an 
             application think about resposiveness and how the app at the end will look like-</p>
                        
                        </>
                    )
                case 'wrap-reverse':
                    return (
                        <>
                        <h3>is a 'wrap-reverse':</h3>
        <p>when flex-wrap is 'wrap' -this is the third 
            flex-wrap property- i can notice how responsiveness 
            is applied the reverse way to a wrap and the flex 
            container height  will get
             increase as the children elements are wrapped 
             (height increase + children wrap) so this creates a 
             responsive behavior and the difference can be notice
             when the children get reversed ( last element the 
             first and first element the last )</p>
                        
                        </>
                    ) 
                 default:
                  throw new Error(`no matching "${wrap.selection}" `) 
             }
}

export default FlexWrapContent;