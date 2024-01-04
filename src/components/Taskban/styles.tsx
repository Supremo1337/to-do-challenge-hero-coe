import * as GS from "@/styles/globalStyles";
import { theme } from "@/styles/themes";
import styled from "styled-components";

interface IconTaskProps {
  $isActive?: boolean;
  $purple?: string;
  $gray?: string;
}

interface ContentProps {
  $isTransparent: boolean;
}

export const Content = styled.div<ContentProps>`
  width: 300px;

  display: flex;
  flex-direction: column;

  padding: 56px 60px;

  background: ${(props) =>
    props.$isTransparent ? "transparent" : theme.colors.white.white_100};
  box-shadow: ${(props) =>
    props.$isTransparent ? "none" : "4px 0px 30px 10px rgba(0, 0, 0, 0.05)"};
`;

export const Title = styled.h1`
  font: ${theme.fonts.K2D};
  color: ${theme.colors.purple.purple_900};
  align-self: center;
`;

export const TaskViewSelector = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

export const GroupIcons = styled(GS.FlexBox)`
  margin-top: 87px;
  gap: 50px;
`;

export const IconTask = styled.div<IconTaskProps>`
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    `url("icon/${props.$isActive ? props.$purple : props.$gray}.svg")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
