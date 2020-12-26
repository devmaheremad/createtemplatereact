import Styled from 'styled-components'

export const CreativeSection = Styled.section `
    height: 500px;
    background: url('https://i.ibb.co/mvGQxZm/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
        height: auto;
        padding: 2%;
    };
`

export const CreativeInfo = Styled.div `
    padding-top: 100px;
    width: 50%;
    float: right;
    @media(max-width: 991px) {
        width: 100% ;
        padding-top: 10px;
        float: none;
    };
`

export const CreativeInfoTitle = Styled.h2 `
    font-weight: bold;
    font-size: 50px;
    margin: 0;
`

export const CreativeInfoSpan = Styled.span `
    font-weight: normal;
`

export const CreativeInfoDir = Styled.h4 `
    margin-top: 0;
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media(max-width: 991 px) {
        font-size: 30px;
    }
`

export const CreativeInfoDesc = Styled.p `
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;
    @media (max-width:991px) {
        margin-bottom: 0;
    };
`

export const CreativeInfoDirLink = Styled.a `
    text-decoration: none;
`