import { faCloud, faCloudMeatball, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
    dog,
    moose,
    owl,
    sheep,
    bird,
    tiger,
    mrcat,
    mrgiraffe,
    mrsmallwolf, 
    duck
} from './assets/assets.index'

/**Flexbox-grid-sass-and-animations app version 62.01 -
 * data js - Features:
 *
 *  
 *     --> Adding 'gridGapData' 
 *      
 * Note: this data is going to be passed to build 
 * uiColorApp.
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
        desc:'the 8 fundamentals for web design',
        category:'web design fundamentals',
        url:'/apps/web-design-fundamentals-app'
     },
     {
        id:15,
        name:'responsive web design fundamentals',
        desc:'work in progress',
        category:'responsive web design fundamentals',
        url:'/apps/web-responsive-design-fundamentals-app'
     },
     {
        id:16,
        name:'box sizing discussion',
        desc:'work in progress',
        category:'responsive web design fundamentals',
        url:'/apps/box-sizing'
     },
     {
        id:17,
        name:'grid layout',
        desc:'work in progress',
        category:'grid properties',
        url:'/apps/grid-layout'
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
       desc:'padding and margin key role in ui white space fundamentals',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-white-space'
    },
    {
       id:3,
       name:'ui alignment fundamentals',
       desc:'aligment using white space to create order in design',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-alignment'
    },
    {
        id:4,
        name:'UI Whitespace and Alignment combined',
        desc:'two fundamentals combined to create armony design',
        category:'web design properties',
        url:'/apps/web-design-fundamentals-app/ui-Whitespace-and-alignment-combined'
     },
    {
       id:5,
       name:'ui contrast and scale fundamentals',
       desc:'ui color contrast, and scaling web elements and font sizes',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-contrast-and-scale'
    },
    {
       id:6,
       name:'ui typography fundamentals',
       desc:'the importance of good typography in design',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-typography'
    },
    {
       id:7,
       name:'ui color web design fundamentals',
       desc:'color selection for ui color',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-color'
    },
    {
       id:8,
       name:'ui web design fundamentals challenge (first challenge)',
       desc:'applying web fundamentals to a design',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-web-fundamental-challenge-2'
    },
    {
       id:9,
       name:'ui Visual Hierarchy Design Fundamental',
       desc:'how to apply fundamentals in a design',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-visual-hierarchy-design'
    },
    {
       id:10,
       name:'ui design challenge (final challenge)',
       desc:'applying web fundamentals to a design',
       category:'web design properties',
       url:'/apps/web-design-fundamentals-app/ui-design-challenge'
    }
] 

export const appWebResponsiveData = [
    {
        id:1,
        name:'web responsive design fundamentals',
        url:'/apps/web-responsive-design-fundamentals-app'  
      },
       {
         id:2,
         name:'units and props for responsiveness',
         desc:'work in progress',
         category:'web responsive design',
         url:'/apps/web-responsive-design-fundamentals-app/units-and-props'
      },
      {
         id:3,
         name:'view port units',
         desc:'work in progress',
         category:'web responsive design',
         url:'/apps/web-responsive-design-fundamentals-app/view-port-units'
      },
      {
        id:4,
        name:'media queries',
        desc:'work in progress',
        category:'web responsive design',
        url:'/apps/web-responsive-design-fundamentals-app/media-queries'
     },
    {
        id:5,
        name:'weather ui app',
        desc:'work in progress',
        category:'web responsive design',
        url:'/apps/web-responsive-design-fundamentals-app/weather-ui-app'
     },
     {
         id:6,
         name:'viewport units use cases',
         desc:'work in progress',
         category:'web responsive design',
         url:'/apps/web-responsive-design-fundamentals-app/viewport-units-cases'
      },
]

export const uiFormData = [
    {
        id:1,
        title:'contact us',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        msginput1:'your name',
        msginput2:'write your messsage',
        textlink:'send message',
        rows:'15'
    }
]

export const uiColorData = [
    {
        id:1,
        title:'some very important title',
        text:'some text that relates to the above very important topic is supposed to appear here',
        textlink:'some link'
    }
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
        date: new Date(2016, 9, 4),
        headline:'dog',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:2,
        image:moose,
        date: new Date(2018, 10, 3),
        headline:'moose',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:3,
        image:owl,
        date: new Date(2022, 10, 4),
        headline:'owl',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]

export const uiContrastAndScaleData = [
    {
        id:1,
        image:sheep,
        date: new Date(2021,11, 4),
        headline:'sheep',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:2,
        image:bird,
        date: new Date(2021, 11, 3),
        headline:'bird',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:3,
        image:tiger,
        date: new Date(2021, 11, 4),
        headline:'tiger',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]

export const uiTypographyData = [
    {
        id:1,
        heading:'some heading',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id:2,
        image:mrcat,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        headline:'Mr cat'
    },
    {
        id:3,
        image:mrgiraffe,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        headline:'Mr giraffe'
    },
    {
        id:4,
        image:mrsmallwolf,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        headline:'Mr small wolf'
    }
]

export const viewPortData = [
    {
        id:1,
        image:mrcat,
    },
    {
        id:2,
        image:duck,
    }
]

export const cssGridlayoutData = [
      {
        id:1,
        name:'grid layout',
        category:'grid properties',
        url:'/apps/grid-layout'  
      },
      {
        id:2,
        name:'grid introduction',
        category:'container properties',
        url:'/apps/grid-layout/test-grid-app'  
      },
     {
       id:3,
       name:'repat function and grid units',
       category:'container properties',
       url:'/apps/grid-layout/repeat-and-grid-units'  
     },
     {
        id:4,
        name:'grid items position',
        category:'item properties', 
        url:'/apps/grid-layout/grid-items-position'  
      },
      {
        id:4,
        name:'grid template area property',
        category:'container properties',
        url:'/apps/grid-layout/grid-template-area-property'  
      },
      {
        id:5,
        name:'justify, align, and place items properties',
        category:'container properties',
        url:'/apps/grid-layout/grid-justify-align-place-items-properties' 
      },
      {
        id:6,
        name:'grid auto rows flow and columns values',
        category:'container properties',
        url:'/apps/grid-layout/grid-auto-rows-flow-and-columns-values'  
      },
      {
        id:7,
        name:'grid item properties',
        category:'item properties',
        url:'/apps/grid-layout/gird-item-properties'  
      },
      {
        id:8,
        name:'grid max min content function values',
        category:'item properties',
        url:'/apps/grid-layout/grid-max-min-content-function-values'  
      },
      {
        id:9,
        name:'grid auto fill and fit values',
        category:'container properties',
        url:'/apps/grid-layout/grid-auto-fill-fit-values'  
      }
      /***   
      {
        id:3,
        name:'web responsive design fundamentals',
        category:'item properties',
        url:'/apps/web-responsive-design-fundamentals-app'  
      },
      {
        id:4,
        name:'web responsive design fundamentals',
        category:'item properties',
        url:'/apps/web-responsive-design-fundamentals-app'  
      },
       */
]

