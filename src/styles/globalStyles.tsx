import { createGlobalStyle } from "styled-components";
import { theme } from "./themes";
import styled from "styled-components";

interface CategoryLabelProps {
  $isActive: boolean;
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: ${theme.colors.gray.gray_700};
    user-select: none;
  }
  
  #__next{
    display: flex;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
`;

export const CategoryLabel = styled.div<CategoryLabelProps>`
  font: ${(props) =>
    props.$isActive
      ? theme.fonts.libre_Franklin.title_3
      : theme.fonts.libre_Franklin.title_8};
  color: ${(props) =>
    props.$isActive
      ? theme.colors.purple.purple_900
      : theme.colors.gray.gray_700};
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;
