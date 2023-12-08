import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useOpenMaterial } from "../contexts/openMaterialContext";
import * as S from "./styles";
import * as GS from "@/styles/globalStyles";
import { PriorityIndicatator } from "../CardTask/styles";
import { priorityButtons } from "./priorityButtos";
import InputComponent from "../InputComponent";
import { format } from "date-fns";
import { useDateContext } from "../contexts/dateContext";

interface ModalCreateCardProps {
  addCard: (newCard: {
    id: number;
    title: string;
    description: string;
    date: string;
    priority: "HIGH" | "MEDIUM" | "LOW";
  }) => void;
}

export default function ModalCreateCard({ addCard }: ModalCreateCardProps) {
  const { setOpenModalCreateCard, openModalCreateCard } = useOpenMaterial();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState<"HIGH" | "MEDIUM" | "LOW">("HIGH");
  const [placeholder, setPlaceholder] = useState(false);
  const handleCloseModalCreateCard = () => setOpenModalCreateCard(false);
  const { taskDate, setTaskDate, formattedTodayDateToMaterialFormat } =
    useDateContext();

  const handleCreateCard = () => {
    const newCard = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      priority: priority,
    };
    console.log("newcardMODAL", newCard);
    addCard(newCard);
    handleCloseModalCreateCard();
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate(formattedTodayDateToMaterialFormat);
    setPlaceholder(false);
    console.log("Criando card:", newCard);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateCard();
  };

  const handleTextFieldDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(Boolean(e.target.value));
    setTaskDate(e.target.value);
  };

  return (
    <div>
      <Modal
        open={openModalCreateCard}
        onClose={handleCloseModalCreateCard}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBox>
          <S.NewCardTitle>Novo Card</S.NewCardTitle>
          <S.FormAddCard onSubmit={handleFormSubmit}>
            <InputComponent
              label="Título da Task"
              placeholder="Digite aqui o título da task"
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
            />
            <InputComponent
              label="Descrição"
              onChange={(e) => setTaskDescription(e.target.value)}
              value={taskDescription}
              placeholder="Digite a descrição"
            />
            <div style={{ position: "relative" }}>
              {!placeholder && (
                <S.Placeholder>Selecione a data de entrega</S.Placeholder>
              )}
              <InputComponent
                type="date"
                label="Data Final"
                onChange={handleTextFieldDate}
                value={taskDate}
              />
            </div>
            <S.PriorityBox>
              <S.PriorityLabel>Prioryty</S.PriorityLabel>
              <S.GroupPriorytisButtons>
                {priorityButtons.map((button) => {
                  return (
                    <PriorityIndicatator
                      key={button.priority}
                      $priority={button.priority}
                      onClick={() => setPriority(button.priority)}
                    >
                      {button.priority}
                    </PriorityIndicatator>
                  );
                })}
              </S.GroupPriorytisButtons>
              <S.GroupPriorytisButtons>
                <S.CancelAndSubmitButton
                  onClick={handleCloseModalCreateCard}
                  $isCancel={true}
                  value={"CANCELAR"}
                  readOnly={true}
                  type="button"
                />

                <S.CancelAndSubmitButton
                  $isCancel={false}
                  value={"CRIAR"}
                  type="submit"
                />
              </S.GroupPriorytisButtons>
            </S.PriorityBox>
          </S.FormAddCard>
        </S.ModalBox>
      </Modal>
    </div>
  );
}
