import { useTheme } from "@mui/material/styles";
import React, { ChangeEvent, useState } from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListItem from "@mui/material/ListItem";
import * as S from "./styles";
import { theme } from "@/styles/themes";
import { TaskViewSelector, Title } from "../Taskban/styles";

const drawerSize = "100%";

interface PersistentDrawerLeftProps {
  changeStyle?: boolean;
}

export default function PersistentDrawerLeft(props: PersistentDrawerLeftProps) {
  // const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <S.Content style={{ width: "44px" }}>
      <S.FadeInContainer>
        <TaskViewSelector onClick={handleDrawerOpen} />
      </S.FadeInContainer>
      <S.FadeInContainer>
        <S.StyledDrawer
          sx={{
            width: drawerSize,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerSize,
              height: drawerSize,
              boxSizing: "border-box",
              backgroundColor: "rgba(0,0,0,0.45)",
              paddingTop: "50px",
              paddingRight: "10px",
            },
          }}
          open={openDrawer}
          anchor="right"
          onClose={handleDrawerClose}
          variant="temporary"
        >
          <S.DrawerBody>
            <IconButton
              sx={{ background: theme.colors.purple.purple_300 }}
              onClick={handleDrawerClose}
            >
              <CloseIcon
                style={{
                  color: theme.colors.white.white_300,
                  fontSize: "28px",
                }}
                // fontSize="large"
              />
            </IconButton>
            <List
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <ListItem disablePadding>
                <S.ListItemRow>
                  <S.SlideInContainer>
                    <S.BoxButtonAction $display="flex">
                      <AddCircleOutlineIcon
                        style={{
                          color: theme.colors.white.white_300,
                          fontSize: "32px",
                          opacity: "59%",
                        }}
                      />
                      <Title>Adicionar um jogo</Title>
                    </S.BoxButtonAction>
                  </S.SlideInContainer>
                </S.ListItemRow>
              </ListItem>
              <ListItem disablePadding>
                <S.ListItemRow>
                  <S.SlideInContainer>
                    <S.BoxButtonAction $display="flex" />
                  </S.SlideInContainer>
                </S.ListItemRow>
              </ListItem>
            </List>
          </S.DrawerBody>
        </S.StyledDrawer>
      </S.FadeInContainer>
    </S.Content>
  );
}
