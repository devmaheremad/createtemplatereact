import React, { Component } from 'react'
import { Span, WorkIcon, WorkPart, WorkPartDesc, WorkPartLine, WorkPartTitle, WorkSection, WorkTitle } from './WorkStyled'
import axios from 'axios'

class Work extends Component {

    state = {
        works: []
    }

    componentDidMount() {
        axios.get('https://next.json-generator.com/api/json/get/E1hM9r1Tt').then(res => {this.setState({
            works: res.data.works
        })})
    }

    render() {

        const {works} = this.state
        const work = works.map((work, index) => {
            return (
                <WorkPart first={index + 1} key={index}>
                    <WorkIcon className={work.icon_name}></WorkIcon>
                    <WorkPartTitle>{work.title}</WorkPartTitle>
                    <WorkPartLine />
                    <WorkPartDesc>{work.body}</WorkPartDesc>
                </WorkPart>
            )
        })

        return (
            <WorkSection>
                <div className="container">
                    <WorkTitle><Span>My</Span> Work</WorkTitle>
                    {work}
                </div>
            </WorkSection>
        )
    }
}

export default Work