import { dog, moose, owl } from './assets/assets.index'

/**Flexbox-grid-sass-and-animations app version 33 -
 * data js - Features:
 * 
 *      --> Adding assets > images to  
 *         'UIWhitespaceAndAlignmentData'.
 * 
 * Note: 'Order Property' (this is the first items property)
 * is properties applied directly to items inside of 
 * the containers.
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

export const JustifyFlexData = [
    {
        id:'flex-start',
        text:'justify the content move collectivelly ( this prop will depend on the main axis - flex-direction prop, and the responsiveness on wrap or flow props ), the flex-start does the container items to move to the start of the main axis to the top left of the screen'
    },
    {
        id:'flex-end',
        text:'justify the content move collectivelly ( this prop will depend on the main axis - flex-direction prop, and the responsiveness on wrap or flow props ), the flex-end does the container items to move to the end of the main axis to the top right of the screen'
    },
    {
        id:'center',
        text:'justify the content move collectivelly ( this prop will depend on the main axis - flex-direction prop, and the responsiveness on wrap or flow props ), the \'center\' does the container items to move to the center of the main axis to the center of the screen'
    },
    {
        id:'space-between',
        text:'justify the content move collectivelly ( this prop will depend on the main axis - flex-direction prop, and the responsiveness on wrap or flow props ), the \'space-between\' does create a space among the container elements on the main axis, this spaces are going to be the same ( when the responsiveness plays, this props maintain this space created to make responsive always the items )'
    },
    {
        id:'space-around',
        text:'justify the content move collectivelly ( this prop will depend on the main axis - flex-direction prop, and the responsiveness on wrap or flow props ), the \'space-around\' does create a space among the container elements on the main axis, this spaces are going to be the same for the items in between, but for the items in edge like \'first child\' and \'last child\' will be different to the items in between( when the responsiveness plays, this props maintain this space created to make responsive always the items )'
    },
    {
        id:'space-evenly',
        text:'justify the content move collectivelly ( this prop will depend on the main axis - flex-direction prop, and the responsiveness on wrap or flow props ), the \'space-evenly\' does create a the same space among the container elements on the main axis, the space from the edge replicates on the elements in between, but is more space than \'space-between\' prop'
    },
]

export const alignItemsData = [
    {
        id:'stretch',
        text:'align-items prop move collectivelly ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'stretch\' does the container elements heigth stretch to the maximun height of the container for this example the container has \'30rem\' height, is better to use relative units cause is a heigth and margin predefined, so if is fixed in \'px\' units can occur style issues'
    },
    {
        id:'flex-start',
        text:'align-items prop move collectivelly ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'flex-start\' does move the items to the top of the container'
    },
    {
        id:'flex-end',
        text:'align-items prop move collectivelly ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'flex-end\' does move the items to the bottom of the container'
    },
    {
        id:'center',
        text:'align-items prop move collectivelly ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'center\' does move the items to the center of the container'
    },
    {
        id:'baseline',
        text:'align-items prop move collectivelly ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'baseline\' to visualize how this prop work i have to applied to one of the children and apply a \'padding\' (can be top or bottom or both depending if the case -to applied the padding on the child you can use pseudo class selector \'check the wrapper code\'-) and what it does is adjust the child container to the text or element contained'
    },
]

export const alignContentData = [
    /**comments for the component */
    /**fixing - align-item for align-content */
    {
        id:'stretch (default property)',
        text:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'stretch\' does the container elements heigth stretch to the maximun height of the container for this example the container has \'600px\' height, is better to use relative units cause is a heigth and margin predefined, so if is fixed in \'px\' units can occur style issues'
    },
    {
        id:'flex-start',
        text:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'flex-start\' does move the items to the top of the container'
    },
    {
        id:'flex-end',
        text:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'flex-end\' does move the items to the bottom of the container'
    },
    {
        id:'center',
        text:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'center\' does move the items to the center of the container'
    },
    {
        id:'space-between ( same behavior as justify content prop )',
        text:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'center\' does move the items to the center of the container'
    },
    {
        id:'space-around ( same behavior as justify content prop )',
        text:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'baseline\' to visualize how this prop work i have to applied to one of the children and apply a \'padding\' (can be top or bottom or both depending if the case -to applied the padding on the child you can use pseudo class selector \'check the wrapper code\'-) and what it does is adjust the child container to the text or element contained'
    },
    {
        id:'space-evenly ( same behavior as justify content prop )',
        text:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group ( almost as justify does in the main axis, but this prop will depend exclusively on the cross axis -vertical- flex-direction prop, heigth and container elements margin\'s and the responsiveness on wrap or flow props ), align items \'baseline\' to visualize how this prop work i have to applied to one of the children and apply a \'padding\' (can be top or bottom or both depending if the case -to applied the padding on the child you can use pseudo class selector \'check the wrapper code\'-) and what it does is adjust the child container to the text or element contained'
    },
]

