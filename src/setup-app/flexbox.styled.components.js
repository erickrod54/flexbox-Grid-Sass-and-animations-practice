import styled from 'styled-components'

/**Flexbox-grid-sass-and-animations app version 21 -
 * flexbox.styled.components - Features:
 * 
 *       --> Building 'flex-shrink' dinamycly using
 *          'shrink', and 'shrinkItem' props.
 * 
 * Note:  By this version 'flex-shrink' is dynamic,
 * i can select the element and switch betwwen '1'
 * for activated flex-shrink and '0' for deactivate
 * 'flex-shrink'
 */

export const FlexBoxWrapper = styled.div`
    /**Flex container => parent */
    ul {
        background-color: lightslategray;
        padding: 20px;
        /**Flex container properties */
        display: ${({ toggleFlex }) => 
        toggleFlex || 'flex' };
         /**flex-wrap: wrap add responsiveness to the 
         * children element so they will look good in 
         small screens */
        flex-wrap: wrap;
        /**this props set everything to the center */
        justify-content: center;
    }
    /**Here i implement the 'inline-flex' */
    .ul-inline-flex {
        background-color: lightslategray;
        padding: 20px;
        /**Flex container properties */
        display: inline-flex;
        justify-content: center;
    }

    /**Flex Items => children */
    li{
        list-style: none;
        color: white;
        background-color: #20b2aa;
        padding: 10px;
        margin: 20px;
        width: 100px;
        font-weight: 700;
     
    }
    transition: all 0.5s ease-in-out; &:hover{
        box-shadow: 0 1px 1px #222;
    }
    
    h2{
        text-transform: capitalize;
        text-decoration: underline;
    }
`

/**Here i extended  'FlexBoxWrapper' to apply it to
 * the FlexboxPropApp - props for 
 * containers (parent element) */
export const FlexPropAppWrapper = styled(FlexBoxWrapper)`
    /**flex-direction is the first property - can be 'row',
    * 'column', 'row-reverse' and 'column-reverse' in
    * total 4 */
    ul{
        /** In this case a set dinamicly the 
        ** 'direction' by the 'selection' value */
        flex-direction:  ${({ direction }) =>  direction.selection };;
    }

`

/**Here i extend the Wrapper from 'FlexBoxWrapper'
 * to create 'FlexPropWrapStyle' to style the 
 * 'FlexPropWrap' app */
export const FlexPropWrapStyle = styled(FlexBoxWrapper)`
    /**flex-wrap is the second property - can be 'nowrap',
    * 'wrap', and 'wrap-reverse' in total 3 */
        ul {
            flex-wrap: ${({ wrap }) => wrap.selection };
        }


`
export const FlexboxFlowWrapper = styled(FlexBoxWrapper)`
    ul{
        flex-flow: ${({flow}) => flow.selection };
    }
`

export const InlineFlexWrapper = styled(FlexBoxWrapper)`

    .ul-inline-flex {
        background-color: lightslategray;
        padding: 20px;
        /**Flex container properties */
        display: inline-flex;
        justify-content: center;
    }
`

export const Wrapper = styled.div`

    /**here i apply specific styles for each app 
    'title' */
    .flexbox-span{
        color: blueviolet;
    }

    .flexbox-span-manipulation{
        color: orangered;
    }

    .flexbox-properties{
        color: magenta;
    }

    .justify-app{
        color: mediumspringgreen;
    }

    .align-items-app{
        color: blueviolet;

        p{
            color: black;
            text-transform: none;
            font-size: .75rem;
        }
    }

    .flex-align-content-app{
        color: darkgoldenrod;
    }

    .order-property-app{
        color: tomato;
    }

    
    .grow-property-app{
        color: firebrick;
    }
    
    .flex-shrink-app{
        color: mediumpurple;
    }

    /**here i apply general styles for apps 'titles' */
    .flexbox-span,
    .flexbox-span-manipulation,
    .flexbox-properties,
    .justify-app,
    .align-items-app,
    .flex-align-content-app,
    .order-property-app,
    .grow-property-app,
    .flex-shrink-app{
        text-transform: capitalize;
        text-align: start;
        font-size: 2rem;
        text-decoration: underline;
    }
    
`

