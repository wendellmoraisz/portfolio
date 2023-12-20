import React from "react";
import { useTheme } from "styled-components";
import { BsTerminal } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Nav, NavContainer, NavLogo, NavItems, NavLink, ButtonContainer, GitHubButton, MobileIcon, MobileMenu, MobileMenuLinks, Span } from "./NavBarStyles";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
            <BsTerminal size="2rem" /> <Span>Portfólio</Span>
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