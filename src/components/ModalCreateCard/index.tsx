import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useOpenMaterialContext } from "../contexts/openMaterialContext";
import * as S from "./styles";
import { PriorityIndicatator } from "../CardTask/styles";
import { priorityButtons } from "./priorityButtos";
import InputComponent from "../InputComponent";
import { useDateContext } from "../contexts/dateContext";
import { useScreenSizeContext } from "../contexts/screenSizeContext";
import { useTasksContext } from "../contexts/tasksContext";
import { TasksProps } from "@/interfaces/interface";

export default function ModalCreateCard() {
  const { sizeScreen } = useScreenSizeContext();
  const { setOpenModalCreateCard, openModalCreateCard } =
    useOpenMaterialContext();
  const { formattedTodayDateToMaterialFormat } = useDateContext();
  const { setTasks } = useTasksContext();

  const [task, setTask] = useState<TasksProps>({
    id: Date.now(),
    title: "",
    description: "",
    priority: "HIGH",
    status: "todo",
    date: formattedTodayDateToMaterialFormat,
  });
  const [placeholder, setPlaceholder] = useState(false);

  const handleCloseModalCreateCard = () => setOpenModalCreateCard(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (task.title.length > 28) {
      alert("O titulo escrito ultrapassa 28 caracteres");
      return;
    }
    if (task.description.length > 78) {
      alert("A descrição escrita ultrapassa 78 caracteres");
      return;
    }

    setTasks((prev) => {
      const list = [...prev, task];
      return list;
    });

    setTask({
      id: Date.now(),
      title: "",
      description: "",
      status: "todo",
      priority: "HIGH",
      date: formattedTodayDateToMaterialFormat,
    });

    handleCloseModalCreateCard();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleTextFieldDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(Boolean(e.target.value));
    setTask((prevTask) => ({ ...prevTask, date: e.target.value }));
  };

  return (
    <div>
      <Modal
        open={openModalCreateCard}
        onClose={handleCloseModalCreateCard}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.ModalBoxCreateCard>
          <S.NewCardTitle>Novo Card</S.NewCardTitle>
          <S.FormAddCard onSubmit={handleSubmit}>
            <InputComponent
              label="Título da Task"
              placeholder="Digite aqui o título da task"
              onChange={handleChange}
              value={task.title}
              name="title"
            />
            <InputComponent
              label="Descrição"
              onChange={handleChange}
              value={task.description}
              placeholder="Digite a descrição"
              height={77}
              multiline={true}
              rows={2}
              name="description"
            />
            {sizeScreen < 974 ? (
              <>
                <div style={{ position: "relative" }}>
                  {!placeholder && (
                    <S.Placeholder>Selecione a data de entrega</S.Placeholder>
                  )}
                  <InputComponent
                    type="date"
                    label="Data Final"
                    onChange={handleTextFieldDate}
                    value={task.date}
                    name="date"
                  />
                </div>
                <S.PriorityBox>
                  <S.PriorityLabel>Prioryty</S.PriorityLabel>
                  <S.GroupPriorytisButtonsAndCancelAndSubmitButton>
                    {priorityButtons.map((button) => {
                      return (
                        <PriorityIndicatator
                          key={button.priority}
                          $priority={button.priority}
                          onClick={() =>
                            setTask((prevTask) => ({
                              ...prevTask,
                              priority: button.priority,
                            }))
                          }
                        >
                          {button.priority}
                        </PriorityIndicatator>
                      );
                    })}
                  </S.GroupPriorytisButtonsAndCancelAndSubmitButton>
                  <S.GroupPriorytisButtonsAndCancelAndSubmitButton $mgTop="22.5px">
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
                  </S.GroupPriorytisButtonsAndCancelAndSubmitButton>
                </S.PriorityBox>
              </>
            ) : (
              <>
                <S.DesktopGroupDateInputAndPrioritys>
                  <div style={{ position: "relative", width: "280px" }}>
                    {!placeholder && (
                      <S.Placeholder>Selecione a data de entrega</S.Placeholder>
                    )}
                    <InputComponent
                      type="date"
                      label="Data Final"
                      onChange={handleTextFieldDate}
                      value={task.date}
                      name="date"
                    />
                  </div>
                  <S.PriorityBox>
                    <S.PriorityLabel>Prioryty</S.PriorityLabel>
                    <S.GroupPriorytisButtonsAndCancelAndSubmitButton>
                      {priorityButtons.map((button) => {
                        return (
                          <PriorityIndicatator
                            key={button.priority}
                            $priority={button.priority}
                            onClick={() =>
                              setTask((prevTask) => ({
                                ...prevTask,
                                priority: button.priority,
                              }))
                            }
                          >
                            {button.priority}
                          </PriorityIndicatator>
                        );
                      })}
                    </S.GroupPriorytisButtonsAndCancelAndSubmitButton>
                  </S.PriorityBox>
                </S.DesktopGroupDateInputAndPrioritys>
                <S.GroupPriorytisButtonsAndCancelAndSubmitButton
                  $isDesktop={true}
                  $mgTopDestkop="34.5px"
                >
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
                </S.GroupPriorytisButtonsAndCancelAndSubmitButton>
              </>
            )}
          </S.FormAddCard>
        </S.ModalBoxCreateCard>
      </Modal>
    </div>
  );
}
