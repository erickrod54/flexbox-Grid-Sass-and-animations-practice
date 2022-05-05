import styled from 'styled-components'

/**Flexbox-grid-sass-and-animations app version 2 -
 * flexbox.styled.components - Features:
 * 
 *      -->Building 'Wrapper' Style
 *        Compoment.
 * 
 * Note:This component will be use to wrap complex-title
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

export const Wrapper = styled.div`
    h1{
        text-transform: capitalize;
        text-align: start;
    }
    .flexbox-span{
        color: blueviolet;
    }
`