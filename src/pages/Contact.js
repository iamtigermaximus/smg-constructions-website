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

const Contact = () => {
  return (
    <Container>
      <PageTitle>Contact</PageTitle>
    </Container>
  )
}

export default Contact
