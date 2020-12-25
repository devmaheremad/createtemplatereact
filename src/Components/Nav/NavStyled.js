import Styled from 'styled-components'

export const NavSection = Styled.section `
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

export const Logo = Styled.div `
    width: 50%;
    float: left;
    media (max-width : 991px) {
        width: 100%;
        float: none;
    }
`

export const LogoText = Styled.h2 `
    font-size: 30px;
    font-weight: bold
`

export const UlList = Styled.ul `
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    media (max-width : 991px) {
        width: 100 % ;
        float: none;
        margin - top: 20 px;
        display: none
    }
`

export const ListItem = Styled.li `
    display: inline-block;
    media (max-width : 991px) {
        display: block;
        text - align: center;
    }
`

export const Anchor = Styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: #eb5424
    }
`