export const gridIntroData = [
    {
      id:1,
      name:'item-1'
    },
    {
      id:2,
      name:'item-2'
    },
    {
      id:3,
      name:'item-3'
    },
    {
      id:4,
      name:'item-4'
    },
    {
      id:5,
      name:'item-5'
    },
    {
      id:6,
      name:'item-6'
    },
    {
      id:7,
      name:'item-7'
    },
    {
      id:8,
      name:'item-8'
    },
    {
      id:9,
      name:'item-9'
    },
    {
      id:10,
      name:'item-10'
    }
]

export const cloud = <FontAwesomeIcon icon={faCloud}/>
export const sun = <FontAwesomeIcon icon={faSun}/>
export const cloudsun = <FontAwesomeIcon icon={faCloudSun}/>
export const wind = <FontAwesomeIcon icon={faWind}/>
export const sunrain = <FontAwesomeIcon icon={faCloudSunRain}/>
export const showersheavy = <FontAwesomeIcon icon={faCloudShowersHeavy}/>
export const cloudmeatball = <FontAwesomeIcon icon={faCloudMeatball}/>

export const weatherAppIcons = [
    {
        id:1,
        day:'friday',
        icon:cloud,
        temperature1:'14',
        temperature2:'10'
    },
    {
        id:2,
        day:'tuesday',
        icon:sun,
        temperature1:'20',
        temperature2:'16'
    },
    {
        id:3,
        day:'monday',
        icon:cloudsun,
        temperature1:'20',
        temperature2:'16'
    },
    {
        id:4,
        day:'wednesday',
        icon:wind,
        temperature1:'20',
        temperature2:'16'
    },
    {
        id:5,
        day:'thursday',
        icon:sunrain,
        temperature1:'18',
        temperature2:'16'
    },
    {
        id:6,
        day:'saturday',
        icon:showersheavy,
        temperature1:'14',
        temperature2:'10'
    },
    {
        id:7,
        day:'sunday',
        icon:cloudmeatball,
        temperature1:'23',
        temperature2:'18'
    },
    {
        id:8,
        precipitation:'10%',
        humidity:'5%',
        wind:'4 kmpm NW',
        date: new Date(2022, 3, 30),
    }
]

