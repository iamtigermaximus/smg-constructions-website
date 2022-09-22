import React from 'react'
import styled from 'styled-components'
import { breakpoints as bp } from '../utils/layout'
import colors from '../utils/colors'
import Approach1 from '../assets/approach1.svg'
import Approach2 from '../assets/approach2.svg'
import Approach3 from '../assets/approach3.svg'
import Approach4 from '../assets/approach4.svg'

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

const HomeApproachSection = () => {
  return (
    <>
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
    </>
  )
}

export default HomeApproachSection
