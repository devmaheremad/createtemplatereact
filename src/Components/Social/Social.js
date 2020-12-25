import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { SocialPart, SocialSection, SocialPartIcon, SocialPartP, SocialPartSpan1, SocialPartSpan2} from './SocialStyled'

const Social = () => {

    const [ social, setSocial ] = useState([])

    useEffect (() => {
        axios.get('https://next.json-generator.com/api/json/get/E1hM9r1Tt').then(res => {setSocial(res.data.social)})
    }, [])

    const socialPart = social.map((socailItem, index) => {
        return (
            <SocialPart key={index} index={index}>
                <SocialPartIcon className={socailItem.icon}></SocialPartIcon>
                <SocialPartP>
                    <SocialPartSpan1>{socailItem.title}</SocialPartSpan1>
                    <SocialPartSpan2>{socailItem.body}</SocialPartSpan2>
                </SocialPartP>
            </SocialPart>
        )
    })

    return (
        <SocialSection>
            {socialPart}
        </SocialSection>
    )
}

export default Social