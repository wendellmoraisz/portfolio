import React from "react";
import { ProfileContainer, ProfileBg, ProfileInnerContainer, ProfileLeftContainer, ProfileRightContainer, Title, Role, SubTitle, ResumeButton, Image } from "./ProfileSectionStyles";
import ProfileImage from "../../images/profile.jpg";

const Profile = () => {
  return (
    <div id="about">
      <ProfileContainer>
        <ProfileBg>
        </ProfileBg>
        <ProfileInnerContainer>
          <ProfileLeftContainer>
            <Title>Olá, eu sou <br/>
                Wendell Morais
            </Title>
            <Role>Desenvolvedor Fullstack</Role>
            <SubTitle>Descrição</SubTitle>
            <ResumeButton target="blank">Ver Currículo</ResumeButton>
          </ProfileLeftContainer>
          <ProfileRightContainer>
            <Image src={ProfileImage} alt="Profile Image"/>
          </ProfileRightContainer>
        </ProfileInnerContainer>
      </ProfileContainer>
    </div>
  );
};

export default Profile;