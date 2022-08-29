/**Flexbox-grid-sass-and-animations app version 11 -
 * data js - Features:
 * 
 *      --> Building 'flowData' to manage the FlexFlow app data
 *          and displaying it in the 'content' component.
 * 
 *      --> Building 'flexPropData' to manage the FlexProp app data
 *          and displaying it in the 'content' component.
 * 
 *      --> Building 'flexWrapData' to manage the FlexWrap app data
 *          and displaying it in the 'content' component.
 * 
 * Note: So far by this version i build the data for this three last
 * apps.
 */

export const sectiondata = [
    {
       id: 'child-1',
       title:'Section 1',
       text: 'Lorem ipsum dolor sit  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'     
    },
    {
       id: 'child-2',
       title:'Section 2',
       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    {
        id: 'child-3',
        title:'Section 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

export const flowData = [
    {
        id:"row wrap",
        text:'combines the row prop with wrap, so makes responsive the row affectting the width'
    },
    {
        id:"column wrap",
        text:'combines the column prop with wrap so makes it responsive affecting the height'
    },
    {
        id:"row-reverse wrap",
        text:'combines the row-reverse prop with wrap make in it responsive'
    },
    {
        id:"column-reverse wrap",
        text:'combines the column reverse with wrap so it makes it responsive'
    },
    {
        id:"row nowrap",
        text:'combines the row prop with nowrap behavior'
    },
    {
        id:"column nowrap",
        text:'combines the column prop with nowrap behavior'
    },
    {
        id:"row-reverse nowrap",
        text:'combines the row-reverse prop with nowrap behavior'
    },
    {
        id:"column-reverse nowrap",
        text:'combines the column prop with nowrap behavior'
    }
]

export const flexPropData = [
    {
      id:'row',
      text:'when the flex-direction is \'row\' the main axis is going to be \'row\', this prop is the default -set as flex is set as row-'  
    },
    {
       id:'column',
       text:'the items are going to be arranged vertical -the main axis is vertical from top to bottom, from 1st element to the last-'
    },
    {
       id:'row-reverse',
       text:'this is the reverse of the default value -the default value is row- so the children will go to the oposite way -main axis will go reverse-'
    },
    {
       id:'column-reverse',
       text:'the main axis is reverse so the values inside the container starts from the last to the first'
    },
]

export const flexWrapData = [
    {
        id:'nowrap',
        text:'when i set flex-wrap  is \'nowrap\' -the first flex-wrap property-i can notice and better when are several elements -this case 12 elements child of the parent container, the elements  look  without resposiveness so in small screen, and i can inspect generates a scroll in order to be able to watch all the conatiner children  -, ( even if i don\'t set it \'nowrap\' is the default value )'
    },
    {
        id:'wrap',
        text:'when flex-wrap is \'wrap\' -this is the second flex-wrap property- i can notice how responsiveness is applied and the flex container height  will get increase as the children elements are wrapped (height increase + children wrap) so this creates a responsive behavior and responsiveness is a must to -always before start developing an application think about resposiveness and how the app at the end will look like-'
    },
    {
        id:'wrap-reverse',
        text:'when flex-wrap is \'wrap\' -this is the third  flex-wrap property- i can notice how responsiveness is applied the reverse way to a wrap and the flex container height  will get increase as the children elements are wrapped  (height increase + children wrap) so this creates a responsive behavior and the difference can be notice when the children get reversed ( last element the first and first element the last )'
    },
]







