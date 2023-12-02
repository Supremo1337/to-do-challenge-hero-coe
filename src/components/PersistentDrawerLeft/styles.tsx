import styled, { keyframes } from "styled-components";
import Drawer from "@mui/material/Drawer";
import { theme } from "@/styles/themes";

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
    background-color: #fff; /* Remove a cor de fundo */
    opacity: ${({ open }) => (open ? 1 : 0)};
    animation: ${fadeIn} 300ms ease-in-out;
    box-shadow: 4px 0px 30px 10px rgba(0, 0, 0, 0.05);
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
