import { FlexBox } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import styled from "styled-components";

export const Content = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  padding: 60px 0;

  background: ${theme.colors.white.white_200};
  gap: 39px;
`;

export const TaskList = styled(FlexBox)`
  width: 330px;

  background: ${theme.colors.white.white_300};

  border-radius: 20px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);

  padding: 8px;
  gap: 39px;
`;

export const TaskCategoryTitle = styled.h3`
  /* color: ${theme.colors.gray.gray_700}; */
  font: ${theme.fonts.libre_Franklin.title_1};
  span {
    font: ${theme.fonts.libre_Franklin.title_8};
  }
`;
