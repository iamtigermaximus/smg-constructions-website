import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { breakpoints as bp } from '../utils/layout'
import colors from '../utils/colors'
import Logo from '../assets/smg-logo.png'

const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 10px;

  @media (min-width: ${bp.lg}) {
    padding: 0 30px;
  }
`
const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`
const NavbarLinks = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: row;
  }
`
const BrandLinkItem = styled.h1`
  display: none;

  @media (min-width: ${bp.sm}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${colors.offWhite};
    margin: 10px 10px;
    padding: 10px;
    font-size: 20px;
    color: black;
  }
`

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  padding: 5px;
  color: black;
  font-size: 30px;

  @media (min-width: ${bp.lg}) {
    display: none;
  }
`
const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px ;
 > a {
  text-decoration: none;
 }
`
const LinkItem = styled.h1`
  color: ${colors.offWhite};
  margin: 10px 10px;
  padding: 10px 20px;
  font-size: 20px;
  color: black;
`
const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  > a {
    text-decoration: none;
  }
`
const MenuContainer = styled.div`
  display: flex;
`
const MobileMenuContainer = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  top: 8vh;
  width: 100%;
  height: 100vh;
  background: ${colors.navy};
  transform: translateX(0%);
  transition: transform 0.3s ease-out;
  z-index: 1;
  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
`
const Image = styled.img`
  display: flex;
  width: 70px;
  height: 70px;
  margin: 20px;
`

const Navbar = () => {
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link to='/'>
          <LinkItemContainer>
            <Image src={Logo} />
            <BrandLinkItem>SMG CONSTRUCTIONS</BrandLinkItem>
          </LinkItemContainer>
        </Link>
      </BrandContainer>
      <MenuContainer>
        <NavbarLinks>
          <LinkItemContainer>
            <Link to='/'>
              <LinkItem>HOME</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/portfolio'>
              <LinkItem>PORTFOLIO</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/about'>
              <LinkItem>ABOUT</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/contact'>
              <LinkItem>CONTACT</LinkItem>
            </Link>
          </LinkItemContainer>
        </NavbarLinks>
        <BurgerMenu onClick={categoryMenu}>
          {click ? <FaBars /> : <FaTimes />}
          <MobileMenuContainer
            className={click ? 'category active' : 'category'}
            onClick={categoryMenu}
          >
            <MobileNavbarLinks>
              <LinkItemContainer>
                <Link to='/'>
                  <LinkItem>HOME</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/portfolio'>
                  <LinkItem>PORTFOLIO</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/about'>
                  <LinkItem>ABOUT</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/contact'>
                  <LinkItem>CONTACT</LinkItem>
                </Link>
              </LinkItemContainer>
            </MobileNavbarLinks>
          </MobileMenuContainer>
        </BurgerMenu>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
