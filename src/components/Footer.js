import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../utils/layout'
import colors from '../utils/colors'
import Logo from '../assets/smg-logo.png'
import { MdLocationPin, MdEmail, MdCall } from 'react-icons/md'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #13274f;
`
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: black;
`
const Heading = styled.h1`
  font-size: 20px;
  color: white;

  @media (min-width: ${bp.sm}) {
    padding: 10px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`
const ContactsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${bp.md}) {
    width: 300px;
    height: 300px;
  }
`
const FooterImageContainer = styled.div`
  width: 100%;
  height: 150px;

  @media (min-width: ${bp.md}) {
    height: 250px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Contacts = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 10px;
`
const Icon = styled.div`
  font-size: 40px;
  color: white;
`
const Address = styled.h1`
  font-size: 18px;
  color: white;
  margin: 10px;
`

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
  margin: 10px;
`

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormButton = styled.button`
  width: 100px;
  padding: 10px;
`
const Footer = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>GET IN TOUCH</Heading>
      </HeadingContainer>
      <FooterContainer>
        <ContactsContainer>
          <FooterImageContainer>
            <Image src={Logo} />
          </FooterImageContainer>
        </ContactsContainer>
        <ContactsContainer>
          <Contacts>
            <Icon>
              <MdLocationPin />
            </Icon>
            <Address>Paaskylanrinne 6 B50 Helsinki 00500 Finland</Address>
          </Contacts>
          <Contacts>
            <Icon>
              <MdCall />
            </Icon>
            <Address>+358123456789</Address>
          </Contacts>
          <Contacts>
            <Icon>
              <MdEmail />
            </Icon>
            <Address>smg.constructions@gmail.com</Address>
          </Contacts>
        </ContactsContainer>
        <ContactsContainer>
          <FormContainer>
            <Input placeholder='name' />
            <Input placeholder='address' />
            <TextArea placeholder='message' rows='3' cols='100' />
            <ButtonContainer>
              <FormButton>Send</FormButton>
            </ButtonContainer>
          </FormContainer>
        </ContactsContainer>
      </FooterContainer>
    </Container>
  )
}

export default Footer
