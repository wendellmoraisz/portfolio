import React from "react";
import { SkillsSections } from "../../utils/data/constants";
import { Container, Wrapper, Title, SkillsContainer, Skill, SkillTitle, SkillsList, SkillItem, SkillImage } from "./SkillsStyles";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Habilidades</Title>
       <SkillsContainer>
          {SkillsSections.map((skillSection, index) => (
            <Skill key={index}>
              <SkillTitle>{skillSection.title}</SkillTitle>
              <SkillsList>
                {
                  skillSection.skills.map((skill, index) => (
                    <SkillItem key={index}>
                      <SkillImage src={skill.image} alt={`${skill.name} Logo`}/>
                      {skill.name}
                    </SkillItem>
                  ))
                }
              </SkillsList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;