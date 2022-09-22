import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../utils/layout'
import colors from '../utils/colors'
import Service1 from '../assets/service1.jpg'
import Service2 from '../assets/service2.jpg'
import Service3 from '../assets/service3.jpg'
import Service4 from '../assets/service4.jpg'

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

const SectionHeadingSubtexts = styled.h1`
  font-size: 15px;

  @media (min-width: ${bp.sm}) {
    padding: 0 50px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 20px;
    padding: 0 80px;
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

const HomeServicesSection = () => {
  return (
    <>
      <ServicesSection>
        <SectionHeadingContainer>
          <SectionHeading>OUR SERVICES</SectionHeading>
          <SectionHeadingSubtexts>
            From luxurious bathrooms to sympathetic renovations, choosing SMG
            Construction Company guarantees an impressive end product that will
            satisfy for years to come.
          </SectionHeadingSubtexts>
        </SectionHeadingContainer>
        <ServicesContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Service1} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Architecture and Design</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Service2} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Demolition and Excavation</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Service3} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Refurbishment and Development</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Service4} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ServiceTitle>Maintenance Services</ServiceTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
        </ServicesContainer>
        <ReadMoreContainer>
          <ReadMoreButton>Read more</ReadMoreButton>
        </ReadMoreContainer>
      </ServicesSection>
    </>
  )
}

export default HomeServicesSection
