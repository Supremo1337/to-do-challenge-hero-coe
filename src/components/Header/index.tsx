import { FadeInContainer } from "../PersistentDrawerLeft/styles";
import { useOpenMaterial } from "../contexts/openMaterialContext";
import { Content, CreateNewCardButton } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  sizeScreen: number;
}

export default function Header({ sizeScreen }: HeaderProps) {
  const { setOpenDrawer, setOpenModalCreateCard } = useOpenMaterial();
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleOpenModalCreateCard = () => setOpenModalCreateCard(true);

  return (
    <Content>
      <FadeInContainer>
        {sizeScreen < 768 && (
          <MenuIcon fontSize={"large"} onClick={handleDrawerOpen} />
        )}
      </FadeInContainer>
      <CreateNewCardButton onClick={handleOpenModalCreateCard}>
        + Novo Card
      </CreateNewCardButton>
    </Content>
  );
}
