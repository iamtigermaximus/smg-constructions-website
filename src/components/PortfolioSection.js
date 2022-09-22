import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../utils/layout'
import colors from '../utils/colors'
import House1 from '../assets/house1.jpg'
import House2 from '../assets/house2.jpg'
import House3 from '../assets/house3.jpg'
import House4 from '../assets/house4.jpg'

const ServicesSection = styled.div`
  background: ${colors.gray};
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const ServicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 20px;
  margin: 10px;
  flex-wrap: wrap;

  @media (min-width: ${bp.md}) {
    flex-direction: row;
  }
`
const SectionHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: black;
`
const SectionHeading = styled.h1`
  font-size: 20px;

  @media (min-width: ${bp.sm}) {
    padding: 10px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }
`

const ServiceContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 10px;

  @media (min-width: ${bp.sm}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${bp.md}) {
    width: 300px;
    height: 300px;
  }
`
const ServiceImageContainer = styled.div`
  width: 100%;
  height: 150px;
  background: ${colors.darkGray};

  @media (min-width: ${bp.md}) {
    height: 250px;
  }
`
const ServiceTitleContainer = styled.div`
  width: 100%;
  height: 50px;

  @media (min-width: ${bp.md}) {
    height: 50px;
  }
`
const ServiceTitle = styled.h1`
  width: 100%;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    height: 50px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const ReadMoreButton = styled.button`
  width: 200px;
  padding: 20px;
  font-size: 20px;
  border: 2px solid black;
  border-radius: 5px;
`

const HomePortfolioSection = () => {
  return (
    <>
      <ServicesSection>
        <SectionHeadingContainer>
          <SectionHeading>PORTFOLIO</SectionHeading>
        </SectionHeadingContainer>
        <ServicesContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={House1} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Private Residence | Helsinki</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={House2} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Private Residence | Espoo</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={House3} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Private Residence | Turku</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={House4} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Private Residence | Tampere</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
        </ServicesContainer>
        <ReadMoreContainer>
          <ReadMoreButton>See all projects</ReadMoreButton>
        </ReadMoreContainer>
      </ServicesSection>
    </>
  )
}

export default HomePortfolioSection