export const orderPropertyData = [
    {
        id:-1,
        text:'You changed child',
        text2:'to the position'
    },
    {
        id:0,
        text:'You changed child',
        text2:'to the position'
    },
    {
        id:1,
        text:'You changed child',
        text2:'to the position'
    }
]

export const flexGrowPropertyData = [
    {
        id:1,
        text:'You changed child',
    },
    {
        id:2,
        text:'You changed child',
    },
    {
        id:3,
        text:'You changed child',
    },
    {
        id:4,
        text:'You changed child',
    },
]

export const appsLinksData = [
    {
       id:1,
      name:'home',
      url:'/'  
    },
    {
       id:2,
       name:'flexbox app',
       desc:'This app explain concepts about flex or not flex',
       category:'container properties',
       url:'apps/flexbox-app'
    },
    {
       id:3,
       name:'flexbox manipulation',
       desc:'this app explain concepts about \'flex\', \'margin\' and \'border\' and their effects on the css',
       category:'container properties',
       url:'apps/flexbox-manipulation-app'
    },
    {
       id:4,
       name:'flex prop',
       desc:'flex direction and flex wrap properties and how they make responsiveness when they are applied',
       category:'container properties',
       url:'apps/flexbox-prop-app'
    },
    {
       id:5,
       name:'flex flow',
       desc:'Combining direction and wrap in a single line i can applied both making responsiness with less lines of code',
       category:'container properties',
       url:'apps/flexbox-flow-app'
    },
    {
        id:6,
        name:'flex justify content',
        desc:'justify the content move collectivelly ( this prop will depend on the main axis )',
        category:'container properties',
        url:'apps/flex-justify-content-app'
     },
     {
        id:7,
        name:'flex align items',
        desc:'align-items prop move collectivelly, almost as justify does in the main axis, but this prop will depend exclusively on the cross axis ',
        category:'container properties',
        url:'apps/flex-align-items-app'
     },
     {
        id:8,
        name:'flex align content',
        desc:'align-content prop move collectivelly, the difference with align items is that the behavior of items inside of a container is as a group',
        category:'container properties',
        url:'apps/flex-align-content-app'
     },
     {
        id:9,
        name:'order property',
        desc:'order property use css pseudo-elements to target a container item and give styles to it',
        category:'items properties',
        url:'apps/order-property-app'
     },
     {
        id:10,
        name:'flex grow property',
        desc:'flex grow property can manipulate the width size of an element selected and make it responsive at the same time',
        category:'items properties',
        url:'apps/flex-grow-property-app'
     },
     {
        id:11,
        name:'flex shrink property',
        desc:'the use case for this property is when you have a content inside the \'item\' that you want to maintain no matter screen reduce or aument',
        category:'items properties',
        url:'apps/flex-shrink-property-app'
     },
     {
        id:12,
        name:'flex basis property',
        desc:'once applied the \'item\' will adquire as much space as we have dedicated to it - is the size specify for the item -',
        category:'items properties',
        url:'apps/flex-basis-property-app'
     },
     {
        id:13,
        name:'flex align self property',
        desc:'this prop will manipulate the element targeted with \'auto\', \'flex-end\', \'center\', \'stretch\', \'baseline\' props',
        category:'items properties',
        url:'apps/flex-align-self-property-app'
     },
     {
        id:14,
        name:' web design fundamentals',
        desc:'work in progress',
        category:'web design fundamentals',
        url:'/apps/web-design-fundamentals-app'
     },

    
]

/**here i build 'AppWebFundamentalsData' */
export const appWebFundamentalsData = [
    {
      id:1,
      name:'web design fundamentals',
      url:'/apps/web-design-fundamentals-app'  
    },
    {
       id:2,
       name:'ui white space fundamentals',
       desc:'work in progress',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-white-space'
    },
    {
       id:3,
       name:'ui alignment fundamentals',
       desc:'work in progress',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-alignment'
    },
    {
        id:4,
        name:'UI Whitespace and Alignment combined',
        desc:'work in progress',
        category:'web design properties',
        url:'/apps/web-design-fundamentals-app/ui-Whitespace-and-alignment-combined'
     },
    {
       id:5,
       name:'ui contrast scale typography fundamentals',
       desc:'work in progress',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-contrast-scale-typography'
    },
   
]    

export const uiWhiteSpaceData = [
    {
        id:1,
        title:'footbal',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:2,
        title:'basketball',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id:3,
        title:'golf',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

export const uiAlignmentData = [
    {
        logo: 'some logo',
        heading:'some heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttontext:'sign up'
    }
]

export const UIWhitespaceAndAlignmentData = [
    {
        id:1,
        image:dog,
        date: 'some date 1',
        headline:'some headline',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:2,
        image:moose,
        date: 'some date 2',
        headline:'some headline',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:3,
        image:owl,
        date: 'some date 3',
        headline:'some headline',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]

