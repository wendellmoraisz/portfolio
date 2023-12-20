import React from "react";
import { ProfileContainer, ProfileBg, ProfileInnerContainer, ProfileLeftContainer, ProfileRightContainer, Title, Role, SubTitle, ResumeButton, Image } from "./ProfileSectionStyles";
import ProfileImage from "../../images/profile.jpg";
import ProfileBgAnimation from "../ProfileBgAnimation";
import { Bio } from "../../utils/data/constants";

const Profile = () => {
  return (
    <div id="about">
      <ProfileContainer>
        <ProfileBg>
          <ProfileBgAnimation/>
        </ProfileBg>
        <ProfileInnerContainer>
          <ProfileLeftContainer>
            <Title>Olá, eu sou <br/>
                {Bio.name}
            </Title>
            <Role>{Bio.role}</Role>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="blank">Ver Currículo</ResumeButton>
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