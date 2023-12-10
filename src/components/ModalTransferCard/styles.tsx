import styled from "styled-components";
import { ModalBoxCreateCard } from "../ModalCreateCard/styles";
import { theme } from "@/styles/themes";

export const ModalBoxTransferCard = styled(ModalBoxCreateCard)`
  width: 150px;
  gap: 0px;
  padding: 10px;
  font: ${theme.fonts.libre_Franklin.title_8};
  color: ${theme.colors.gray.gray_700};
`;
