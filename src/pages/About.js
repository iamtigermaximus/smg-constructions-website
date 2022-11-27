import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PageTitle = styled.h1`
  color: white;
`

const About = () => {
  return (
    <Container>
      <PageTitle>About</PageTitle>
    </Container>
  )
}

export default About
