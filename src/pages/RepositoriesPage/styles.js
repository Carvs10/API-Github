import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.background};
  min-width: 20rem;
  min-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.container};
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
  @media screen and (max-width: 576px) {
    padding: 40px 20px;
  }
`;
