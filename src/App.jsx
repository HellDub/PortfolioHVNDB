
import Me from './components/Me'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Works from './components/Works'
import  {styled}  from 'styled-components'


const Container = styled.div `
color: white;
height:100vh;
background-image: url("./images/background.jpg");
scroll-snap-type: y mandatory;
scroll-behavior:smooth;
overflow-y: auto;
scrollbar-width:0;
&::-webkit-scrollbar{
  display: none;
}

`

function App() {
 

  return (
  
     <Container>
      
      <Hero/>
      <Me/>
      <Works/>
      <Contact/>
      
     </Container>
    
  )
}

export default App
