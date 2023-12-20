import Project from "./Project";

export default interface ModalProps {
  openModal: OpenModal;
  setOpenModal: React.Dispatch<React.SetStateAction<OpenModal>>;
}

interface OpenModal {
  state: boolean;
  project?: Project;
}