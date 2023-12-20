import React from "react";
import { Container, Wrapper, Title, CardContainer } from "./ProjectsStyles";
import ProjectCard from "../Cards/ProjectCard";
import { Projects } from "../../utils/data/constants";
import ModalProps from "../../interfaces/ModalProps";

const ProjectsSection = ({ openModal, setOpenModal }: ModalProps) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <CardContainer>
          {Projects.map((project) => <ProjectCard project={project} setOpenModal={setOpenModal} />)}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectsSection;