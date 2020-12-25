import React from 'react'
import { CreativeInfo, CreativeInfoDir, CreativeInfoSpan, CreativeInfoTitle, CreativeSection, CreativeInfoDesc, CreativeInfoDirLink } from './AboutStyled'

const About = () => {
    return (
        <CreativeSection>
            <div className="container">
                <CreativeInfo>
                    <CreativeInfoTitle><CreativeInfoSpan>This is</CreativeInfoSpan> Me</CreativeInfoTitle>
                    <CreativeInfoDir>Creative Director</CreativeInfoDir>
                    <CreativeInfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <CreativeInfoDirLink>explicabo</CreativeInfoDirLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </CreativeInfoDesc>
                    <CreativeInfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </CreativeInfoDesc>
                </CreativeInfo>
            </div>
        </CreativeSection>
    )
}

export default About