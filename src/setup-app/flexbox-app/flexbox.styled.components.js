import styled from 'styled-components'

/**Flexbox-grid-sass-and-animations app version 4 -
 * flexbox.styled.components - Features:
 * 
 *      -->Adding a '.flexbox-span-manipulation' 
 *         style class to set styles on Complex
 *         title.
 * 
 *      --> Building 'SectionWrapper' to set styles
 *          to the 'Section' Component.
 * 
 *      --> Building 'content' style class to set styles
 *          to the content of each single Section.
 * 
 * Note: In this version i'll start to do flex manipulation
 * of children elements, this case is made base on a section
 * list of elements.
 */

export const FlexBoxWrapper = styled.div`
    /**Flex container => parent */
    ul {
        background-color: lightslategray;
        padding: 20px;
        /**Flex container properties */
        display: ${({ toggleFlex }) => 
        toggleFlex || 'flex' };
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
`

export const Wrapper = styled.div`
    h2{
        text-transform: capitalize;
        text-align: start;
        font-size: 1.75rem;
    }
    .flexbox-span{
        color: blueviolet;
    }

    .flexbox-span-manipulation{
        color: orangered;
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