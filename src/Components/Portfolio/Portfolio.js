import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { PortfolioBox, PortfolioBoxImg, PortfolioBoxOverlay, PortfolioBoxSpan, PortfolioList, PortfolioListItem, PortfolioSection, PortfolioSpan, PortfolioTitle, active } from './PortfolioStyled'

const Porfolio = () => {

    const [ images, setImages ] = useState([])

    useEffect (() => {
        axios.get('https://next.json-generator.com/api/json/get/E1hM9r1Tt').then(res => {setImages(res.data.portfolio)})
    }, [])

    const imageItem = images.map((image, index) => {
        return (
            <PortfolioBox key={index}>
                <PortfolioBoxImg src={image.image}/>
                <PortfolioBoxOverlay>
                    <PortfolioBoxSpan>
                        Show Image
                    </PortfolioBoxSpan>
                </PortfolioBoxOverlay>
            </PortfolioBox>
        )
    })

    return (
        <PortfolioSection>
            <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioListItem style={active}>All</PortfolioListItem>
                <PortfolioListItem>HTML</PortfolioListItem>
                <PortfolioListItem>Photoshop</PortfolioListItem>
                <PortfolioListItem>Wordpress</PortfolioListItem>
                <PortfolioListItem>Mobile</PortfolioListItem>
            </PortfolioList>

            <div className="box">
                {imageItem}
            </div>
            
        </PortfolioSection>
    )
}

export default Porfolio