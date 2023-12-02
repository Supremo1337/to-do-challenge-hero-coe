import { FlexBox } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import styled from "styled-components";
import { IconTask } from "../Taskban/styles";

interface TimeIconProps {
  $icon: string;
}

interface PriorityIndicatatorProps {
  // $priority: "HIGH" | "MEDIUM" | "LOW";
  $priority: string;
}

export const Content = styled(FlexBox)`
  width: 300px;
  height: 155px;

  justify-content: center;
  align-self: center;

  border-radius: 10px;
  background: ${theme.colors.white.white_100};
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);

  padding: 20px;
`;

export const CardTitle = styled.h2`
  font: ${theme.fonts.libre_Franklin.title_3};
`;

export const CardDescription = styled(CardTitle)`
  margin: 15px 0 21px 0;

  font: ${theme.fonts.libre_Franklin.title_7};
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

export const TimeIcon = styled(IconTask)<TimeIconProps>`
  width: 24px;
  height: 24px;
  /* background: purple; */
  background-image: ${(props) => `url("icon/${props.$icon}.svg")`};
`;

export const TimeTitle = styled.label`
  font: ${theme.fonts.libre_Franklin.title_4};
  color: ${theme.colors.red};
`;

export const PriorityIndicatator = styled.div<PriorityIndicatatorProps>`
  width: max-content;
  height: 24px;
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
