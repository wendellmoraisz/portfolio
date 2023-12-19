import React from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { BsTerminal } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0 6px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

type MobileMenuProps = {
  open: boolean;
};

const MobileMenu = styled.div<MobileMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80;
  right: 0;
  width: 100%;
  padding: 12px 40pc 24px 40px;
  background-color: ${({ theme }) => theme.card_light};
  transition: all 0.2s ease-in-out;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => open ? "1" : "0"};
  z-index: ${({ open }) => open ? "1" : "-1"};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;


const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20" }}>
            <BsTerminal size="2rem" /> <Span>Portfólio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#education">Educação</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>GitHub</GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {
        isOpen && (
          <MobileMenu open={isOpen}>
            <MobileMenuLinks href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>Sobre</MobileMenuLinks>
            <MobileMenuLinks href="#skills" onClick={() => {
              setIsOpen(!isOpen)
            }}>Habilidades</MobileMenuLinks>
            <MobileMenuLinks href="#experience" onClick={() => {
              setIsOpen(!isOpen)
            }}>Experiência</MobileMenuLinks>
            <MobileMenuLinks href="#projects" onClick={() => {
              setIsOpen(!isOpen)
            }}>Projetos</MobileMenuLinks>
            <MobileMenuLinks href="#education" onClick={() => {
              setIsOpen(!isOpen)
            }}>Educação</MobileMenuLinks>
            <GitHubButton style={{padding: "10px 16px", background: `${theme.primary}`, color: "white",width: "max-content"}} href="/" target="_blank">Github</GitHubButton>
          </MobileMenu>
        )
      }
    </Nav>
  );
};

export default NavBar;