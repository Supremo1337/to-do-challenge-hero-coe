import { FlexBox } from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import styled from "styled-components";

export const Content = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 60px 20px;
  background: ${theme.colors.white.white_200};
  gap: 39px;
  overflow-x: auto;
  flex-wrap: nowrap;
  &:last-child {
    margin-right: -39px;
  }
  @media (min-width: 768px) {
    padding: 60px 50px 60px 50px;
  }
  @media (min-width: 1768px) {
    padding: 60px 3% 60px 50px;
  }
  @media (min-width: 1782px) {
    &:last-child {
      margin-right: 0px;
    }
  }
  @media (min-width: 1826px) {
    overflow-x: hidden;
  }
`;
