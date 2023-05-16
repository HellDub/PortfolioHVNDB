import React from 'react'
import { styled } from 'styled-components'



const Section = styled.div `
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content:center;

`

const Container = styled.div `
width:1300px;
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`
const Line = styled.img`
height: 28px;
color:#6EA4E3;

`

const Left = styled.div `
flex:1;


`
const Title = styled.h1 `
font-size:60px;
margin:0;
padding:0;



`
const Doings = styled.div `
display: flex;
align-items: center;
color:#6EA4E3;
font-weight: 500;
margin:0;
padding:0;


`
const Subtitle = styled.h2 `
padding:0;


`

const Desc = styled.p `
font-size:20px;
color:lightgray;
font-weight: 500;


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
const Right = styled.div `
flex:1;
display: flex;
flex-direction: column;
justify-content: center;
gap:2px;

`

const Me = () => {
  return (
    <Section>
      
       <Container>
        <Left>
       
        </Left>
        <Right>
        <Title>
          Shaping the ideas, Creating the styles.
          </Title>
          <Doings>
              <Line src='./images/Line.svg' />
              <Subtitle>Who am i?</Subtitle>
          </Doings>
          <Desc>The creative thinking your project needs.</Desc>
          <Button>Learn more</Button>
            
        </Right>
       </Container>
    </Section> 
  ) 
}

export default Me