import { theme } from "@/styles/themes";
import { Box } from "@mui/material";
import styled from "styled-components";
import { Title } from "../Taskban/styles";
import * as GS from "@/styles/globalStyles";

interface CancelAndSubmitButtonProps {
  $isCancel: boolean;
}

export const ModalBox = styled(Box)`
  width: 340px;
  height: 400px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.colors.white.white_100};
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 20px;
`;

export const FormAddCard = styled.form`
  height: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NewCardTitle = styled(Title)`
  font: ${theme.fonts.libre_Franklin.title_2};
  align-self: flex-start;
`;

export const PriorityBox = styled(GS.FlexBox)`
  gap: 9px;
`;

export const GroupPriorytisButtons = styled.div`
  display: flex;
  gap: 15px;
`;

export const PriorityLabel = styled.label`
  font: ${theme.fonts.libre_Franklin.title_9};
`;

export const CancelAndSubmitButton = styled.input<CancelAndSubmitButtonProps>`
  width: 100%;
  height: 37px;
  border-radius: 20px;

  background: ${(props) =>
    props.$isCancel
      ? theme.colors.white.white_100
      : theme.colors.purple.purple_900};
  border: ${(props) =>
    props.$isCancel ? `1px solid ${theme.colors.red}` : "none"};

  display: flex;
  justify-content: center;
  align-items: center;

  font: ${theme.fonts.libre_Franklin.title_5};
  color: ${(props) =>
    props.$isCancel ? theme.colors.red : theme.colors.white.white_100};

  text-align: center;
  outline: none;
`;

export const Placeholder = styled.label`
  width: 200px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all;
  left: 3px;
  transform: translateY(30%) scale(1);
  z-index: 1;

  color: ${theme.colors.gray.gray_300};
  font: ${theme.fonts.libre_Franklin.title_4};
  background-color: ${theme.colors.white.white_100};
`;
