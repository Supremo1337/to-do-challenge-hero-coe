import { FlexBox } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import styled from "styled-components";

export const TaskList = styled(FlexBox)`
  min-height: 670px;
  height: max-content;
  flex: 0 0 auto;
  background: ${theme.colors.white.white_300};
  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 14px;
  min-width: 330px;
  gap: 20px;

  @media (min-width: 1024px) {
    min-height: 751px;
  }
`;

export const TaskCategoryTitle = styled.h3`
  font: ${theme.fonts.libre_Franklin.title_1};
  span {
    font: ${theme.fonts.libre_Franklin.title_8};
  }
`;
