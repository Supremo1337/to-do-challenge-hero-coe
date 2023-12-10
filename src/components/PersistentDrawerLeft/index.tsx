import React from "react";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import * as S from "./styles";
import { theme } from "@/styles/themes";
import TaskBan from "../Taskban";
import { useOpenMaterialContext } from "../contexts/openMaterialContext";

const drawerSize = "100%";

export default function PersistentDrawerLeft() {
  const { openDrawer, setOpenDrawer } = useOpenMaterialContext();

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <S.Content style={{ width: "0px" }}>
      <S.FadeInContainer>
        <S.StyledDrawer
          sx={{
            width: "auto",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "auto",
              height: drawerSize,
              boxSizing: "border-box",
              backgroundColor: "rgba(0,0,0,0.45)",
              paddingTop: "13.5px",
            },
          }}
          open={openDrawer}
          anchor="left"
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
              />
            </IconButton>
            <List
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <ListItem disablePadding>
                <S.ListItemRow>
                  <S.SlideInContainer>
                    <TaskBan $isTransparent={true} />
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
