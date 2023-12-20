import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { ButtonGroup, CodeButton, Container, DemoButton, Desc, Image, Tag, Tags, Title, Wrapper } from "./ProjectDetaisStyles";
import ModalProps from "../../interfaces/ModalProps";

const ProjectDetails = ({ openModal, setOpenModal }: ModalProps) => {
  const project = openModal?.project;

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          <ButtonGroup>
            <CodeButton href={project?.repository} target="new">Acessar Repositório</CodeButton>
            {project?.demo && <DemoButton href={project?.demo} target="new">Visualizar Demo</DemoButton>}
          </ButtonGroup>
        </Wrapper>
      </Container>

    </Modal>
  )
}

export default ProjectDetails;