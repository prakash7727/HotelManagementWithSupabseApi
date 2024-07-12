import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledApplay = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    max-width: 100%; 
  }
  
`;
const Main = styled.main`
  background-color: #f3f2f2;
  padding: 4rem 4.8rem 6.4rem;
  overflow:scroll;

`;
const Container = styled.div`
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

function AppLayout() {
  return (
    <>
      <StyledApplay>
        <Header />
        <Sidebar />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledApplay>
    </>
  );
}
export default AppLayout;
