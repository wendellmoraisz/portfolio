import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Github from "@mui/icons-material/GitHub";
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from "./FooterStyles";
import { Bio } from "../../utils/data/constants";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Wendell Morais</Logo>
        <Nav>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#education">Educação</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="display"><Github /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Wendell Morais. Todos os direitos reservados.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;