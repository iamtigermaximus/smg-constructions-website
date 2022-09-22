import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../utils/layout'
import colors from '../utils/colors'
import BG1 from '../assets/construction-bg2.jpg'
import Service1 from '../assets/service1.jpg'
import Service2 from '../assets/service2.jpg'
import Service3 from '../assets/service3.jpg'
import Service4 from '../assets/service4.jpg'
import House1 from '../assets/house1.jpg'
import House2 from '../assets/house2.jpg'
import House3 from '../assets/house3.jpg'
import House4 from '../assets/house4.jpg'
import Approach1 from '../assets/approach1.svg'
import Approach2 from '../assets/approach2.svg'
import Approach3 from '../assets/approach3.svg'
import Approach4 from '../assets/approach4.svg'

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

const ApproachSection = styled.div`
  background: #13274f;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ApproachTitle = styled.h1`
  width: 100%;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (min-width: ${bp.md}) {
    height: 50px;
  }
`

const ApproachHeading = styled.h1`
  font-size: 20px;
  color: white;

  @media (min-width: ${bp.sm}) {
    padding: 10px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 30px;
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
      <ApproachSection>
        <SectionHeadingContainer>
          <ApproachHeading>OUR APPROACH</ApproachHeading>
        </SectionHeadingContainer>
        <ServicesContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Approach1} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ApproachTitle>Independent and Flexible</ApproachTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Approach2} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ApproachTitle>Attention to Detail</ApproachTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Approach3} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ApproachTitle>Responsible and Unobtrusive</ApproachTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
          <ServiceContainer>
            <ServiceImageContainer>
              <Image src={Approach4} />
            </ServiceImageContainer>
            <ServiceTitleContainer>
              <ApproachTitle>Professionalism</ApproachTitle>
            </ServiceTitleContainer>
          </ServiceContainer>
        </ServicesContainer>
        <ReadMoreContainer>
          <ReadMoreButton>Read more</ReadMoreButton>
        </ReadMoreContainer>
      </ApproachSection>
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

export default Home
