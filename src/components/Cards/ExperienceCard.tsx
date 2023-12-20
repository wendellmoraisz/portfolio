import React from "react";
import Experience from "../../interfaces/Experience";
import styled from "styled-components";

interface ExperienceCardProps {
  experience: Experience;
}

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
    trasform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  border: .1px solid #306EE8;
  box-shadow: rgba(23, 92, 230, .15) 0px 4px 24px;
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Logo = styled.img`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Company = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media screen and (max-width: 768px) {
    font-size: .8rem;
  }
`;

const Duration = styled.div`
  font-size: .8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media screen and (max-width: 768px) {
    font-size: .7rem;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: .9rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: .8rem;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

const ItemWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: .8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  
  @media screen and (max-width: 768px) {
    font-size: .7rem;
  }
`;

const ExperienceCard = ({ experience } : ExperienceCardProps) => {
  return (
    <Card>
      <Top>
        <Logo src={experience.companyLogo} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.date}</Duration>
        </Body>
      </Top>
      <Description>
        {experience.description} <br/>
        <Skills>
          <b>Habilidades:</b>
          <ItemWapper>
            {experience.skills.map((skill, index) => (
              <Skill>{skill}</Skill>
            ))}
          </ItemWapper>
        </Skills>
      </Description>
    </Card>
  )
}

export default ExperienceCard;