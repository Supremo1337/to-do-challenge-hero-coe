import * as GS from "@/styles/globalStyles";
import * as S from "./styles";
import { useState } from "react";
import { buttons } from "./buttons";

interface TaskBanProps {
  $isTransparent: boolean;
}

export default function TaskBan({ $isTransparent }: TaskBanProps) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };
  return (
    <S.Content $isTransparent={$isTransparent}>
      <S.Title>TASKBAN</S.Title>
      <S.GroupIcons>
        {buttons.map((button, index) => {
          return (
            <S.TaskViewSelector
              key={button.label}
              onClick={() => handleButtonClick(index)}
            >
              <S.IconTask
                $isActive={activeButtonIndex === index}
                $gray={`${button.nameIcon}Gray`}
                $purple={`${button.nameIcon}Purple`}
              />
              <GS.CategoryLabel $isActive={activeButtonIndex === index}>
                {button.label}
              </GS.CategoryLabel>
            </S.TaskViewSelector>
          );
        })}
      </S.GroupIcons>
    </S.Content>
  );
}
