import { theme } from "@/styles/themes";
import { FadeInContainer } from "../PersistentDrawerLeft/styles";
import { useOpenMaterialContext } from "../contexts/openMaterialContext";
import { useScreenSizeContext } from "../contexts/screenSizeContext";
import { Content, CreateNewCardButton } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const { sizeScreen } = useScreenSizeContext();

  const { setOpenDrawer, setOpenModalCreateCard } = useOpenMaterialContext();
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleOpenModalCreateCard = () => setOpenModalCreateCard(true);

  return (
    <Content>
      {sizeScreen < 768 && (
        <FadeInContainer>
          <MenuIcon
            sx={{ color: theme.colors.white.white_300 }}
            fontSize={"large"}
            onClick={handleDrawerOpen}
          />
        </FadeInContainer>
      )}
      <CreateNewCardButton onClick={handleOpenModalCreateCard}>
        + Novo Card
      </CreateNewCardButton>
    </Content>
  );
}