export const SectionWrapper = styled.div`
    width: 20rem;
    background-color: lightslategray;
    padding: 1.7rem;
    margin: 1rem;
    color: white;

    h2{
        font-size: 1.2rem;
    }

    .content{
        background-color: #20b2aa;
        padding: 1.7rem;
    }
`

export const SectionListWrapper = styled.div`
 display: ${({ toggleFlex1 }) => 
        toggleFlex1 || 'flex' };
 /**flex-wrap: wrap add responsiveness to the children element
 ** so they will look good in small screens */
 flex-wrap: wrap;
`

export const JustifyContentAppWrapper = styled(FlexBoxWrapper)`
    ul{
        justify-content: ${({ justify }) => justify.selection };
    }
`

export const AlignItemsAppWrapper = styled(FlexBoxWrapper)`
   
    ul{
        display: flex;
        justify-content: flex-start;
        height: 32rem;
        align-items: ${({ align }) => align.selection};

    }

    li{
        margin: 20px;
        padding-top: ${({ padding }) => padding.selection};
        padding-bottom: ${({ padding }) => padding.selection};
    }

    li:first-child{
        padding: ${({childpadding}) => childpadding.selection};
    }
`

export const AlignContentAppWrapper = styled(FlexBoxWrapper)`

    .first-prop{
       color: darkorange;
    }

    .second-prop{
        color: indigo;
    }

    
    ul{
        display: flex;
        height: 600px;
        align-content: ${({ aligncontent }) => aligncontent.selection };
        flex-direction: ${({ direction }) => direction.selection};
    }
    `
   
   export const PerfectCenterWrapper = styled(FlexBoxWrapper)`
   
   /**these are the props to make a perfect center */
   /**'justify-content: center;' and 'align-items: center;' */

   ul{
       display: flex;
       /**to apreciate how 'perfect center' looks like, a good 'height'
       * is adviceable*/

       height: 600px;
       justify-content: center;
       align-items: center;
    }

   `
   
   export const OrderPropertyWrapper = styled(FlexBoxWrapper)`
       ul{
        background-color: lightslategray;
        padding: 20px;
        height: 300px;
        display: flex;
        align-items: flex-start;
       }   

       li{
        list-style: none;
        color: white;
        background-color: #20b2aa;
        margin:10px;
        padding:10px
       }
       
       li:nth-child(${({ item }) => item.selection}){
        order:${({ order }) => order.selection}
       }
   `

export const FlexGrowPropertyWrapper = styled(FlexBoxWrapper)`
      ul{
        background-color: lightslategray;
        padding: 20px;
        height: 300px;
        display: flex;
        align-items: flex-start;
       }   

       li{
        list-style: none;
        color: white;
        background-color: #20b2aa;
        margin:10px;
        padding:10px
       }
       
       /**the child that is applied to grow, will take all
       *the extra space on the container */
       li:first-child{
        flex-grow: 1;
       }
       
       /**if i apply grow in another child will share the
       *extra space with the one that is already grow */
       li:nth-child(${({ itemGrow }) => itemGrow.selection}){
        flex-grow: ${({ grow }) => grow.selection};
       }
`

export const FlexShrinkPropertyWrapper = styled(FlexBoxWrapper)`

ul{
        background-color: lightslategray;
        padding: 20px;
        height: 300px;
        display: flex;
        align-items: flex-start;
       }   

       li{
        list-style: none;
        color: white;
        background-color: #20b2aa;
        margin:10px;
        padding:10px
       }
       
       li:nth-child(${({ itemShrink }) => itemShrink.selection}){
        flex-shrink: ${({ shrink }) => shrink.selection};
       }
`
   
   
   