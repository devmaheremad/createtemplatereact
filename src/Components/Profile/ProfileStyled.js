import Styled from 'styled-components'

export const ProfileSkillsSection = Styled.section `
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSection = Styled.div `
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none
    }
    @media (max-width:768px) {
    margin-bottom: 20px
    }
`

export const ProfileSectionTitle = Styled.h2 `
    font-size: 40px;
    margin-bottom: 20px;
`

export const ProfileSectionTitleSpan = Styled.span `
    font-weight: normal;
`

export const ProfileList = Styled.ul `
    list-style: none;
`

export const ProfileListItem = Styled.li `
    margin-bottom: 8px;
`

export const ProfileListItemSpan = Styled.span `
    display: inline-block;
    width: 100px;
    font-weight: bold;
`

export const ProfileListItemSpanWeb = Styled.span `
    font-weight: normal;
    color: #eb5424;
`

export const SkillsSection = Styled.div `
    width: 50%;
    float: left;
    @media (max-width:768px) {
        width: 100%;
        float: none
    }
`

export const SkillsSectionTitle = Styled.h2 `
    font-size: 40px;
    margin-bottom: 20px;
`

export const SkillsSectionTitleSpan = Styled.span `
    font-weight: normal;
`

export const SkillsDesc = Styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`

export const SkillsBar = Styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
`

export const SkillsBarTitle = Styled.span `
    float: left;
`

export const SkillsBarPerc = Styled.span `
    float: right;
    margin-right: 100px;
`

export const SkillsBarParent = Styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`

export const SkillsBarParentSpanSp = Styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.index == 0 ? "100%" : props.index == 1 ? "99%" : "90%" }
`