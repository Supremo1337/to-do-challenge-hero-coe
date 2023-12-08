import { FadeInContainer } from "../PersistentDrawerLeft/styles";
import { useOpenMaterial } from "../contexts/openMaterialContext";
import { useScreenSize } from "../contexts/screenSizeContext";
import { Content, CreateNewCardButton } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const { sizeScreen } = useScreenSize();

  const { setOpenDrawer, setOpenModalCreateCard } = useOpenMaterial();
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleOpenModalCreateCard = () => setOpenModalCreateCard(true);

  return (
    <Content>
      {sizeScreen < 768 && (
        <FadeInContainer>
          <MenuIcon fontSize={"large"} onClick={handleDrawerOpen} />
        </FadeInContainer>
      )}
      <CreateNewCardButton onClick={handleOpenModalCreateCard}>
        + Novo Card
      </CreateNewCardButton>
    </Content>
  );
}
