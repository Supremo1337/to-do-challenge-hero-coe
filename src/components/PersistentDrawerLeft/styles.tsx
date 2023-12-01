import styled, { keyframes } from "styled-components";
import Drawer from "@mui/material/Drawer";
import { theme } from "@/styles/themes";

interface BoxButtonActionProps {
  $display: string;
}

export const Content = styled.div`
  width: 44px;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ListItemRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const BoxButtonAction = styled.div<BoxButtonActionProps>`
  width: 228px;
  height: 44px;
  background: ${theme.colors.purple.purple_900};
  border-radius: 30px;
  display: ${(props) => props.$display};
  align-items: center;
  padding-left: 10px;
  gap: 5px;
  box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.7);
  @media (min-width: 1024px) {
    display: flex;
  }
`;

// export const Drawer = styled.div`
//   width: 100%;
//   background: red;
//   box-sizing: border-box;
//   background: none;
//   padding-top: 50px;
//   padding-right: 10px;
// `;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(-90px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: transparent; /* Remove a cor de fundo */
    opacity: ${({ open }) => (open ? 1 : 0)};
    animation: ${fadeIn} 300ms ease-in-out;
    box-shadow: none;
  }
`;

export const DrawerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
  justify-content: flex-end;
`;

export const FadeInContainer = styled.div`
  animation: ${fadeIn} 300ms ease-in-out;
  /* background-color: red; */
`;

export const SlideInContainer = styled.div`
  animation: ${slideIn} 900ms ease-in-out;
  /* background-color: red; */
`;
