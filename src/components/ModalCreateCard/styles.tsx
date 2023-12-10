import { theme } from "@/styles/themes";
import { Box } from "@mui/material";
import styled from "styled-components";
import { Title } from "../Taskban/styles";
import * as GS from "@/styles/globalStyles";

interface CancelAndSubmitButtonProps {
  $isCancel: boolean;
}
interface GroupPriorytisButtonsAndCancelAndSubmitButtonProps {
  $isDesktop?: boolean;
  $mgTop?: string;
  $mgTopDestkop?: string;
}

export const ModalBoxCreateCard = styled(Box)`
  width: 340px;
  height: auto;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  gap: 34px;

  background: ${theme.colors.white.white_100};
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 40px 20px;
  @media (min-width: 507px) {
    width: 390px;

    padding: 40px 30px;
  }
  @media (min-width: 974px) {
    width: 682px;
    height: 463px;

    padding: 42px;
  }
`;

export const FormAddCard = styled.form`
  height: calc(100% - 48px);

  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (min-width: 974px) {
    align-items: flex-end;
    justify-content: normal;
    gap: 22px;
  }
`;

export const NewCardTitle = styled(Title)`
  font: ${theme.fonts.libre_Franklin.title_2};
  align-self: flex-start;
`;

export const PriorityBox = styled(GS.FlexBox)`
  gap: 9px;
`;

export const GroupPriorytisButtonsAndCancelAndSubmitButton = styled.div<GroupPriorytisButtonsAndCancelAndSubmitButtonProps>`
  display: flex;
  gap: 15px;

  margin-top: ${(props) => props.$mgTop};
  @media (min-width: 974px) {
    width: ${(props) => (props.$isDesktop ? "100%" : "")};

    justify-content: flex-end;
    margin-top: ${(props) => props.$mgTopDestkop};
  }
`;

export const PriorityLabel = styled.label`
  font: ${theme.fonts.libre_Franklin.title_9};
`;

export const DesktopGroupDateInputAndPrioritys = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CancelAndSubmitButton = styled.input<CancelAndSubmitButtonProps>`
  width: 50%;
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
  @media (min-width: 974px) {
    width: 180px;
  }
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
  transform: translateY(5%) scale(1);
  z-index: 1;

  color: ${theme.colors.gray.gray_300};
  font: ${theme.fonts.libre_Franklin.title_4};
  background-color: ${theme.colors.white.white_100};
`;
