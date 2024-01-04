import Head from "next/head";
import TaskBan from "@/components/Taskban";
import Header from "@/components/Header";
import PersistentDrawerLeft from "@/components/PersistentDrawerLeft";
import styled from "styled-components";
import Main from "@/components/Main";
import { useScreenSizeContext } from "@/components/contexts/screenSizeContext";
import { TasksContextProvider } from "@/components/contexts/tasksContext";
import { DateContextProvider } from "@/components/contexts/dateContext";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: red;
  @media (min-width: 768px) {
    width: calc(100vw - 300px);
  }
`;

export default function Home() {
  const { sizeScreen } = useScreenSizeContext();

  return (
    <>
      <Head>
        <title>TaskBan - Lucas W</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/herocodefavicon.ico" />
      </Head>
      {sizeScreen < 768 ? (
        <PersistentDrawerLeft />
      ) : (
        <TaskBan $isTransparent={false} />
      )}
      <Wrapper>
        <Header />
        <TasksContextProvider>
          <DateContextProvider>
            <Main />
          </DateContextProvider>
        </TasksContextProvider>
      </Wrapper>
    </>
  );
}
