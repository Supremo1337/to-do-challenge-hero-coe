import { FlexBox } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import styled, { css } from "styled-components";
import { IconTask } from "../Taskban/styles";

interface TimeProps {
  $isLate?: boolean;
  $isFinished?: "OK";
}

interface ContentProps {
  $isDragging: boolean;
}

interface PriorityIndicatatorProps {
  $priority: "HIGH" | "MEDIUM" | "LOW";
  $isSelected?: boolean;
}

interface TaskCategoryTitleProps {
  maxChars?: number;
}

export const Content = styled(FlexBox)<ContentProps>`
  width: 300px;
  height: 155px;

  justify-content: center;
  align-self: center;

  border-radius: 10px;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);

  padding: 20px;
  cursor: grab;
  background: ${theme.colors.white.white_100};

  ${(props) =>
    props.$isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 31px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      div,
      h2 {
        opacity: 0;
      }
    `}
`;

export const CardTitle = styled.h2<TaskCategoryTitleProps>`
  font: ${theme.fonts.libre_Franklin.title_3};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardDescription = styled(CardTitle)`
  margin: 15px 0 21px 0;

  font: ${theme.fonts.libre_Franklin.title_7};
  white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const BottomCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TaskTime = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TimeIcon = styled(IconTask)<TimeProps>`
  width: 24px;
  height: 24px;
  background-image: ${(props) =>
    `url("icon/${
      props.$isFinished === "OK"
        ? "circle-check"
        : props.$isLate
        ? "bx_timeRed"
        : "bx_TimeGray"
    }.svg")`};
`;

export const TimeTitle = styled.label<TimeProps>`
  font: ${theme.fonts.libre_Franklin.title_4};
  color: ${(props) =>
    props.$isLate ? theme.colors.red : theme.colors.gray.gray_700};
  color: ${(props) =>
    props.$isFinished === "OK"
      ? theme.colors.green
      : props.$isLate
      ? theme.colors.red
      : theme.colors.gray.gray_700};
`;

export const PriorityIndicatator = styled.div<PriorityIndicatatorProps>`
  width: max-content;
  height: ${(props) => (props.$isSelected ? "30px" : "24px")};
  border-radius: 100px;

  background: ${(props) =>
    props.$priority === "HIGH"
      ? theme.colors.red
      : theme.colors.white.white_100};
  border: ${(props) =>
    props.$priority === "HIGH"
      ? "none"
      : props.$priority === "MEDIUM"
      ? `1px solid ${theme.colors.yellow}`
      : `1px solid ${theme.colors.green}`};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 15px;

  font: ${theme.fonts.libre_Franklin.title_5};
  color: ${(props) =>
    props.$priority === "HIGH"
      ? theme.colors.white.white_100
      : props.$priority === "MEDIUM"
      ? theme.colors.yellow
      : theme.colors.green};
`;
