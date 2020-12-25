import Styled from 'styled-components'

export const PortfolioSection = Styled.section `
    background: #f8f8f8;
    padding-top: 20px;
    overflow: hidden;
`

export const PortfolioTitle = Styled.h2 `
    text-align: center;
    font-size: 35px;
`

export const PortfolioSpan = Styled.span `
    font-weight: normal;
`

export const PortfolioList = Styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0;
    cursor:pointer;
`

export const PortfolioListItem = Styled.ul `
    display: inline-block;
    width: 100px;
    padding: 10px;
    &:hover {
        background: #eb5424;
        color: #fff;
    };
    @media (max-width:575px) {
        display: block;
        margin: auto;
    }
`

export const active = {
    background: '#eb5424',
    color: '#fff'
}

export const PortfolioBox = Styled.div `
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > p {
        opacity: 1
    }
    @media (max-width:575px) {
        display: block;
        margin: auto;
        width: 100%;
    }
    @media (min-width:576px) and (max-width: 768px) {
    width: 50%;
}
`

export const PortfolioBoxImg = Styled.img `
    width: 100%;
`

export const PortfolioBoxOverlay = Styled.p `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235, 84, 36, 0.5);
    font-size: 15px;
    opacity: 0;
    margin: 0;
    transition: all 0.2s ease-in-out;
`

export const PortfolioBoxSpan = Styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    background: #F44336;
    font-weight: bolder;
    color: #fff;
    border: none;
`