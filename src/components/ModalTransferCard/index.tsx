import * as React from "react";
import Modal from "@mui/material/Modal";
import { MenuItem, MenuList } from "@mui/material";
import { TasksProps } from "@/interfaces/interface";
import * as S from "./styles";

interface BasicModalProps {
  card: TasksProps;
  addItemToSection: (id: number, buttonName: string) => void;
  openModalTransferCard: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseModalTransferCard: () => void;
}

export default function BasicModal({
  card,
  addItemToSection,
  openModalTransferCard,
  handleCloseModalTransferCard,
}: BasicModalProps) {
  return (
    <div>
      <Modal
        open={openModalTransferCard}
        onClose={handleCloseModalTransferCard}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBoxTransferCard>
          <MenuItem onClick={() => addItemToSection(card.id, "todo")}>
            To do
          </MenuItem>
          <MenuItem onClick={() => addItemToSection(card.id, "toDoing")}>
            Doing
          </MenuItem>
          <MenuItem onClick={() => addItemToSection(card.id, "qA")}>
            QA
          </MenuItem>
          <MenuItem onClick={() => addItemToSection(card.id, "done")}>
            Done
          </MenuItem>
        </S.ModalBoxTransferCard>
      </Modal>
    </div>
  );
}