/**Data for grid intro App */

/**data for grid column gap, grid row gap */
export const oldGridSyntaxArray = [
    {
        id:1,
        value:'none'
    },
    {
       id:2,
       value:'10px'
    },
    {
       id:3,
       value:'1.5rem'
    },
    {
       id:4,
       value:'7vw'
    },
    {
       id:5,
       value:'10%'
    },
    {
       id:6,
       value:'5%'
    }
]

export const newGridSyntaxArray = [
    {
        id:1,
        value:'none'
    },
    {
       id:2,
       value:'10px'
    },
    {
       id:3,
       value:'1.5rem'
    },
    {
       id:4,
       value:'7vw'
    },
    {
       id:5,
       value:'10%'
    },
    {
       id:6,
       value:'5%'
    }
]

/**Data for old 'grid-row-gap' and for new row-gap'  */
    
    /**the difference is than one use the word 'grid' and the new 
     * doesn't but they have the same result*/
    
     

    /**data for 'oldGridrowSyntaxArray'*/
    export const oldGridrowSyntaxArray = [
        {
            id:1,
            value:'none'
        },
        {
           id:2,
           value:'10px'
        },
        {
           id:3,
           value:'1.5rem'
        },
        {
           id:4,
           value:'7vw'
        },
        {
           id:5,
           value:'10%'
        },
        {
           id:6,
           value:'5%'
        }
    ]



    /**data for 'newGridrowSyntaxArray'*/
    export const newGridrowSyntaxArray = [
        {
            id:1,
            value:'none'
        },
        {
           id:2,
           value:'10px'
        },
        {
           id:3,
           value:'1.5rem'
        },
        {
           id:4,
           value:'7vw'
        },
        {
           id:5,
           value:'10%'
        },
        {
           id:6,
           value:'5%'
        }
    ]


 
/** RepeatAndFrUnit data*/

export const RepeatFColumnsD = [
    {
      id:1,
      value:'none'   
    },
    {
      id:2,
      value:'150px 150px 150px 150px'   
    },
    {
      id:3,
      value:'repeat(4, 150px)'   
    },
    {
      id:4,
      value:'1fr 2fr 2fr 1fr'   
    },
    {
      id:5,
      value:'repeat(3, 150px) 1fr'   
    },
    {
        id:6,
        value:'repeat(3, 150px) 0.5fr'   
    },
]

export const RepeatFRowsD = [
    {
      id:1,
      value:'none'   
    },
    {
        id:2,
        value:'150px 150px 150px'   
      },
      {
        id:3,
        value:'repeat(3, 150px)'   
      },
      {
        id:3,
        value:'repeat(2, 100px) 0.5fr'   
      },
]


