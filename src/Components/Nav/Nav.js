import React from 'react'
import {Link} from 'react-router-dom'
import { Logo, NavSection, LogoText, UlList, ListItem, Anchor, anchor } from './NavStyled.js'

const Nav = () => {
    return (
        <NavSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText><Link className='anchorLogo' to='/'>Ultra Profile</Link></LogoText>
                </Logo>

                <UlList>
                    <ListItem><Link className='anchor' to='/'>Home</Link></ListItem>
                    <ListItem><Anchor>Work</Anchor></ListItem>
                    <ListItem><Anchor>Portfolio</Anchor></ListItem>
                    <ListItem><Anchor>Resume</Anchor></ListItem>
                    <ListItem><Anchor>About</Anchor></ListItem>
                    <ListItem><Link className='anchor' to='/contact'>Contact</Link></ListItem>
                </UlList>
                
            </div>
            
        </NavSection>
    )
}

export default Nav