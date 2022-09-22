import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../utils/layout'
import BG1 from '../assets/construction-bg2.jpg'
import HomeServicesSection from '../components/ServicesSection'
import HomeApproachSection from '../components/ApproachSection'
import HomePortfolioSection from '../components/PortfolioSection'

const HeroSection = styled.div`
  background-image: url(${BG1});
  width: 100vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    height: 100vh;
  }
`
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 0.6;
  color: black;
  padding: 20px;
  margin: 10px;
`
const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media (min-width: ${bp.md}) {
    width: 600px;
    height: 400px;
  }
`
const BannerTexts = styled.h1`
  font-size: 25px;

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 50px;
  }
`

const Home = () => {
  return (
    <>
      <HeroSection>
        <BannerContainer>
          <TextsContainer>
            <BannerTexts>
              Expertise that inspires confidence.Buildings that instill pride.
            </BannerTexts>
            <h3>Better building starts with SMG Constructions.</h3>
          </TextsContainer>
        </BannerContainer>
      </HeroSection>
      <HomeServicesSection />
      <HomeApproachSection />
      <HomePortfolioSection />
    </>
  )
}

export default Home
