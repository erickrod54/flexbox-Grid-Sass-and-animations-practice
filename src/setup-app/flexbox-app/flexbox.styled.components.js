import styled from 'styled-components'

/**Flexbox-grid-sass-and-animations app version 1 -
 * flexbox.styled.components - Features:
 * 
 *      -->Building 'FlexBoxWrapper' Style
 *        Compoment.
 * 
 * Note:This component has a css helper function to
 * toggle between flex and not flex, using a short-
 * circuit operator.
 */
export const FlexBoxWrapper = styled.div`
    ul {
        background-color: lightslategray;
        padding: 20px;
        display: ${({ toggleFlex }) => 
        toggleFlex || 'flex' };
    }

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