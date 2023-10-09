import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar'


const Section = styled.div `

height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
flex-direction: column;
justify-content:space-between;

`

const Container = styled.div `
width:1300px;
height: 140vh;
scroll-snap-align: center;
display: flex;
justify-content: space-between;
`
const Job = styled.img`
height: 28px;
color:#6EA4E3;

`

const Left = styled.div `
flex:2;
display: flex;
flex-direction: column;
justify-content: center;

`
const Title = styled.h1 `
font-size:65px;
margin:0;
padding:0;



`
const Doings = styled.div `
display: flex;
align-items: center;
gap:10px;
color:#6EA4E3;
margin:0;
padding:0;



`
const Subtitle = styled.h2 `


`

const Desc = styled.p `
font-size:24px;
color:lightgray;

`
const Button = styled.button `
width: 140px;
padding: 10px;
background-color: #E5004C;
color: #FFFFFF;
border-radius:10px;
cursor: pointer;
border:none;
font-family: 'Montserrat';
font-weight:600;

`

const Img = styled.img `
width: 500px;
height: auto;
object-fit:contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin:auto;
animation: animate 2s infinite ease alternate ;
@keyframes animate {
  to{
    transform: translateY(60px);
  }

}


`
const Right = styled.div `
flex:3;
position: relative;

`

const Hero = () => {
  return (
    <Section>
       <Navbar/>
       <Container>
        <Left>
          <Title>
            Creativity , Insight , Knowledge
          </Title>
          <Doings>
              <Job alt='job_icon' src='./images/Work.svg' />
              <Subtitle>What do i do?</Subtitle>
          </Doings>
          <Desc>I create insightful UI/UX Designs, i make websites and i have a large skillset.</Desc>
          <Button>Find out more</Button>
        </Left>
        <Right>
            <Img alt='HeroLogo' src='./images/persona.svg' />
        </Right>
       </Container>
    </Section>
  )
}

export default Hero