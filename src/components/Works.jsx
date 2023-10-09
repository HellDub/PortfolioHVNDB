import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div `
height:100vh;
scroll-snap-align: center;
`
const Container = styled.div `
height:100vh;
scroll-snap-align: center;
`
const Left = styled.div `
height:100vh;
scroll-snap-align: center;
`
const Right = styled.div `
height:100vh;
scroll-snap-align: center;
`
const List = styled.ul `
height:100vh;
scroll-snap-align: center;
`
const ListItem = styled.li`
height:100vh;
scroll-snap-align: center;
`

const Works = () => {
  return (
    <Section>Works</Section>
  )
}

export default Works