export const FlexJustifyData = [
    {
      id:1,
      value:"none"      
    },
    {
      id:2,
      value:'flex-start'      
    },
    {
      id:3,
      value:'flex-end'      
    },
    {
      id:4,
      value:'center'      
    },
    {
      id:5,
      value:'space-between'      
    },
    {
      id:6,
      value:'space-around'      
    },
    {
      id:7,
      value:'space-evenly'      
    },
]

export const FlexAlignContentData = [
    {
      id:1,
      value:"none"      
    },
    {
      id:2,
      value:'stretch'      
    },
    {
      id:3,
      value:'flex-start'      
    },
    {
      id:4,
      value:'flex-end'      
    },
    {
      id:5,
      value:'center'      
    },
    {
      id:6,
      value:'space-between'      
    },
    {
      id:7,
      value:'space-around'      
    },
    {
      id:8,
      value:'space-evenly'      
    }
]

/**flex-aling items app data */

export const FlexAlignItemsArray = [
    {
      id:1,
      value:"none"      
    },
    {
      id:2,
      value:'stretch'      
    },
    {
      id:3,
      value:'flex-start'      
    },
    {
      id:4,
      value:'flex-end'      
    },
    {
      id:5,
      value:'center'      
    },
    {
      id:6,
      value:'baseline'      
    },
]

export const FlexBaselineArray = [
  {
    id:1,
    value:"none"      
  },
  {
    id:2,
    value:'20px'      
  },
]

export const FlexBaselinechildArray = [
  {
    id:1,
    value:"none"      
  },
  {
    id:2,
    value:'5px'      
  },
]

export const alignSelfArray = [
  {
    id:1,
    value:''  
  },
  {
    id:2,
    value:'auto'  
  },
  {
    id:3,
    value:'flex-end'  
  },
  {
    id:4,
    value:'center'  
  },
  {
    id:5,
    value:'stretch'  
  },
  {
    id:6,
    value:'baseline'  
  }
  ,
]

export const baselineArray = [
  {
    id:1,
    value:''  
  },
  {
    id:2,
    value:'flex-start'  
  },
  {
    id:3,
    value:'baseline'  
  },
]

export const itemsArray = [
{
  id:1,
  value:1  
},
{
  id:2,
  value:2  
},
{
  id:3,
  value:3  
},
{
  id:4,
  value:4  
},
{
  id:5,
  value:5  
},
{
  id:6,
  value:6  
},
{
  id:7,
  value:7  
},
{
  id:8,
  value:8  
}
]

export const flexBasisItemArray = [
  {
    id:1,
    value:1  
  },
  {
    id:2,
    value:2  
  },
  {
    id:3,
    value:3  
  },
  {
    id:4,
    value:4  
  },
  {
    id:5,
    value:5  
  },
]

export const flexBasisArray = [
  {
    id:1,
    value:'none'  
  },
  {
    id:2,
    value:'auto'  
  },
  {
    id:3,
    value:'300px'  
  },
  {
    id:4,
    value:'25rem'  
  },
  {
    id:5,
    value:'45%'  
  },
]

export const FlexPropData = [
  {
    id:1,
    value:"none"      
  },
  {
    id:2,
    value:'row'      
  },
  {
    id:3,
    value:'column'      
  },
  {
    id:4,
    value:'row-reverse'      
  },
  {
    id:5,
    value:'column-reverse'      
  },
]

export const FlexWrapData = [
  {
    id:1,
    value:"none"      
  },
  {
    id:2,
    value:'nowrap'      
  },
  {
    id:3,
    value:'wrap'      
  },
  {
    id:4,
    value:'wrap-reverse'      
  },
]

export const flexGrowArray = [
  {
    id:1,
    value:1  
  },
  {
    id:2,
    value:2  
  },
  {
    id:3,
    value:3  
  },
  {
    id:4,
    value:4  
  },
]

export const flexItemGrowArray = [
  {
    id:1,
    value:1  
  },
  {
    id:2,
    value:2  
  },
  {
    id:3,
    value:3  
  },
  {
    id:4,
    value:4  
  },
]

