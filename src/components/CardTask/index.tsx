import { useState } from "react";
import * as S from "./styles";
import { useDateContext } from "../contexts/dateContext";
import { useDrag } from "react-dnd";
import { useScreenSizeContext } from "../contexts/screenSizeContext";
import BasicModal from "../ModalTransferCard";
import { TasksProps } from "@/interfaces/interface";

interface CardTaskProps {
  card: TasksProps;
  doneList?: TasksProps[];
  addItemToSection: (id: number) => void;
}

export default function CardTask({
  card,
  doneList,
  addItemToSection,
}: CardTaskProps) {
  const [openModalTransferCard, setOpenModalTransferCard] = useState(false);
  const { sizeScreen } = useScreenSizeContext();
  const { formattedTodayDateToMaterialFormat } = useDateContext();
  let taskDateIsLate = formattedTodayDateToMaterialFormat > card.date;
  let formatedDateToUTC = new Date(card.date).toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });

  let isDoneList = doneList && doneList.some((item) => item.id === card.id);

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: "task",
      item: { id: card.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  const handleOpenModalTransferCard = () => setOpenModalTransferCard(true);

  const handleCloseModalTransferCard = () => setOpenModalTransferCard(false);

  return (
    <>
      <S.Content
        onClick={handleOpenModalTransferCard}
        ref={dragRef}
        $isDragging={isDragging}
      >
        <S.CardTitle title={card.title}>{card.title}</S.CardTitle>
        <S.CardDescription>{card.description}</S.CardDescription>
        <S.BottomCard>
          <S.TaskTime>
            {isDoneList ? (
              <>
                <S.TimeIcon $isFinished="OK" />
                <S.TimeTitle $isFinished="OK">Finalizado</S.TimeTitle>
              </>
            ) : (
              <>
                <S.TimeIcon $isLate={taskDateIsLate} />
                <S.TimeTitle $isLate={taskDateIsLate}>
                  {formatedDateToUTC}
                </S.TimeTitle>
              </>
            )}
          </S.TaskTime>
          {!isDoneList && (
            <>
              {card.priority === "HIGH" ? (
                <S.PriorityIndicatator $priority="HIGH">
                  HIGH
                </S.PriorityIndicatator>
              ) : card.priority === "MEDIUM" ? (
                <S.PriorityIndicatator $priority="MEDIUM">
                  MEDIUM
                </S.PriorityIndicatator>
              ) : (
                <S.PriorityIndicatator $priority="LOW">
                  LOW
                </S.PriorityIndicatator>
              )}
            </>
          )}
        </S.BottomCard>
      </S.Content>
      {sizeScreen < 1024 && (
        <BasicModal
          openModalTransferCard={openModalTransferCard}
          setOpen={setOpenModalTransferCard}
          handleCloseModalTransferCard={handleCloseModalTransferCard}
          card={card}
          addItemToSection={addItemToSection}
        />
      )}
    </>
  );
}
