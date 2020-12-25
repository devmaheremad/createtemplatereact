import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { SkillsDesc, ProfileList, ProfileListItem, ProfileListItemSpan, ProfileSection, ProfileSectionTitle, ProfileSectionTitleSpan, ProfileSkillsSection, SkillsSection, SkillsSectionTitle, SkillsBar, SkillsBarTitle, SkillsBarPerc, SkillsBarParent, SkillsBarParentSpanSp, SkillsSectionTitleSpan } from './ProfileStyled'

const Profile = () => {

    const [profile, setProfile] = useState([])
    const [skills, setSkills] = useState([])

    useEffect (() => {
        axios.get('https://next.json-generator.com/api/json/get/E1hM9r1Tt').then(res => {setProfile(res.data.profileskill.profile)})
        axios.get('https://next.json-generator.com/api/json/get/E1hM9r1Tt').then(res => {setSkills(res.data.profileskill.skills)})
    }, [])

    let profileListItem = profile.map((info, index) => {
        return (
            <ProfileListItem key={index}>
                <ProfileListItemSpan>{info.desc}</ProfileListItemSpan>
                {info.descAns}
            </ProfileListItem>
        )
    })

    let skillsBar = skills.map((bar, index) => {
        return (
            <SkillsBar key={index}>
                <SkillsBarTitle>{bar.bartitle}</SkillsBarTitle>
                <SkillsBarPerc>{bar.barperc}</SkillsBarPerc>
                <SkillsBarParent>
                    <SkillsBarParentSpanSp index={index}></SkillsBarParentSpanSp>
                </SkillsBarParent>
            </SkillsBar>
        )
    })

    return (

        <ProfileSkillsSection>
            <div className="container">

                <ProfileSection>

                    <ProfileSectionTitle>
                        <ProfileSectionTitleSpan>My </ProfileSectionTitleSpan>
                            Profile
                    </ProfileSectionTitle>
                    <ProfileList>
                        {profileListItem}
                    </ProfileList>
                </ProfileSection>

                <SkillsSection>
                    <SkillsSectionTitle>Some <SkillsSectionTitleSpan>Skills</SkillsSectionTitleSpan></SkillsSectionTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                    {skillsBar}

                </SkillsSection>
            </div>
        </ProfileSkillsSection>
    )
}

export default Profile