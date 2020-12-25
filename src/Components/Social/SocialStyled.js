import Styled from 'styled-components'

export const SocialSection = Styled.section `
    height: auto;
    overflow: hidden;
`

export const SocialPart = Styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.index == 0 ? "#3b5998" : props.index == 1 ? "#498cbf" : "#cc2127"};
    @media (max-width:991px) {
        width: 100%;
        float: none;
    };
`

export const SocialPartIcon = Styled.i `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 7%;
`

export const SocialPartP = Styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left;
`

export const SocialPartSpan1 = Styled.span `
    display: block;
    margin-bottom: 8px;
`

export const SocialPartSpan2 = Styled.span `
    font-weight: normal;
`