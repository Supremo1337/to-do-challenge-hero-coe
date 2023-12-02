import { theme } from "@/styles/themes";
import styled from "styled-components";

export const Content = styled.header`
  width: 100%;
  background: ${theme.colors.purple.purple_900};
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  @media (min-width: 1024px) {
    padding: 0 90px;
  }
`;

export const CreateNewCardButton = styled.button`
  width: 147px;
  height: 58px;
  border-radius: 10px;

  text-align: center;

  background: ${theme.colors.purple.purple_300};
  font: ${theme.fonts.libre_Franklin.title_6};
  color: ${theme.colors.white.white_100};
  border: none;
`;
