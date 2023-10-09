import React from 'react'
import { styled } from 'styled-components'


const Section = styled.div `
display: flex;
justify-content:center;


`
const Container = styled.div `
width:1350px;
display: flex;
justify-content:space-between;
align-items:center;
padding:10px 0px;
`
const Links = styled.div `
display: flex;
align-items:center;
gap:50px;


`
const Logo = styled.img`
height: 50px;

`

const List = styled.ul `
display: flex;
gap: 20px;
list-style:none;
`
const ListItem = styled.li `
cursor: pointer;

`
const Button = styled.button `
width: 100px;
padding: 10px;
background-color: #E5004C;
color: #FFFFFF;
border-radius:10px;
cursor: pointer;
border:none;
font-family: 'Montserrat';
font-weight:600;
`
const Icon = styled.img `
width: 32px;
cursor: pointer;
`
const Icons = styled.div `
display: flex;
align-items:center;
gap:10px;
`




const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo alt="heavendub_logo" src="/images/Logo.svg" />
             <List>
              <ListItem >
              Home
              </ListItem>
              <ListItem>
                About Me
              </ListItem>
              <ListItem>
                My Works
              </ListItem>
              <ListItem>
                Contact
              </ListItem>
             </List>
            </Links>
            <Icons>
              <Icon alt="search_icon"  src='/images/search.svg'/>
              <Button>Hire Me</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar