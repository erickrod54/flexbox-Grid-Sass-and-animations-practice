import styled from 'styled-components'

/**Flexbox-grid-sass-and-animations app version 3 -
 * flexbox.styled.components - Features:
 * 
 *      -->Implementing 'justify-content' and 'flex' 
 *         together.
 * 
 *      -->Implementing 'inline-flex' and creating a
 *         class for '.ul-inline-flex' the second 
 *         children.
 * 
 * Note: display 'flex' is different to 'inline-block' 
 * because 'flex' give me more control over the items (as
 * is the case of applying 'justify-content' thanks to
 * flex i can control the 'children' with this prop)
 * 
 * The difference of the 'inline-flex' and 'display-flex'
 * is that 'inline-flex', diplay flex is for 'block level'
 * containers
 * 
 * 'justify-content' and 'inline-flex' are properties
 * that are activated when display 'flex' is set, 
 * otherwise using 'inline-block' these last don't have
 * effect 
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
`