export const flexFlowArray = [
  {
    id:1,
    value:'none'  
  },
  {
    id:2,
    value:'row wrap'  
  },
  {
    id:3,
    value:'column wrap'  
  },
  {
    id:4,
    value:'row-reverse wrap'  
  },
  {
    id:5,
    value:'column-reverse wrap'  
  },
  {
    id:6,
    value:'row nowrap'  
  },
  {
     id:7,
     value:'column nowrap'  
  },
  {
     id:8,
     value:'row-reverse nowrap'  
  },
  {
      id:9,
      value:'column-reverse nowrap'  
   },
]

export const gridAutoRowsData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'150px'
  },
  {
      id:3,
      value:'1fr'
  },
  {
      id:4,
      value:'20vw'
  },
  {
      id:5,
      value:'40%'
  },
]

export const gridAutoFlowData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'row'
  },
  {
      id:3,
      value:'column'
  },
]

export const gridAutoColumnsData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'300px'
  },
  {
      id:3,
      value:'1fr'
  },
  {
      id:4,
      value:'20vw'
  },
  {
      id:5,
      value:'40%'
  },

]

export const oldshorthandGridGapData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'10% 15%'
  },
  {
     id:3,
     value:'10px 25px'
  },
  {
     id:4,
     value:'15vw 15vh'
  },
  {
     id:5,
     value:'25px 10rem'
  },
  {
     id:6,
     value:'50px'
  }
]

export const newshorthandGridGapData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'10% 15%'
  },
  {
     id:3,
     value:'10px 25px'
  },
  {
     id:4,
     value:'15vw 15vh'
  },
  {
     id:5,
     value:'25px 10rem'
  },
  {
     id:6,
     value:'50px'
  }
]

export const itemSelection = [
  {
      id:1,
      value:1
  },
  {
      id:2,
      value:2
  },
  {
      id:3,
      value:3
  },
  {
      id:4,
      value:4
  },
  {
      id:5,
      value:5
  },
  {
      id:6,
      value:6
  },
  {
      id:7,
      value:7
  },
  {
      id:8,
      value:8
  },
]

export const gridPlaceSelfData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'stretch'
  },
  {
      id:3,
      value:'start'
  },
  {
      id:4,
      value:'end'
  },
  {
      id:5,
      value:'start center'
  },
  {
      id:6,
      value:'center start'
  },
  {
      id:7,
      value:'center end'
  },
  {
      id:8,
      value:'end start'
  },
  {
      id:9,
      value:'end center'
  },

]

export const gridJustifySelfData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'stretch'
  },
  {
      id:3,
      value:'start'
  },
  {
      id:4,
      value:'end'
  },
  {
      id:5,
      value:'center'
  },

]

export const gridAlignSelfData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'stretch'
  },
  {
      id:3,
      value:'start'
  },
  {
      id:4,
      value:'end'
  },
  {
      id:5,
      value:'center'
  },

]

export const itemDatarows = [
  {
      id:1,
      value:'1'
  },
  {
      id:2,
      value:'2'
  },
  {
     id:3,
     value:'3'
  },
  {
      id:4,
      value:'4'
   },
   {
      id:5,
      value:'-1'
  },
]


export const itemDatacolumns = [
  {
      id:1,
      value:'1'
  },
  {
      id:2,
      value:'2'
  },
  {
     id:3,
     value:'3'
  },
  {
     id:4,
     value:'4'
  },
  {
      id:5,
      value:'5'
   },
   {
      id:6,
      value:'-1'
  },
]

export const gridJustifyContentData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'stretch'
  },
  {
     id:3,
     value:'center'
  },
  {
      id:4,
      value:'flex-end'
   },
   {
      id:5,
      value:'space-around'
  },
   {
      id:6,
      value:'space-between'
  },
  {
      id:7,
      value:'space-evenly'
  },
]

export const gridGapData = [
  {
      id:1,
      value:'none'
  },
  {
      id:2,
      value:'15px'
  },
]